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
import models.web.DesktopObject;
import models.web.WebSession;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.mgt.RealmSecurityManager;
import play.mvc.With;
import sun.security.krb5.Realm;
import utils.security.PasswordEncoder;
import utils.security.SampleRealm;

import java.util.Collection;
import java.util.Iterator;


public abstract class ACenterAController extends AnonymousController {

    public static String getEmail() { return SecurityController.getEmail(); }

    public static User getUser() {
        return SecurityController.getUser();
    }

    public static WebSession getWebSession() {
        return SecurityController.getWebSession();
    }

    public static DesktopObject getDesktop() {
        return SecurityController.getDesktop();
    }

    public static boolean confirmUserPassword(User u, String password) throws Exception {
        return (PasswordEncoder.getInstance().encode(password, u.getSalt()).compareTo(u.getPassword()) == 0);
    }

    public static boolean refreshPermissions() {


        RealmSecurityManager mgr =
                (RealmSecurityManager) SecurityUtils.getSecurityManager();

        Collection<org.apache.shiro.realm.Realm> realmCollection = mgr.getRealms();

        Iterator<org.apache.shiro.realm.Realm> i = realmCollection.iterator();

        //There should be only one realm?
        while(i.hasNext()) {

            try {
                SampleRealm r = (SampleRealm) i.next();

                r.invalidateUser(SecurityUtils.getSubject().getPrincipals());
            } catch (Exception ee) {

            }

        }

        return true;
    }

    public static boolean checkPermission(String access) {
        SecurityController.getSubject().checkPermission(access);

        return true;
    }

}
