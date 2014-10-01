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

import controllers.AssetsBuilder;
import org.apache.shiro.session.ExpiredSessionException;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import play.api.mvc.AnyContent;
import play.api.mvc.Action;
import play.mvc.*;
import play.*;
import play.mvc.*;

import views.html.*;


public class Application extends Controller {

    private static AssetsBuilder delegate = new AssetsBuilder();

    //public static Action<AnyContent> asset(String path, String file) {
    //     return controllers.Assets.at(path, file);
    //}
    public static Result optionsResponse(String wholepath) {

        return noContent();
    }


    @With(AnonymousSecurityController.class)
    public static Result index() {

        Logger.debug("GOT REQUEST COOKIES : " + ctx());
        Logger.debug("GOT REQUEST COOKIES : " + ctx()._requestHeader());
        Logger.debug("INDEX GOT REQUEST COOKIES : " + ctx().request().body());
        if (request().cookie(SecurityController.AUTH_TOKEN) != null) {
            Logger.debug("APPLICATION RETURN INDEX -> " + play.Play.application().configuration().getString("application.env"));
            //Still need to have a subject
            try {
                Subject s = SecurityController.getSubject();

                Session ss = SecurityController.getSession();

                Logger.debug("Principal is : " + s.getPrincipal());

                if (ss == null || s.getPrincipal() == null) {

                    //Strange... lets as)sume it is ok....only fi we have proper cookies ?
                    Http.Cookie c = ctx().request().cookie("tokensecret");
                    Http.Cookie email = ctx().request().cookie("email");
                    if (c != null && email != null) {
                        String secret = c.value();
                        String e = email.value();
                    } else {
                        throw new ExpiredSessionException("Expired");
                    }
                }

                Logger.debug("AuthtneicateD ? " + s.isAuthenticated());
            } catch (Exception error) {
                //In case we have other exceptions
                error.printStackTrace();
                SecurityController.logout(ctx());
                return redirect("/");
            }

            Http.Response response = ctx().response();
            //Strange... lets as)sume it is ok....only fi we have proper cookies ?
            Http.Cookie t = ctx().request().cookie("token");
            Http.Cookie c = ctx().request().cookie("tokensecret");
            Http.Cookie email = ctx().request().cookie("email");
            Logger.debug("SET TOKEN TO : " + t.value());
            response.setCookie("token", t.value());
            response.setCookie("tokensecret", c.value());
            response.setCookie("email", email.value());
            return ok(index.render("ACenterA Cloud", 1, play.Play.application().configuration().getString("application.env")));
        } else {
            return ok(login.render("login", ""));
        }
    }


    @With(SecurityController.class)
    public static Result indexWithPath(String path) {

        String[] t = request().headers().get("referer");
        String host = request().getHeader("Host");

        response().setHeader("PRAGMA", "no-cache");
        response().setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        response().setHeader("EXPIRES", "Sat, 16-Mar-2000 01:11:11 GMT");

        try {
            Subject s = SecurityController.getSubject();

            Session ss = SecurityController.getSession();

            if (ss == null || s.getPrincipal() == null) {

                //Strange... lets as)sume it is ok....only fi we have proper cookies ?
                Http.Cookie c = ctx().request().cookie("tokensecret");
                Http.Cookie email = ctx().request().cookie("email");
                if (c != null && email != null) {
                    String secret = c.value();
                    String e = email.value();
                } else {
                    throw new ExpiredSessionException("Expired");
                }
            }
            Logger.debug("AuthtneicateD ? " + s.isAuthenticated());
        } catch (Exception error) {
            //In case we have other exceptions
            error.printStackTrace();
            SecurityController.logout(ctx());
            return redirect("/");
        }

        if ((t != null) && (t.length > 0)) {
            String referer = t[0];
            response().setHeader("REDIRECT", "");


            Http.Response response = ctx().response();
            //Strange... lets as)sume it is ok....only fi we have proper cookies ?
            Http.Cookie tt = ctx().request().cookie("token");
            Http.Cookie c = ctx().request().cookie("tokensecret");
            Http.Cookie email = ctx().request().cookie("email");
            Logger.debug("A SET TOKEN TO : " + tt.value());
            response.setCookie("token", tt.value());
            response.setCookie("tokensecret", c.value());
            response.setCookie("email", email.value());

            return ok(index.render("ACenterA Cloud", 1, play.Play.application().configuration().getString("application.env")));
        } else {
            response().setHeader("REDIRECT", "");
            return redirect("/#" + request().path());
        }
    }
}