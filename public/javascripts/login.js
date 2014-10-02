//We should be using Ember but it was easier to have ember only for the Application,
//and for login pages not using any ember for now since it was done prior the use of ember



if (String.prototype.replaceAll == undefined) {
    String.prototype.replaceAll=function(s1, s2) {return this.split(s1).join(s2)}
}
if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}

var coupondb = null;

function populateLoginDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS ACCOUNT');
    tx.executeSql('CREATE TABLE IF NOT EXISTS ACCOUNT (k unique, v)');
}

var permanentStorage = window.localStorage;
var tempStorage = window.sessionStorage;


function errorCB(err) {
    //alert("Error processing SQL: "+err.code);
}

function successCB() {
    //alert("success!");
}

try {
    coupondb = window.openDatabase("coupons", "1.0", "Coupon DB", 1000000);
    coupondb.transaction(populateLoginDB, errorCB, successCB);
} catch (ee) {
}




try {
    document.domain='acentera.com';
} catch (e) {
   // console.error(e.stack);
}



if (prefix == undefined) {
    var prefix = "/";
}

var customHost = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + prefix
if (prefix == "/") {
        customHost = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')
}



//Some cookie helper functions
function createCookieDomain(name, value, days, domain) {
    var cookieName = name;
    var cookieValue = value;
    var myDate = new Date();
    myDate.setMonth(myDate.getMonth() + 1);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate
                  + ";domain=" + domain + ";path=/";
}

function addToCookie(tx) {
    try {
        tx.executeSql('DELETE FROM ACCOUNT WHERE k = "' + cname + '"');
        tx.executeSql('INSERT INTO ACCOUNT (k, v) VALUES("' + cname + '", "' + cval + '")');
    } catch (ee) {

    }
}

var cname = null;
var cval = null;
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";

    try {
        window.localStorage.setItem(name, value);
    } catch (zz) {
    }
    try {
        cname=name;
        cval = value;

        coupondb.transaction(addToCookie, errorCB, successCB);
    } catch (zz) {
    }

    document.cookie = name+"="+value+expires+"; path=/";

}

function readCookie(name) {
    try {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
    } catch (wrongcookie) {

    }
    //return empty
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


var successFn = function(data) {

	cleanRegisterAlert();
        if(data == "true"){
            $('#register-alert-box').html('');
            $("#register-alert-box").append('<strong>Error! &nbsp;</strong>Email Id Already exist '+ '</div>');

            $("#regemail").removeClass("success");
            $("#regemail").addClass("error");

            $("#register-alert-box").addClass('alert-danger');
        }
        else{
            $('#register-alert-box').html('');
	        $("#register-alert-box").addClass("alert-success");
            $("#register-alert-box").append('<strong>Success! &nbsp;</strong>Valid Email Id '+ '</div>');

            $("#regemail").removeClass("error");
            $("#regemail").addClass("success");
        }

};

var errorFn = function(err) {

}


function cleanRegisterAlert() {
         $('#register-alert-box').removeClass("alert-info");
         $('#register-alert-box').removeClass("alert-danger");
         $('#register-alert-box').removeClass("alert-success");
         $('#register-alert-box').removeClass("alert-primary");
         $('#register-alert-box').removeClass("alert-success");
         $('#register-alert-box').html('');
}

function cleanLoginAlert() {

         $('#login-alert-box').removeClass("alert-info");
         $('#login-alert-box').removeClass("alert-danger");
         $('#login-alert-box').removeClass("alert-success");
         $('#login-alert-box').removeClass("alert-primary");
}



var successMustExistFn = function(data) {
  cleanLoginAlert();
  if(data == "false"){
     $('#login-alert-box').html('');
     $('#login-alert-box').addClass("alert-danger");
     $("#login-alert-box").append('<strong>Error! &nbsp;</strong>Email does not exist '+ '</div>');

     $("#email").removeClass("success");
     $("#email").addClass("error");

  }  else  {
     $('#login-alert-box').html('');
     $("#login-alert-box").append('<strong></strong> '+ '</div>');

     $("#email").removeClass("error");
     $("#email").addClass("success");
  }

};


var ajax2 = {
    success: successFn,
    error: errorFn
}


var ajax1 = {
    success: successMustExistFn,
    error: errorFn
}

function isEmailExist(obj, async) {
    var val = obj.value;

    if (async == undefined) {
       as = true;
    } else {
       as = false;
    }

    //TODO: We should remove the ajax call and just use a email validator using javascript..
    var resp = false;
    if (isValidEmailAddress(val)) {
          $.ajax({
          url: prefix + "validate/email/" + val,
          async:   as,
          context: document.body,
          success: successMustExistFn,
          error: errorFn,
          });
    } else {
         $('#login-alert-box').html('');
         $("#login-alert-box").append('<strong>Error! &nbsp;</strong>Invalid email format '+ '</div>');

         cleanLoginAlert();
             $("#email").removeClass("success");
             $("#email").addClass("error");
         $('#login-alert-box').addClass("alert-danger");
    }
}


function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
            // alert( pattern.test(emailAddress) );
            return pattern.test(emailAddress);
};





