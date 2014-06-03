/*
Copyright (c) 2013 - 2014 ACenterA Inc.

MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

package controllers.acentera;

import models.db.User;
import models.web.AppObj;
import models.web.AppObj$;
import models.web.DesktopObject;
import models.web.WebSession;
import net.sf.json.JSONObject;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import play.Logger;
import play.cache.Cache;
import play.i18n.Messages;
import play.libs.F;
import play.mvc.Action;
import play.mvc.Http;
import play.mvc.Result;
import play.mvc.SimpleResult;
import utils.DatabaseManager;
import utils.HibernateSessionFactory;

public class AnonymousSecurityController extends Action.Simple {

    //public final static String AUTH_TOKEN_HEADER = "X-AUTH-TOKEN";
    public static final String AUTH_TOKEN = "token";
    public static final String AUTHSECRET_TOKEN = "token";
    public static final String DESKTOP_TOKEN = "dtid";

    String uuid(Http.Context ctx) {
        Logger.debug("UUID is : " + ctx._requestHeader().session());
        Logger.debug("UUID VS is : " + ctx._requestHeader().headers());
        Http.Cookie res = ctx.request().cookie(AUTH_TOKEN);
        if (res == null) {
            return "";
        }


        return res.value();
    }

    String getEmailFromSession(Http.Context ctx) {

        Http.Cookie res = ctx.request().cookie("email");
        if (res == null) {
            return "";
        }


        return res.value();
    }

    String getStringCacheValue ( Http.Context ctx, String key )  {
        String keyCache = uuid(ctx) + "." + key;
        Logger.debug("CACHE KEY IS : " + keyCache);
        Object data = Cache.get(keyCache);
        if (data == null) {
            return "";
        } else {
            return data.toString();
        }
    }

    Object getCacheObject ( Http.Context ctx, String key )  {
        String keyCache = uuid(ctx) + "." + key;
        Object data = Cache.get(keyCache);
        if (data == null) {
            return null;
        } else {
            return data;
        }
    }



    public static Result FailedMessage(String message) {
        JSONObject jsoUnauthorzed = new JSONObject();
        jsoUnauthorzed.put("status", "failed");
        jsoUnauthorzed.put("message", Messages.get(message));
        return notFound(jsoUnauthorzed.toString()).as("application/json");
    }

    public static Result InternalServerError(String message) {
        return internalServerError().as("application/json");
    }

    public F.Promise<SimpleResult>  NotAuthorized() {
        //return play.libs.F.Promise.pure((SimpleResult) controllers.Auth.logout());
        return F.Promise.pure((SimpleResult) FailedMessage("UNAUTHORIZED"));
    }


    public static Subject getSubject() {
        try {
            Subject s = SecurityUtils.getSubject();
            if (s.getSession() == null) {
                s = new Subject.Builder().buildSubject();
            }
            return s;
        } catch (org.apache.shiro.session.UnknownSessionException e) {
            Subject s = new Subject.Builder().buildSubject();
            return s;
        } catch (Exception e) {

        }
        Subject s = new Subject.Builder().buildSubject();
        return s;
        //return null;
    };

    public F.Promise<SimpleResult> call(final Http.Context ctx) throws Throwable {
        try {
            return processRequest(ctx);
        } catch (Exception e) {
            e.printStackTrace();

            //Rollback any changes
            try {
                DatabaseManager.getInstance().rollback();
            } catch (Exception ew) {

            }
            HibernateSessionFactory.rollback();

        } finally {
            //Commit or close the active session
            try {
                DatabaseManager.getInstance().closeIfConnectionOpen();
            } catch (Exception ew) {

            }
            HibernateSessionFactory.closeSession();
        }
        return NotAuthorized();
    }

    protected F.Promise<SimpleResult> processRequest(Http.Context ctx) throws Throwable {
        Logger.debug(" [ AnonymousProcessRequest ] - Start ");
        try {
            F.Promise<SimpleResult> z = delegate.call(ctx);
            return z;
        } finally {
            try {
                DatabaseManager.getInstance().rollback();
            } catch (Exception z){

            }

            try {
                HibernateSessionFactory.rollback();
            } catch (Exception z){

            }
            Logger.debug(" [ AnonymousProcessRequest ] - Completed ");
        }
    }

    public static String getEmail() {
        try {
            return (String) Http.Context.current().args.get("email");
        } catch (Exception ee) {
            return (String)((User)getSubject().getPrincipal()).getEmail();
        }
    }

    public static User getUser() {
        //TODO: Try to get it from cache ???
        try {
            return (User) Http.Context.current().args.get("user");
        } catch (Exception ee) {
            return (User) getSubject().getSession().getAttribute("user");
        }
    }

    public static WebSession getWebSession() {
        return (WebSession)Http.Context.current().args.get("websession");
    }

    public static DesktopObject getDesktop() {
        try {
            return (DesktopObject) Http.Context.current().args.get("desktop");
        } catch (Exception ee) {
            return (DesktopObject) getSubject().getSession().getAttribute("desktop");
        }
    }


    public static DesktopObject getDesktop(String desktopId) {
        DesktopObject desktop = AppObj$.MODULE$.getDesktop(desktopId);

        //TODO: Should we validate that the desktop belongs to that user ? (desktop user... vs current logged in user?? bu we want to support impersonating a user too.. so lets ignore for now)
        return desktop;
    }


}
