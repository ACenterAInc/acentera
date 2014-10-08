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

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import models.db.User;
import models.web.DesktopObject;
import models.web.WebSession;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import play.Logger;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.With;
import utils.security.PasswordEncoder;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public abstract class AnonymousController extends Controller {


    /*public static Result OkEmptyJsonResult() {
        return ok("{ \"status\": true, \"message\":\"Success\" }").as("application/json");
    }*/

    public static Result OkNotFound() {
        response().setHeader("Access-Control-Allow-Origin","*");

        if (ctx().request().getQueryString("callback") != null) {
            return ok(ctx().request().getQueryString("callback") + "()").as("application/json");
        }

        return notFound().as("application/json");
    }

    public static Result OkEmptyJsonResult() {
        response().setHeader("Access-Control-Allow-Origin","*");

        if (ctx().request().getQueryString("callback") != null) {
            return ok(ctx().request().getQueryString("callback") + "()").as("application/json");
        }

        return noContent().as("application/json");
    }


    public static Result OkCreatedJsonResult(JSONObject jsoRes) {
        response().setHeader("Access-Control-Allow-Origin","*");

        if (ctx().request().getQueryString("callback") != null) {
            return created(ctx().request().getQueryString("callback") + "(" + jsoRes.toString() + ")").as("application/json");
        }

        return created(jsoRes.toString()).as("application/json");
    }



    public static Result DeletedObject(Long id, String  type) {

        JSONObject deletedJson = new JSONObject();
        deletedJson.put("id", id);
        deletedJson.put("disable_date", "NOT_EXISTANT");

        try {
            throw new Exception("ew");
        } catch (Exception ee) {
            ee.printStackTrace();
        }

        JSONObject res = new JSONObject();
        res.put(type, deletedJson);

        if (ctx().request().getQueryString("callback") != null) {
            return created(ctx().request().getQueryString("callback") + "(" + res.toString() + ")").as("application/json");
        }
        return ok(res.toString()).as("application/json");
    }

    public static Result OkCreatedJsonResult(String  res) {

        response().setHeader("Access-Control-Allow-Origin","*");

        if (ctx().request().getQueryString("callback") != null) {
            return created(ctx().request().getQueryString("callback") + "(" + res.toString() + ")").as("application/json");
        }
        return created(res).as("application/json");
    }

    public static Result OkJsonResult(String res) {

        response().setHeader("Access-Control-Allow-Origin","*");
        if (ctx().request().getQueryString("callback") != null) {
            return ok(ctx().request().getQueryString("callback") + "(" + res.toString() + ")").as("application/json");
        }
        return ok(res.toString()).as("application/json");
    }

    public static Result OkJsonResult(JSONObject jsoRes) {

        response().setHeader("Access-Control-Allow-Origin","*");

        if (ctx().request().getQueryString("callback") != null) {
            return ok(ctx().request().getQueryString("callback") + "(" + jsoRes.toString() + ")").as("application/json");
        }

        return ok(jsoRes.toString()).as("application/json");
    }
    //SecurityController

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


    public static Result InternalServerError(String msg) { return SecurityController.InternalServerError(msg);}
    public static Result FailedMessage(String msg) { return SecurityController.FailedMessage(msg);}
    public static Result FailedMessage(Exception e) { e.printStackTrace();return SecurityController.FailedMessage("Got internal exception");}
    public static Result FailedMessage(String msg, Exception e) { return SecurityController.FailedMessage(msg);}


    static Pattern pattern = Pattern.compile("^[a-zA-Z0-9]*$");


    public static String getQueryString(String key) throws Exception {

            String res = request().getQueryString(key);
            if (res == null) {
                return null;
            }

            Matcher matcher = pattern.matcher(res);
            if (matcher.matches()) {
                return res;
            } else {
                throw new Exception("Invalid string ");
            }
    }

    public static JSONObject getPostBodyAsJson(String key) {
        try {
            return JSONObject.fromObject(request().body().asJson().get(key).toString());
        } catch (Exception eee) {
            return new JSONObject();
        }
    }
    public static JSONObject getPostBodyAsJson() {
        try {
            return JSONObject.fromObject(request().body().asJson().toString());
        } catch (Exception ee) {
            Map<String, String[]> m = request().body().asFormUrlEncoded();
            if( m != null) {
                if (m.keySet().size() > 0) {
                    Iterator<Map.Entry<String, String[]>> itr = m.entrySet().iterator();
                    JSONObject jso = new JSONObject();
                    while (itr.hasNext()) {
                        Map.Entry<String, String[]> e = itr.next();
                        try {
                            jso.put(e.getKey(), e.getValue()[0]);
                        } catch (Exception error) {

                        }
                    }
                    return jso;
                }
            }
        }



        return new JSONObject();
    }

    public static JSONObject getObjectToJson(Object obj) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        ObjectWriter ow = mapper.writer();
        try {
            JSONObject jso = JSONObject.fromObject(ow.writeValueAsString(obj));
            return jso;
        } catch (Exception ex) {
            if ((obj instanceof List) || ( obj instanceof Set)) {
                if ((obj instanceof List) ) {
                    if (((List)obj).size() <= 0 ) {
                        return new JSONObject();
                    }
                } else if ((obj instanceof Set) ) {
                    if (((Set)obj).size() <= 0 ) {
                        return new JSONObject();
                    }
                }
            }
            ex.printStackTrace();
            return null;
        }
    }

    public static JSONObject getObjectToJson(Object obj, String key) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        ObjectWriter ow = mapper.writer();
        try {
            if ((obj instanceof List) || ( obj instanceof Set)) {
                JSONObject resp = new JSONObject();
                Iterator<Object> itrObj = null;
                if (obj instanceof List) {
                    itrObj = ((List) obj).iterator();
                }
                if (obj instanceof Set) {
                    itrObj = ((Set)obj).iterator();
                }
                JSONArray jsArr = new JSONArray();
                while(itrObj.hasNext()) {
                    Object ll = itrObj.next();
                    Logger.debug("GOT OBJ A : " + ll);
                    JSONObject jso = JSONObject.fromObject(ow.writeValueAsString(ll));
                    Logger.debug("GOT OBJ AA : " + jso);
                    jsArr.add(jso);
                }
                resp.put(key, jsArr);
                return resp;
            } else {
                JSONObject jso = JSONObject.fromObject(ow.writeValueAsString(obj));
                JSONObject resp = new JSONObject();
                resp.put(key, jso);
                return resp;
            }
        } catch (JsonProcessingException ex) {

            ex.printStackTrace();
            return null;
        }
    }

    public static boolean confirmUserPassword(User u, String password) throws Exception {
        return (PasswordEncoder.getInstance().encode(password, u.getSalt()).compareTo(u.getPassword()) == 0);
    }

}