function isEmailNotExist(obj, async) {
    var val = obj.value;
    cleanRegisterAlert();

    if (async == undefined) {
       as = true;
    } else {
       as = false;
    }

    var resp = false;
    if (isValidEmailAddress(val)) {
          $.ajax({
          url: prefix + "validate/email/" + val,
          async:   as,
          context: document.body,
          success: successFn,
          error: errorFn,
          });
    } else {

         cleanRegisterAlert();

         $("#register-alert-box").append('<strong>Error! &nbsp;</strong>Invalid email format</div>');


        $("#regemail").removeClass("success");
             $("#regemail").addClass("error");
            $('#register-alert-box').addClass("alert-danger");
    }
}



        function toregister() {
            $('#register').addClass('animate').removeClass('hidden');
            $('#login').addClass('animate').removeClass('hidden');
        }

        function tologin() {
             $('#register').addClass('animate').removeClass('hidden');
             $('#login').addClass('animate').removeClass('hidden');
        }


        function passwordValidate(field, comp) {

      	    $('#register-alert-box').removeClass("alert-success");
            if (field.value.length >= 2) {
                $('#' + field.id).addClass('success').removeClass('error');
            } else {
                $('#' + field.id).addClass('error').removeClass('success');
            }
            if (comp) {
              cleanRegisterAlert();
              if ( comp[0].value.length >= 1 ){
            passwordCompare(comp[0], $('#regpassword')[0])
              }
            }

        }


        function checkCaptcha() {

                if ( $("#recaptcha_response_field").is(':disabled') ) {

                } else {
                    var data = {
                        challenge: $('#recaptcha_challenge_field')[0].value,
                        captcha: $('#recaptcha_response_field')[0].value
                    }

                    $.post(customHost + prefix + 'validateCaptcha/', data, function(response) {
                            if (response.success) {
                                $("#recaptcha_response_field").addClass("success").removeClass("error");
                                $("#recaptcha_response_field").prop('disabled', true);
                            } else {
                                $("#recaptcha_response_field").addClass("error").removeClass("success");

                                $("#recaptcha_response_field").text("");
                                $("#recaptcha_reload").click();
                                setTimeout(function() {
                                    $('#recaptcha_reload').click();
                                }, 800);
                            }

                    }, 'json');
                }

        }

        function passwordCompare(field1, field2) {
            cleanRegisterAlert();
      	    $('#register-alert-box').removeClass("alert-success");

            //console.log(field1.value+ ' vs ' + field2.value);
            if (field1.value == field2.value) {
                if (field2.value == undefined) {
                    $('#' + field2.id).addClass('error').removeClass('success');
                    $('#register-alert-box').addClass('alert-danger');
                    $('#register-alert-box').html('Typed passwords does not match.');
                } else {
                    $('#' + field1.id).addClass('success').removeClass('error');
                    $('#register-alert-box').html('');
                    cleanRegisterAlert();
                }
            } else {
                $('#register-alert-box').html('');
                $('#' + field1.id).addClass('error').removeClass('success');
	            $('#register-alert-box').addClass('alert-danger');
	            $('#register-alert-box').html('Typed passwords does not match.');
            }
        }

        function submitLoginForm( email, password) {
            //TODO: Generate a public key value based on a random value that Play would generate in the html?

            var token = "";
            //Encrypt the Password using the Token

            var formValid = false;

            formValid = true;
            formValid = true;


            $('#register-alert-box').hide();
            isEmailExist(email,1);
            if ( !  $("#email").hasClass('success') ) {
                return;
            }

            passwordValidate(password);

	        if (! $("#password").hasClass('success') ) {
		        return;
	        }


            if (formValid) {

                var data = {
                    email: email.value ,
                    password: password.value
                }


                $.post(customHost + prefix + 'authenticate', data, function(response) {
                    // Do something with the request
                    //createCookie("TEST","VAL",11);
                    //console.log(response);
                    if (response.success) {
                        $('#login-alert-box').html('authenticated');
                        $('#login-alert-box').addClass('alert-success');

                        try {
                            if (response.email != undefined) {
                                createCookie("email",response.email, 9999);
                            }
                            if (response.token != undefined) {
                                createCookie("token",response.token, 9999);
                            }
                            if (response.tokensecret != undefined) {
                                createCookie("tokensecret",response.tokensecret, 9999);
                            }
                        } catch (ee) {
                        }
                       try {
                            var oldUrl = window.location.hash;
                            if ((oldUrl == "") || (oldUrl == undefined)) {
                                document.location.href = prefix;
                            } else {
                               if (oldUrl.indexOf('/') >= 0) {
                                   document.location.href = prefix;
                                   //document.location.href = prefix + oldUrl;
                               } else {
                                 document.location.href = prefix;
                               }
                           }
                       } catch (ee) {
                            document.location.href = prefix;
                       }
                    } else {

                            $('#login-alert-box').html( response.message );
                            $('#login-alert-box').addClass('alert-danger');
                            $("#password").addClass('error');

                    }

                }, 'json');

            }

        }



        function submitForm( regemail, regpassword, confirm, captchafield, captcharesp) {
            cleanRegisterAlert();
            $("#btnRegister").attr('disabled', 'disabled');
            $("#btnRegister").text('Processing...');
            var formValid = false;

            formValid = true;


       	    $('#register-alert-box').hide();
	        isEmailNotExist(regemail,1);
	        if ( !  $("#regemail").hasClass('success') ) {
		        $("#btnRegister").text('Register');
	            $("#btnRegister").attr('disabled', null);
       	        $('#register-alert-box').show();
		        return;
            }
	        passwordCompare($("#passwordsignup_confirm")[0], $('#regpassword')[0]);
	        if ( !  $("#passwordsignup_confirm").hasClass('success') ) {
		        $("#btnRegister").text('Register');
	            $("#btnRegister").attr('disabled', null);
       	        $('#register-alert-box').show();
		        return;
	        }

	        if ( !  $("#regpassword").hasClass('success') ) {
		        $("#btnRegister").text('Register');
	            $("#btnRegister").attr('disabled', null);
       	        $('#register-alert-box').show();
		        return;
	        }
       	    $('#register-alert-box').show();




            formValid = true;
            if (formValid) {

                var data = {
                        jsonemail: regemail.value,
                        password: regpassword.value,
                        confirm: confirm.value,
                        challenge: captchafield.value,
                        captcha: captcharesp.value
                      }

                $.post(customHost + prefix + 'createAccount/' + regemail.value + '', data, function(response) {
                    // Do something with the request

                    if (response.success) {
				        $("#btnRegister").text('Success...');
                        var data = {
                            email: regemail.value,
                            password: regpassword.value
                        }
                        $('#register-alert-box').html('Account  created successfully. Login in..');
                        $('#register-alert-box').addClass('alert-success');

				        setTimeout(function() {
                                  $.post(customHost + prefix + 'authenticate', data, function(response) {
                                    // Do something with the request

                                    if (response.success) {
                                        $('#login-alert-box').html('');

                                        createCookie("email",response.email, 9999);
                                        createCookie("token",response.token, 9999);
                                        createCookie("tokensecret",response.tokensecret, 9999);
                                        /*setTimeout(function() {
                                            var oldUrl = window.location.hash;
                                            if ((oldUrl == "")) {
                                                document.location.href = prefix;
                                             } else {
                                                if (oldUrl.indexOf('/') >= 0) {
                                                    document.location.href = prefix + oldUrl;
                                                } else {
                                                    document.location.href = prefix;
                                                }
                                             }
                                        }, 100);*/
                                    } else {
	                                    //document.location.href = prefix + 'login';
                                    }
                                   });
				        }, 500);

                    } else {
				        $("#btnRegister").text('Register');
			            $("#btnRegister").attr('disabled', null);

                        $("#recaptcha_reload").click();

                          if (response.code == "CAPTCHA_001") {
                                $('#register-alert-box').html('');
                                $("#recaptcha_response_field").addClass("error").removeClass("success");
                          } else {
                                $('#register-alert-box').html('');
                                $('#register-alert-box').addClass("error");
                                $("#register-alert-box").append('<div>' + ' ' + response.message + ' </div>');
                          }
                    }
                }, 'json');


            }
        }




//Animation setup functions on keypress login / register
$(document).ready(function() {
         var fullUrl = document.URL.split('#')[0];
         var section = document.URL.split('#')[1];


         if (section == undefined) {
               if (fullUrl.indexOf('login')) {
                    $('#login').removeClass('hidden');
               } else {
                    $('#register').removeClass('hidden');
               }

         } else if (section == "tologin") {
               $('#login').addClass('animate').removeClass('hidden');
         } else if (section == "toregister") {
                $('#register').addClass('animate').removeClass('hidden');
         } else {
            $('#login').addClass('animate').removeClass('hidden');
         }

         setTimeout( function () { $("#register-alert-box").html(''); $("#login-alert-box").html('');cleanLoginAlert();cleanRegisterAlert(); }, 3000);


         $("#recaptcha_response_field").blur(function() {
             $(this).removeClass('error');
             //   checkCaptcha();
         });



        function tryLogin() {
                    passwordValidate($('#password')[0]);

                    $('#loginBtn').focus();

                     setTimeout( function() {
                        submitLoginForm( $('#email')[0], $('#password')[0] );
                     }, 300);
        }

        setTimeout(function() {
            $('#password').keypress(function (e) {
                if (e.which == 13) {
                    tryLogin();
                    return false;
                }
            });
        }, 1000);


});


//Aninmations
 $(document).ready(function() {
    var activeForm = window.location.hash + ' > form';

	if (activeForm == '#signup > form') {
		$("#login").removeClass("active");
		$("#forgot").removeClass("active");
		$("#signup").addClass("animate");
		$("#signup").addClass("active");
		$("#signup > form").addClass('magictime swap');

		setTimeout(function() {
          $("#signup > form").removeClass('magictime swap');
        }, 300);

	} else if (activeForm == '#login > form')  {
		$("#signup").removeClass("active");
		$("#forgot").removeClass("active");
		$("#login").addClass("animate");
		$("#login").addClass("active");
		$("#login > form").addClass('magictime swap');

			setTimeout(function() {
          $("#login > form").removeClass('magictime swap');
        }, 300);

    } else if (activeForm == '#forgot > form')  {
		$("#signup").removeClass("active");
		$("#login").removeClass("active");
		$("#forgot").addClass("animate");
		$("#forgot").addClass("active");
		$("#forgot > form").addClass('magictime swap');

		setTimeout(function() {
          $("#forgot > form").removeClass('magictime swap');
        }, 300);

	} else {
		$("#signup").removeClass("active");
		$("#forgot").removeClass("active");
		$("#login").addClass("active");
        $("#login > form").addClass('magictime swap');

        setTimeout(function() {
          $("#login > form").removeClass('magictime swap');
        }, 300);
	}
    //set timer to 1 seconds, after that, unload the magic animation


    $('.list-inline li > a').click(function() {
        var activeForm = $(this).attr('href') + ' > form';
        if ($(this).attr('href') == '#signup') {
            $("#login").removeClass("active");
            $("#forgot").removeClass("active");
            $("#signup").addClass("animate");
            $("#signup").addClass("active");
        } else if ($(this).attr('href') == '#login')  {
            $("#signup").removeClass("active");
            $("#forgot").removeClass("active");
            $("#login").addClass("animate");
            $("#login").addClass("active");
        } else if ($(this).attr('href') == '#forgot')  {
            $("#signup").removeClass("active");
            $("#login").removeClass("active");
            $("#forgot").addClass("animate");
            $("#forgot").addClass("active");
        }

        $(activeForm).addClass('magictime swap');

        //set timer to 1 seconds, after that, unload the magic animation
        setTimeout(function() {
              $(activeForm).removeClass('magictime swap');
            }, 1000);
     });
});



var currentHref = document.location.href;


var fbAuth = function(iter, resp) {

    var loginButton = $('#login-with-facebook');
    var loginText = $('#login-text');
    var reload= $('#login-reload');
    var quitapp= $('#login-quit');

    $.ajax(customHost + prefix + 'fbauth/', {
                               type: 'POST',
                               data: JSON.stringify(resp),
                               xhrFields: {
                                      withCredentials: false
                               },
                               headers: {
                                                 "dtid": "",
                                                 "token": "",
                                                 "tokensecret": "",
                                                 "email": ""
                               },
                               dataType: "json",
                               async:  true,
                               timeout: 3000,
                               contentType: "application/json; charset=utf-8",
                               success: function(response) {
                                    //alert("GOOD ");
                                    //alert("response : " + response);

                                    $('#login-alert-box').html('');
                                    //try {alert(response.success);} catch (z) {}
                                    if (response.success) {

                                        $('#login-alert-box').html('authenticated');
                                        $('#login-alert-box').addClass('alert-success');
                                        //reset data..
                                        try {window.localStorage.clear();} catch (ee) {}
                                        //alert(response.email);
                                        //alert(response.token);
                                        //alert(response.tokensecret);
                                        createCookie("email",response.email, 9999);
                                        createCookie("token",response.token, 9999);
                                        createCookie("tokensecret",response.tokensecret, 9999);
                                        //alert('going to index');

                                        try {
                                            loginButton.show();
                                            loginText.hide();
                                        }catch (ww) {
                                        }

                                        if (isCordovaApp) {
                                            document.location.href = "index.html";
                                        } else {
                                            document.location.href = "/";
                                        }


                                    } else {
                                        loginButton.show();
                                        loginText.hide();
                                    }
                               },
                               error: function(jqXHR, textStatus, errorThrown) {
                                   //Problem while sending the request
                                  //alert("ERROR ");
                                   //console.error(jqXHR);
                                   //alert("ERROR");
                                   //alert(textStatus);
                                   //alert(jqXHR.status);
                                   //alert(jqXHR.responseText);
                                   if (iter > 3) {
                                        loginButton.show();
                                        loginText.hide();
                                        alert('Could not authenticate, please try again');
                                    } else {
                                        fbAuth(iter+1, resp);
                                    }
                               }

                          });

}


var fblogin = function() {
    //alert('login..');
    eraseCookie("JSESSIONID");
    window.localStorage.setItem('JUSTLOADED', 1);
    var loginButton = $('#login-with-facebook');
    var loginText = $('#login-text');
    var reload= $('#login-reload');
    var quitapp= $('#login-quit');

    var interval = setInterval(function() {
        try {
            loginButton.show();
            loginText.hide();
        } catch (ee) {
        }

        clearInterval(interval);
    }, 10000);


}

$(document).ready(function(){

try {

    try {

        try {
                    var loginButton = $('#login-with-facebook');
                    var loginText = $('#login-text');
                                                    loginButton.show();
                                                    loginText.hide();
        }catch (ww) {
        }

        if (isCordovaApp) {

        } else {

            if (("" + document.location.href).indexOf(":90") >= 1 ) {

            } else {
                var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-34138073-2']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src=('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();

                /*try {
                            var e = document.createElement("script"); e.async = true;
                            e.src = document.location.protocol + "//connect.facebook.net/en_US/all.js";
                            //e.src = "assets/javascripts/sdk.js";
                            document.getElementById("fb-root").appendChild(e);
                } catch (ee) {
                            console.error(ee.stack);
                }*/
            }
        }


        var loginButton = $('#login-with-facebook');

/*
        loginButton.on('click', function(e) {
            e.preventDefault();

            $.ajax(customHost + prefix + 'fbauth', {
                 xhrFields: {
                  withCredentials: false
                },
                dataType: "jsonp",
                complete: function(d) {
                       console.error("RESPO");
                       console.error(d);
               }

            });

            window.location.href=customHost + prefix + "fblogin?redir=" + currentHref;
        });*/
        //if (isCordovaApp) {
            var loginButton = $('#login-with-facebook');
            var loginText = $('#login-text');
            var reload= $('#login-reload');
            var quitapp= $('#login-quit');
	    loginButton.show();
	    loginText.hide();
	    reload.show();

            reload.on('click', function(e) {
                    e.preventDefault();
                    location.reload();
            });

            quitapp.on('click', function(e) {
                       e.preventDefault();
                       try {
                           if(navigator.app){
                                   //try {gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);} catch (ee) {}
                                   navigator.app.exitApp();
                           }else if(navigator.device){
                                                       //try {gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);} catch (ee) {}
                                   navigator.device.exitApp();
                           }
                       } catch (ee) {
                       }

                       try {
                           if(navigator.device){
                                                   //try {gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);} catch (ee) {}
                               navigator.device.exitApp();
                           } else if (navigator.app) {
                                                   //try {gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);} catch (ee) {}
                               navigator.app.exitApp();
                           }
                       } catch (ee) {
                       }
            });



            loginButton.on('click', function(e) {
                e.preventDefault();
                //alert('will call FB');
		loginButton.hide();
		loginText.show();

                try {
                    FB.logout(function(response) {

                    });
                } catch (www) {
                }

                try {
               //alert('a');
                    fblogin();
                   //alert('b');
                } catch(ezz) {
                   //alert(ezz.stack);
                    setTimeout(function() {
                        fblogin();
                    }, 300);
                }
            });
        /*} else {
            var loginButton = $('#login-with-facebook');

            loginButton.on('click', function(e) {
                     e.preventDefault();
                     document.location.href = "fblogin";
            });



            loginButton.on('click', function(e) {
                e.preventDefault();
                //alert('will call FB');
                loginButton.hide();
                loginText.show();

                try {
                FB.logout(function(response) {

                    });
                } catch (www) {
                }

                try {
                    //alert('a');
                    fblogin();
                   //alert('b');
                } catch(ezz) {
                   //alert(ezz.stack);
                    setTimeout(function() {
                        fblogin();
                    }, 300);
                }
            });
*/
/*
            if (("" + document.location.href).indexOf(":90") >= 1 ) {
                loginButton.on('click', function(e) {
                    e.preventDefault();
                    $.ajax(customHost + prefix + 'fbauth/tester', {
                               type: 'POST',
                               xhrFields: {
                                     withCredentials: false
                               },
                               data: "{}",
                               async: false,
                               dataType: "json",
                               contentType: "application/json; charset=utf-8",
                               success: function(response) {
                                    $('#login-alert-box').html('');
                                    //try {alert(response.success);} catch (z) {}
                                    if (response.success) {

                                        $('#login-alert-box').html('authenticated');
                                        $('#login-alert-box').addClass('alert-success');

                                        //alert(response.email);
                                        //alert(response.token);
                                        //alert(response.tokensecret);
                                        createCookie("email",response.email, 9999);
                                        createCookie("token",response.token, 9999);
                                        createCookie("tokensecret",response.tokensecret, 9999);
                                        //alert('going to index');
                                        //alert(response.token);
                                        if (isCordovaApp) {
                                            document.location.href = "index.html";
                                        } else {
                                            document.location.href = prefix + "?ts=" + new Date().getTime();
                                        }
                                    }
                               },
                               error: function(jqXHR, textStatus, errorThrown) {
                                   //Problem while sending the request
                                   console.error(jqXHR);
                                   alert('Could not authenticate, please try again');
                               }

                          });
                  });
              } else {
                    loginButton.on('click', function(e) {
                                   e.preventDefault();
                                   document.location.href = "fblogin";
                    });
              }
              */

        //}
    } catch (ee) {
        console.error(ee.stack);
    }
} catch (ee) {
}
});

var isCordovaApp = !!window.cordova;
////alert('a2');
var hostUrl=prefix;
////alert('a3');
var customHost = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + prefix
if (prefix == "/") {
        customHost = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')
}

if (isCordovaApp) {
     customHost = "https://portal.acentera.com/coupons";
} else {
    if (("" + window.location).startsWith("file://")) {
        customHost = "http://192.168.3.135:9000";
    }
}
//customHost = "http://192.168.3.135:9000";

if (isCordovaApp) {

        var coupondb = null;

        // Call onDeviceReady when PhoneGap is loaded.
        //
        // At this point, the document has loaded but phonegap-1.0.0.js has not.
        // When PhoneGap is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
        //
        function onDeviceReady() {
            document.addEventListener("pause", onPause, false);
            document.addEventListener("resume", onResume, false);
            document.addEventListener("online", onOnline, false);
            document.addEventListener("offline", onOffline, false);
            //document.addEventListener("backbutton", onBackKeyDown, false);
            document.addEventListener("menubutton", onMenuKeyDown, false);
            document.addEventListener("searchbutton", onSearchButton, false);
            document.addEventListener("orientationchange", updateOrientation);
            try {
                coupondb = window.openDatabase("coupons", "1.0", "Coupon DB", 1000000);
            } catch (ee) {
            }
           maxwindowWidth = $(window).width();
           maxwindowHeight = $(window).height();

           try {
               pictureSource = navigator.camera.PictureSourceType;
               destinationType = navigator.camera.DestinationType;
           } catch (ee) {
           }

           if (typeof CDV === 'undefined') {
              //alert('CDV variable does not exist. Check that you have included cdv-plugin-fb-connect.js correctly');
           }
           if (typeof FB === 'undefined') {
              //alert('FB variable does not exist. Check that you have included the Facebook JS SDK file.');
           }

           document.addEventListener('deviceready', function() {
               try {
                   FB.init({
                       appId: "1429102920710324",
                       nativeInterface: CDV.FB,
                       useCachedDialogs: false
                   });
               } catch (e) {
               }
           }, false);
        }

        // Handle the pause event
        //
        function onPause() {
            //alert('on Pause');
        }

        // Handle the resume event
        //
        function onResume() {
        }

        function updateOrientation() {
        }

        function onOnline() {
            // Handle the online event
            //alert('is online');
        }

        function onOffline() {
            // Handle the offline event
            //alert('is offline');
            //alert('This app require internet / wifi connection...');
        }

        function onBackKeyDown() {
            // Handle the back button
            ////alert('back');
        }


        function onMenuKeyDown() {
            //alert('menuKeyDown');
        }

        function onSearchButton() {
            //alert('onSearchButton');
        }

} else {



}
