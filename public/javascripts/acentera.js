try {
//Max time for end-user to wait for...

var maxUserWaitTime = 12000;




if (String.prototype.replaceAll == undefined) {
    String.prototype.replaceAll=function(s1, s2) {return this.split(s1).join(s2)}
}
if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}



String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};


var theCurrentRecord = null;

try {
    $.fn.dataTableExt.sErrMode = 'throw';
} catch (e) {
}



var acenteracontrollers = {};
var acenteramodels = {};



//set a prefix or testing prefix
if (window.prefix === undefined) {
    window.prefix = "/";
}


//isCordovaApp = true;
if (("" + window.location).startsWith("file://")) {
    customHost = "http://192.168.3.135:9000";
} else if (("" + window.location).indexOf(":900") > 1) {
    customHost = "http://192.168.3.135:9000";
} else {
    customHost = "https://portal.acentera.com";
}


//customHost = "http://192.168.2.17:9000";




var modalHeight = 0;

if (window.location.href.indexOf("/test") >= 0) {
    customHost = "https://portal.acentera.com/test/";
    /*window.onerror = function(message, file, lineNumber, colno, error) {
       //alert('errrrz');
       //alert(message);
       //alert(file);
       //alert(lineNumber);
        try {
            if (error) {
               //alert(error.stack);
            }
            dfjdlfs();
        } catch (ezz) {
           //alert(ezz.stack);
        }
        return true;
    };*/
}

hostUrl = customHost + prefix;
//Remove of console errors
//////alert('aaaa2');

//if (typeof console == "undefined") {


if (typeof console == "undefined") {
    this.console = {error: function() {}, log: function() {}};
}



Date.prototype.yyyymmdd = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth()+1).toString();
    var dd  = this.getDate().toString();
    return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]);
};

Date.prototype.yymmdd = function() {
    var yy = this.getFullYear().toString().substring(2,4);
    var mm = (this.getMonth()+1).toString();
    var dd  = this.getDate().toString();
    return yy + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + (dd[1]?dd:"0"+dd[0]);
};



/* StartsWith endsWith */
/*! http://mths.be/endswith v0.2.0 by @mathias */
if (!String.prototype.endsWith) {
  (function() {
    'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
    var defineProperty = (function() {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch(error) {}
      return result;
    }());
    var toString = {}.toString;
    var endsWith = function(search) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      if (search && toString.call(search) == '[object RegExp]') {
        throw TypeError();
      }
      var stringLength = string.length;
      var searchString = String(search);
      var searchLength = searchString.length;
      var pos = stringLength;
      if (arguments.length > 1) {
        var position = arguments[1];
        if (position !== undefined) {
          // `ToInteger`
          pos = position ? Number(position) : 0;
          if (pos != pos) { // better `isNaN`
            pos = 0;
          }
        }
      }
      var end = Math.min(Math.max(pos, 0), stringLength);
      var start = end - searchLength;
      if (start < 0) {
        return false;
      }
      var index = -1;
      while (++index < searchLength) {
        if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
          return false;
        }
      }
      return true;
    };
    if (defineProperty) {
      defineProperty(String.prototype, 'endsWith', {
        'value': endsWith,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.endsWith = endsWith;
    }
  }());
}
//////alert('aaaa3');




/* Only works for native objects, host objects are not
** included. Copies Objects, Arrays, Functions and primitives.
** Any other type of object (Number, String, etc.) will likely give
** unexpected results, e.g. copy(new Number(5)) ==> 0 since the value
** is stored in a non-enumerable property.
**
** Expects that objects have a properly set *constructor* property.
*/
function copy(source, deep) {
   var o, prop, type;

  if (typeof source != 'object' || source === null) {
    // What do to with functions, throw an error?
    o = source;
    return o;
  }

  o = new source.constructor();

  for (prop in source) {

    if (source.hasOwnProperty(prop)) {
      type = typeof source[prop];

      if (deep && type == 'object' && source[prop] !== null) {
        o[prop] = copy(source[prop]);

      } else {
        o[prop] = source[prop];
      }
    }
  }
  return o;
}


Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

// adds an element to the array if it does not already exist using a comparer
// function
Array.prototype.pushIfNotExist = function(element, comparer) {
    if (!this.inArray(comparer)) {
        this.push(element);
    }
};

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
//////alert('aaaa4');

if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}

//////alert('aaaa5');

var isLoaded = false;

var divWindowResizeElem = {};
var jq17 = jQuery.noConflict();
var jq = jQuery.noConflict();
$ = jQuery.noConflict();
var ml = null;

//////alert('aaaa6');

var haveGACreated = false;
//ga('send', 'pageview');
//////alert('aaaa8');


//Some sliding animations... up and then down...
function slideUpReady( DivTag,objToHide, objToShow, executeNow ) {
	if (executeNow) {
		var realObjToShow = objToShow;
		var realObjToHide = objToHide;

		var objp = jq(realObjToShow);
	    if  ( (objp.position().top < 0) && (jq(realObjToHide).position().top >= 0) ) {
			jq(realObjToHide).animate({
				"top": "-=" + jq(realObjToHide).height() + "px"
			  }, {
			    duration: 'slow',
			    complete: function() {
			      var objp = jq(realObjToShow);
			      if (objp.position().top >= 0) {
			    	  objp.hide().animate({"top": "-=" + objp.height() + "px"},{complete: function() {
			    		  jq(this).show();
			    		  jq(this).animate({"top": "+=" + objp.height()+ "px"},'slow');
			    	  }
			    	  }
			    	  );
			      } else {
			    	  objp.animate({"top": "+=" + objp.height() + "px"},'slow');
			      }
			    }
			  });

			scrollTop();
	    } else {

	    	if (jq(realObjToHide).position().top == jq(realObjToShow).position().top) {
	    		//same object we do nothing
	    	} else {
	    		////////////////////////////////////////////////console.log('todo here');
	    	}
	    }

	} else {
		toHide = objToHide;
		toShow = objToShow;
	}
}

function slideDown(DivTag, refid, size) {

	if (toHide != null && toShow != null) {
		var realObjToShow = toShow;
		var realObjToHide = toHide;

		if (realObjToHide == realObjToShow) {
		} else {
			if ( jq(realObjToHide).position().top < 0 &&  jq(realObjToShow).position().top >= 0) {
				//its already shown..
			} else {
				var currentTop = jq(realObjToHide).position().top;
				if (size != 0) {

					if (currentTop >= 0) {

						jq(realObjToHide).animate({
							"top": "-=" +  jq(realObjToHide).height() + "px"
						  }, {
						    duration: 'slow',
						    complete: function() {
						      var objp = jq(realObjToShow);
						      if (objp.position().top >=0) {
						    	  objp.hide().animate({"top": "-=" + objp.height() + "px"},{complete: function() {
						    		  jq(this).show();
						    		  jq(this).animate({"top": "+=" + objp.height()+ "px"},'slow');
						    	  }
						    	  }
						    	  );
						      } else {
						    	  objp.show().animate({"top": "+=" + objp.height() + "px"},'slow');
						      }
						    }
						  });
					} else {

						if (jq(realObjToShow).position().top < 0) {
							jq(realObjToHide).animate({
								"top": "-= 0px"
							  }, {
							    duration: 'slow',
							    complete: function() {
							      var objp = jq(realObjToShow);
							      if (objp.position().top >=0) {
							    	  objp.hide().animate({"top": "-=" + objp.height() + "px"},{complete: function() {
							    		  jq(this).show();
							    		  jq(this).animate({"top": "+=" + objp.height()+ "px"},'slow');
							    	  }
							    	  }
							    	  );
							      } else {
							    	  objp.show().animate({"top": "+=" + objp.height() + "px"},'slow');
							      }
							    }
							  });
						}
					}

					set_carousel_height(DivTag, jq(refid).height());
				} else {
					////////////////////////////////////////////////console.log('test333');
					if (currentTop >= 0) {

						jq(realObjToHide).animate({
							"top": "-=" + jq(realObjToHide).height() + "px"
						  }, {
						    duration: 'slow',
						    complete: function() {
						      var objp = jq(realObjToShow);
						      if (objp.position().top >=0) {
						    	  objp.hide().animate({"top": "-=" + objp.height() + "px"},{complete: function() {
						    		  jq(this).show();
						    		  jq(this).animate({"top": "+=" + objp.height()+ "px"},'slow');
						    	  }
						    	  }
						    	  );
						      } else {
						    	  objp.show().animate({"top": "+=" + objp.height() + "px"},'slow');
						      }
						    }
						  });
					} else {
						jq(realObjToHide).animate({
							"top": "-= 0px"
						  }, {
						    duration: 'slow',
						    complete: function() {
						      var objp = jq(realObjToShow);
						      if (objp.position().top >=0) {
						    	  objp.hide().animate({"top": "-=" + objp.height() + "px"},{complete: function() {
						    		  jq(this).show();
						    		  jq(this).animate({"top": "+=" + objp.height()+ "px"},'slow');
						    	  }
						    	  }
						    	  );
						      } else {
						    	  objp.show().animate({"top": "+=" + objp.height() + "px"},'slow');
						      }
						    }
						  });
					}

					set_carousel_height(DivTag, jq(refid).height());
				}
			}
		}
		scrollTop();
		toHide = null;
		toShow = null;
	}

}


function slideUpNow(DivTag, refid, size) {

	     if (jq(refid).position().top >= 0) {

            if (jq(refid).position().top>= (-1 * (jq(refid).height() * 40/100)) ) {
                jq(refid).animate({
                    "top": "-" + jq(refid).height() + "px"
                  }, {
                    duration: 'slow',
                    complete: function() {
                    }
                  });
            }
        }
}

var slideLeftPos = 0;
function slideLeft(uuid, callback) {
	jq(uuid).css('position','relative');

//	//console.log(uuid);
	slideLeftPos = jq(uuid).position().left;

	jq(uuid).animate({
		"left": "" + (getNewWidth()) + "px"
	}, {
              duration: 800,
              specialEasing: {
                width: 'linear',
                height: 'easeOutBounce'
              },
              complete: function() {
                  if (callback != undefined) {
                    try {
                        callback();
                    } catch (e) {
                    }
                 }
              }
            });
}



var slideLeftMenuPos = 0;
function slideLeftMenu(uuid, objToMove) {
	jq(objToMove).css('position','relative');

	slideLeftMenuPos = jq(objToMove).position().left;

	jq('#mainBarContent').animate({
    		"margin-left": "30px",
    		"z-index":"1",
    	},{
              duration: 1000
         });

     jq(uuid).animate({
         "left": "-" + (jq(uuid).width()) + "px"
       }, {
         duration: 1000,
         specialEasing: {
           width: 'linear',
           height: 'easeOutBounce'
         },
         complete: function() {

            //jq(uuid).width(1);
            jq(uuid).css("overflow","visible");
            jq("#expandedLeftMenu").hide();
            jq("#unexpandedLeftMenu").show();
            // jq(objToMove).width(300);
             jq(uuid).animate({
                  "left": "-" + (jq(objToMove).width() - 30) + "px"
                });

         }
       });
}

function isOnWifi() {
    return true;
}

function slideRightMenu(uuid, objToMove) {
	jq(objToMove).css('position','relative');
    jq(uuid).css("overflow","auto");
   // jq(uuid).width(275);

    jq("#unexpandedLeftMenu").hide();
    jq("#expandedLeftMenu").show();

	jq('#mainBarContent').animate({
    		"margin-left": "+" + (jq(uuid).width()) + "px"
    	},{
              duration: 1000
         });



     jq(uuid).animate({
         "left": "0px"
       }, {
         duration: 1000,
         specialEasing: {
           width: 'linear',
           height: 'easeOutBounce'
         },
         complete: function() {

         }
       });
}


function slideRight(uuid) {

    resizeScreen();
      jq(uuid).animate({
           "left": "0px"
         },{
             duration: 800,
             specialEasing: {
               width: 'linear',
               height: 'easeOutBounce'
             },
              complete: function() {
                         resizeScreen();
              }
           }
       );

}





//a little bit too explicit but.. we want to resize screen if something expanded
$('html').click(function() {
    setTimeout(function() {
        resizeScreen();
    }, 100);
});

var lastScrollTop = 0;
function scrollTop() {
    /*var d = new Date();
    var seconds = d.getTime() / 1000;
    if  (lastScrollTop != seconds) {
        lastScrollTop = seconds;
*/
       jq('body').animate({
                scrollTop: 0
       }, 80);
  //  }
}

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}


$(window).focus(function() {
   resizeScreen();
   try {
     if (redrawGraphs != undefined)
        redrawGraphs();
   } catch (e) {}
});

$(window).blur(function() {
    resizeScreen();
    try {if (redrawGraphs != undefined) redrawGraphs();} catch (e) {}
});


var lastNewHeight = 0;

var fixLeftMenu = function() {
    var menuHeight = $(window).height();
    ////console.log("set menu");
    try {
        if ($('#menu')[0] != undefined) {

            menuHeight = $(window).height() - $('#menu').position().top - 80;

            $('#menu').affix({offset: {top: 0}}, 100).css({height: menuHeight});
        }
    } catch (e) {
        //console.log(e.stack);
        //setTimeout(fixLeftMenu(), 3000);
    }
};

$( document ).ready( function() {
    setTimeout(function() {
        fixLeftMenu();
    }, 1500);
});

var resizeInterval = null;

//ugly function
function resizeScreen(stop) {
try {



 try {
    jq("[data-toggle='tooltip']").tooltip();
 } catch (e) {
 }
  try {
     jq("[data-original-title]").tooltip();
  } catch (e) {
  }
//console.log('resize screen');
   if (resizeInterval == null) {
        if (stop == undefined) {
                resizeInterval = setInterval(function() {
                            resizeScreen(true);
                            clearInterval(resizeInterval);
                            resizeInterval = null;
                }, 1000);
        }
   } else {
         if (stop == undefined) {
                 clearInterval(resizeInterval);

                 resizeInterval = setInterval(function() {
                             resizeScreen(true);
                             clearInterval(resizeInterval);
                             resizeInterval = null;
                 }, 1000);
         }
   }

        var item = $("#innercontent").offset();
        if (item != undefined) {
            var top = item.top;

            fixLeftMenu();

            var h = getNewHeight();
            var newHeight = h - top - footerObj.outerHeight(true) - 20;


            var computeHeight = 0;
            jq("#innercontent .box").children().filter(':visible').each(function(){
                try {
                    computeHeight += $(this).outerHeight();
                 } catch (ee) {

                 }
            });
            var totalHeight = 0;
            var lastElement = $("#lastElement").outerHeight() + $("#lastElement").position().top;

            var tmpLastElem = 0;
            try {
                tmpLastElem = $(".lastelem").outerHeight() + $(".lastelem").position().top;

                var tt = $(".lastelem").offset().top;
                if (tt > tmpLastElem) {
                    tmpLastElem = tt;
                }
            } catch (e) {
            }

            var box = $("#innercontent");
            var lastChildPos = $(':last-child', box).position();
            var lastChildHeight = $(':last-child', box).outerHeight();

             var testcomputeHeight = lastChildPos.top + lastChildHeight;

            //fix bug in server dahsboards..
            if (tmpLastElem > lastElement) {
                    lastElement = tmpLastElem;
            }

            if (lastElement > computeHeight) {
                    computeHeight = lastElement;
            }

             if (computeHeight > newHeight) {
                newHeight = computeHeight;
            }
            newHeight = newHeight + (newHeight * ( 15 / 100));
            testcomputeHeight = newHeight;



            if (newHeight < 600) {
                newHeight = 800;
            }
           var selHeight = 0;


                    if ((testcomputeHeight < newHeight) && (testcomputeHeight > 100)) {
                        if (newHeight - 25 > lastNewHeight ) {
                            lastNewHeight = newHeight;
                            selHeight = newHeight;
                            ////console.log('set height : ' + newHeight);
                            $("#innercontent").height(newHeight);
                        } else {
                            if (newHeight > lastNewHeight - 30) {
                            } else {
                                lastNewHeight = newHeight;
                                selHeight = newHeight;
                                ////console.log('set height : ' + newHeight);
                               $("#innercontent").height(newHeight);
                            }
                        }
                    } else {
                        if (newHeight - 25 > lastNewHeight ) {
                            lastNewHeight = newHeight;
                            selHeight = newHeight;
                            ////console.log('set height : ' + newHeight);
                            $("#innercontent").height(newHeight);
                        } else {
                            if (newHeight > lastNewHeight - 30) {
                            } else {
                                lastNewHeight = newHeight;
                                selHeight = newHeight;
                                $("#innercontent").height(newHeight);
                            }
                        }
                    }
              try {
                   var leftMenuHeight = h - theLeftJQ.position().top - footerObj.outerHeight(true) - 5;
                   theLeftJQ.height(selHeight);
               } catch ( eee ) {
                   theLeftJQ = $("#left");

                   try {
                       var leftMenuHeight = h - theLeftJQ.position().top - footerObj.outerHeight(true) - 5;
                       theLeftJQ.height(selHeight);
                   } catch (zz) {
                       ////console.log(zz.stack);
                   }
               }

    }

    try {if (redrawGraphs != undefined) redrawGraphs();} catch (e) {}
  } catch (e) {
     ////console.log(e.stack);
  }
}
jq(window).resize(function () {
    resizeScreen();
});



//Get some url parameters
function getParameterByNameAndHash(h, name) {
    var h1 = h.substr(h.indexOf("?")+1);
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(h1);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getRealHeight(t) {
    try {
        if (t == undefined) {
            t = 0;
        }
        return getNewHeight() - jq('#innercontent').position().top - t - 120;
     } catch (e) {
        //console.log(e.stack);
        return 10;
     }
}


function setAutoResizeFullHeight(obj, refobj) {
    try {
        if (obj.length != 0) {
            if (divWindowResizeElem[obj[0].id] == undefined) {
                divWindowResizeElem[obj[0].id] = Ember.View.views[obj[0].id]
                divWindowResizeElem[obj[0].id].autoResize();
            }
        }
    } catch (e) {
        //console.log(e.stack);
    }
}

function getDashletHeight(myHeight) {

    var theHeight = oldHeight;
    if (theHeight == undefined) {
        theHeight = 1;
    }

    var i = 0;

    if (myHeight == undefined) {
        myHeight = "0";
    }

    if (("" + myHeight).indexOf('%') > 0) {
        //Compute the height

        var winH = getRealHeight();
        var calcRatio = parseInt(("" + myHeight).replace('%',''),0);
        var calcHeight = winH * (calcRatio / 100);
        theHeight = calcHeight;

        if( (theHeight <= 250) && (calcRatio >= 25)) {
            theHeight = 275;
        }
        if( (theHeight <= 280) && (calcRatio >= 55)) {
            theHeight = 350;
        }

        if( (theHeight <= 360) && (calcRatio >= 75)) {
            theHeight = 575;
        }


        if (theHeight <= 50) {
            theHeight = 350;
        }
    } else {
        theHeight =  myHeight;
    }

    return theHeight;
}




function getMaxHeightFromObj(nicename, myHeight, oldHeight) {
    var theHeight = oldHeight;
    if (theHeight == undefined) {
        theHeight = 1;
    }
    try {
        var i = 0;
        var lastObj = $('#' + nicename);

        var currTop = lastObj.offset().top


        var rowTopPos = lastObj.closest(".dashboardItem").offset().top
        var maxHeight = lastObj.closest(".dashboardItem").outerHeight();

        maxHeight -= (currTop - rowTopPos);
        return maxHeight;
    } catch (ee) {

    }
}


/*
(function() {

var get = Ember.get, set = Ember.set;

Ember.Location.registerImplementation('hashbang', Ember.HashLocation.extend({

  getURL: function() {
    return get(this, 'location').hash.substr(2);
  },

  setURL: function(path) {
    get(this, 'location').hash = "!"+path;
    set(this, 'lastSetURL', path);
  },

  onUpdateURL: function(callback) {
    var self = this;
    var guid = Ember.guidFor(this);

    Ember.$(window).bind('hashchange.ember-location-'+guid, function() {
      Ember.run(function() {
        var path = location.hash.substr(2);
        if (get(self, 'lastSetURL') === path) { return; }

        set(self, 'lastSetURL', null);

        callback(path);
      });
    });
  },

  formatURL: function(url) {
    return '#!'+url;
  }

  })
);

})();
*/

function getNewHeight() {
	var winW = 630, winH = 460;
	if (document.body && document.body.offsetWidth) {
	 winW = document.body.offsetWidth;
	 winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
	    document.documentElement &&
	    document.documentElement.offsetWidth ) {
	 winW = document.documentElement.offsetWidth;
	 winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
	 winW = window.innerWidth;
	 winH = window.innerHeight;
	}

	var hasVScroll = document.body.scrollHeight > document.body.clientHeight;

	 if (hasVScroll) {
		 return winH-20;
	 } else {
		 return winH-10;
	 }
}

function getNewWidth() {
	var winW = 630, winH = 460;
	if (document.body && document.body.offsetWidth) {
	 winW = document.body.offsetWidth;
	 winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
	    document.documentElement &&
	    document.documentElement.offsetWidth ) {
	 winW = document.documentElement.offsetWidth;
	 winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
	 winW = window.innerWidth;
	 winH = window.innerHeight;
	}


	var hasVScroll = document.body.scrollHeight > document.body.clientHeight;

	 if (hasVScroll) {
		 return winW-50;
	 } else {
		 return winW-20;
	 }
}

function setAttribute(id, type, val) {
	if (type == 'contentid') {
		lastContent[id].attr('contentid',val);
	}
}

function removeContent(item) {
	if (lastContentInclude.hasOwnProperty(item)) {
		try {

			var obj = jq(lastContentInclude[item].selector);
			if (obj) {
				obj.hide();
			} else {
			}
		} catch (e) {
		}
	}
}

function addContent(idx, ob) {
	lastContent[idx] = ob;
	ob.attr('contentid','-1');
}

function addContent(idx, ob, inc) {
	lastContent[idx] = ob;
	lastContentInclude[idx]=inc;
	ob.attr('contentid','-1');
}


/*** CAROUSEL ****/

var theContent = undefined;
var prev = undefined;
var next = undefined;
var myObj = undefined;
var myOldObj = undefined;

function setContent ( iframecontentobj ) {
	theContent = iframecontentobj;
}


function getContent () {
	return theContent;
}

var theMainUl = {};
function mycarousel_width(ulObject, DivTag) {
	try {
		if (!theMainUl.hasOwnProperty(DivTag)) {
			theMainUl[DivTag]= ulObject;
		}
	} catch (e) {
	}
};


function set_carousel_height_last(DivTag, height,lastitem) {
	set_carousel_height(DivTag, height);
	lastCarouselItem.push(lastitem);
}

function set_carousel_height(DivTag, height) {
	try {
		if (theMainUl.hasOwnProperty(DivTag)) {
			var width = getNewWidth();
			theMainUl[DivTag].height(height);
			for(i=0;i<lastCarouselItem.length ; i++){
				lastCarouselItem[i].height(height);
				lastCarouselItem[i].width(width);
			}
		}
	} catch (e) {
	}
}

function set_carousel_width(DivTag, width) {
}


/**
 * We use the initCallback callback
 * to assign functionality to the controls
 */
function mycarousel_initCallback(carousel) {
};


function isFunctionA(object) {
	 return object && (typeof(object) == "function");
}

var hasShown = false;
function showIt(DivTab, height, fct, v) {
	////////////////////////console.log('show it : ' + DivTab + " height  :L " + height);
	if (DivTab != undefined) {
		if (theCarousel != null) {
			if (theCarousel.hasOwnProperty(DivTab)) {

				if (jq('$' + theCarousel[DivTab].name + DivTab).length > 0) {
						if (!jq('$' + theCarousel[DivTab].name + DivTab).hasClass('jcarousel-container')) {
							if (!(theCarousel.hasOwnProperty(DivTab))) {
								initCarousel( DivTab, 'mycarousel');
							}

							 jq('$' + theCarousel[DivTab].name + DivTab).jcarousel({
								 	carouselDiv: DivTab,
								 	scroll: 1,
								 	widthFct: mycarousel_width,
								 	theScrollDiv: jq('#pageContent'),
								 	// This tells jCarousel NOT to autobuild prev/next buttons
								 	buttonNextHTML: null,
								 	buttonPrevHTML: null,
								 	resizeContent: undefined,
								 	itemNotifyChange: {},
								 	myResizeContent: function() {
								 		var newH = getNewHeight();
								 		var newW = getNewWidth();
										if (newW <= 280) {
											newW = 280;
										}
										if (newH <= 320) {
											newH = 320;
										}

										set_carousel_height(this.carouselDiv,newH);
								 	}
								 	//setupCallback: readyFct
							 });
					    } else {
					    }
				}
			}
		}
	}

	 if (!(fct == undefined)) {
		 if (theCarousel != null) {
			if (theCarousel.hasOwnProperty(DivTab)) {
				if (theCarousel[DivTab].hasOwnProperty("name")) {
					if (jq('$' + theCarousel[DivTab].name + DivTab).length > 0) {
						 if (!(fct == undefined)) {
							 theCarousel[DivTab].resizeContent = fct;
						 }
					}

				}
			}
		 }
	 }

}


function resetCarousel() {
}

function initCarousel(DivTab, objectid) {
	try {
		if ((DivTab != undefined) && (objectid != undefined)) {
			if (theCarousel == undefined) {
				theCarousel = {};
			}
			if (!(theCarousel.hasOwnProperty(DivTab))) {
				theCarousel[DivTab] = { name : objectid,
										refname : DivTab,
										ignore: 0,
										resizeContent: null,
										itemNotifyChange: {},
										myResizeContent: function() {
									 		var newH = getNewHeight();
									 		var newW = getNewWidth();
											if (newW <= 280) {
												newW = 280;
											}
											if (newH <= 320) {
												newH = 320;
											}

											set_carousel_height(this.refname,newH);
									 	},
										last : []
										};


				carouselItems.push(theCarousel[DivTab]);
			}
		}
	} catch (e) {
	}
}

//obsolete...
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, ((jq(window).height() - this.outerHeight()) / 4) +
                                                jq(window).scrollTop()) + "px");
    this.css("left", Math.max(0, ((jq(window).width() - this.outerWidth()) / 2) +
                                                jq(window).scrollLeft()) + "px");
    return this;
}





function bytesToSize(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

function MBToSize(mbytes) {
   var sizes = ['KB', 'MB', 'GB', 'TB'];
   if (mbytes == 0) return '0 Byte';
   mbytes = mbytes * 1024;
   var i = parseInt(Math.floor(Math.log(mbytes) / Math.log(1024)));

   return Math.round(mbytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};




function compareByName(a,b) {
  if (a.name < b.name)
     return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}



/* Bread crumbs */
// We should do something better like using an Ember component

function getParentModel(c, str) {
    try {
        if ((c.breadcrumbEnabled == undefined) || ( c.breadcrumbEnabled == false) )  {

             //should we?
             if (c.breadcrumbUseParentModel) {
                return true;
             }
             return false;
        }

         if (c.breadcrumbUseParentModel) {
            return true;
         }
         return false;
    } catch (e) {
        //console.log(e.stack);
        return false;
    }
}

function getRouteForStr(c, str) {
    try {
        if (c.breadcrumbRoute != undefined) {
             return c.breadcrumbRoute;
         }
         return str
    } catch (e) {
        return str;
    }
}


function getVisibleForStr(c, str) {
    try {
     if (c.breadcrumbVisible == undefined) {
        return false;
     } else{
         return c.breadcrumbVisible;
     }
    } catch (e) {
        return true;
    }
}



function getHasNextForStr(c, str, model,parent) {
    if ((c.breadcrumbVisible == undefined) || (!c.breadcrumbVisible))  {
        return true;
    } else {
        return (!(breadCrumbs[str].hasNext == false))
    }
}

function getDisplayNameForStr(c, str, model,parent) {
    if (c == undefined) {
        if (model == undefined) {
            return "Undefined";
        } else {
            //console.log("RETURNING : " + model.get('name'));
            return model.get('name');
        }
    }
    if (parent != null) {
        return c.getBreadcrumDisplayName(parent);
    } else {
        if (c != undefined) {
            try {
                return c.getBreadcrumDisplayName(model);
            } catch (e) {
                return ""
            }
        } else {
            return "";
        }
    }
}

/* End of Breadcrumbs */

/* Async updates */

var lastCtrl  = null;
var latestModel = null;
var createdModel = false;

var captureStarted = false;
var newcoupon = null;
var newcoupon_notloaded = null;

var lastSeqId = 0;
var lastError = 0;
var currDesktop = '';
var desktopId = undefined;
var preventSave = false;
var ignoreSave = false;

var startPolling = function(desktop, dtid, token, email, id) {
//ACENTERA TEMP
        return ;
        var poll = function (desktop, dtid, token, email, id, timeout) {

            if (lastError++>50) {
                return;
            }

            ////alert("DESKTOP? " + desktop + "vs " + dtid);
            currDesktop = desktop;

            //TODO: If connection loost big loop
            $.ajax(hostUrl + 'ajax/' + lastSeqId, {
                 timeout: 3000,
                 xhrFields: {
                  withCredentials: false
                },
                headers: {
                     "dtid": currDesktop,
                     "token": token,
                     "tokensecret": tokensecret,
                     "email": email
                },
                dataType: "json",
                complete: function(d) {


                    var data = d.data;


                    //if ((data.status >= 300) && (data.status <= 303)) {
                    //    document.location.href=prefix;
                    //} else {

                       if (data.status >= 300) {
                              showConnectionProblem();
                              setTimeout(function () { poll(desktop, dtid, token, email, id) }, 4000);
                       } else {
                        lastError=0;
                        hideConnectionProblem();

                        try {
                            var response = myData = JSON.parse(data.responseText)
                            processMessages(response.result);
                        } catch (e) {
                            var tex = data.responseText;
                            if (tex.length <= 60) {

                            } else {
                                tex = tex.substring(0, 59);
                            }

                            if (tex.indexOf("<html>") > 0) {
                                document.location.href=prefix;
                            }
                        }

                        if (timeout == 0) {
                            setTimeout(function () { poll(desktop, dtid, token, email, id) }, 0);
                        } else {
                            setTimeout(function () { poll(desktop, dtid, token, email, id) }, 1000);
                        }
                    // }
                    }
                },

                error: function(jqXHR, textStatus, errorThrown) {
                    lastError
                    showConnectionProblem();
                        setTimeout(function () {
                            poll(desktop, dtid, token, email, id)
                        },
                    40000);
                }
            });
        }

        poll(desktop, dtid, token, email, id, 0);
    }

    var processMessages = function(messages) {
        var items = [];

        for(var z=0; len=messages.length, z<len; z++) {
            var message = messages[z]

            if (message.id != undefined) {
                if (message.id > lastSeqId) {
                    lastSeqId = message.id;
                }
            }


            if ((message.data != null) && (message.data != "")) {

                try {
                  var dataMsg = jQuery.parseJSON(message.data);
                  //console.log("AJAX ASYNC RECEIVED : " + dataMsg);
                  try {
                    if( Object.prototype.toString.call( dataMsg.js ) === '[object Array]' ) {
                      ////console.log("AJAX ASYNC IS AN ARRAY..");
                       for (var i = 0; i < dataMsg.js.length; i++) {
                         var element = dataMsg.js[i];
                         try {
                            //console.log('eval : ' + element);
                           ////console.log(element);
                            eval(element);
                         } catch (ee) {
                            setTimeout(function() {
                                try {
                                        //TODO: Check if APpController is Loading if so add it to AppController Queue ???
                                        setTimeout(function() {
                                            eval(element);
                                            resizeScreen();
                                        }, 50);
                                } catch (z) {
                                    //console.log(z.stack);
                                }
                            }, 800);
                         }
                       }

                    } else {
                     if (dataMsg.callback != undefined) {
                        try {
                            AppController.send(dataMsg.callback, dataMsg.data, dataMsg.custom_data);
                        } catch (ez) {
                        }
                     } else {
                        if (!(dataMsg.js == undefined)) {
                            //TODO: Check if APpController is Loading if so add it to AppController Queue ???
                            setTimeout(function() {
                                eval(dataMsg.js);
                            }, 50);
                         } else {
                         }
                     }
                    }
                  } catch (e) {

                   setTimeout(function() {
                           try {
                               eval(dataMsg.js);
                               resizeScreen();
                           } catch (z) {
                               //console.log(z.stack);
                           }
                       }, 800);

                  }
                  } catch (e) {
                   //console.log(e.stack);
                  }
            }

        }
    }

    var showConnectionProblem = function() {
        //Connection Issues
    }

    var hideConnectionProblem = function() {
        //No Problems
    }

    //GET CALL
    var TODEL_sendMessage = function(msg, asynchronous, callback, returnData ) {

        if (asynchronous == undefined) {
            asynchronous = true;
        }


        var dataMsg = msg;
        if (typeof msg == 'object') {
           dataMsg = JSON.stringify(msg);
        }

        if (callback == undefined) {
            callback="none";
        }

        if (returnData == undefined) {
            returnData = { "data" : "none" }
        }

        var content = {}

        content = {
                     id: lastSeqId,
                     data : dataMsg ,
                     a: asynchronous,
                     c: callback,
                     r: JSON.stringify(returnData)
        }

        if (callback == undefined) {
             content = {
                         id: lastSeqId,
                         data : dataMsg ,
                         a: asynchronous,
                         c: 'none',
                         r: '',
                    }
        }


        var result = {
            r : null,
            then : function(f) {
                return f(this.r);
            }
        }
        if (currDesktop == undefined) {
            errorLoadingAjax();
        }

           if ( dataMsg != undefined) {
            if  ((typeof msg != 'object') && msg != null && msg.startsWith("/")) {
                allowUnload = false;
                $.ajax(hostUrl + 'api/'+currDesktop+msg, {
                    timeout: 3000,
                    type: 'GET',
                    headers: {
                         "dtid": currDesktop,
                         "token": token,
                         "tokensecret": tokensecret,
                         "email": email
                    },
                    xhrFields: {
                          withCredentials: false
                    },

                    dataType: "json",
                    async:  true,
                    contentType: "application/json; charset=utf-8",
                    success: function(data) {
                         allowUnload = true;
                         result.r = data;
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        //Problem while sending the request
                    }

                }, 'jsonp');


            } else {
                allowUnload = false;
                $.ajax(hostUrl + 'api/ajax/', {
                    timeout: 3000,
                    type: 'POST',

                    xhrFields: {
                          withCredentials: false
                    },
                    headers: {
                                         "dtid": currDesktop,
                                         "token": token,
                                         "tokensecret": tokensecret,
                                         "email": email
                    },
                    data: JSON.stringify(content),
                    dataType: "json",
                    async:  asynchronous,
                    contentType: "application/json; charset=utf-8",
                    success: function(data) {
                         allowUnload = true;
                         result.r = data;
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        //Problem while sending the request
                    }

                });
            }
          }
        return result;
    }


//POST
var sendPostMessage = function(msg, postMessage, asynchronous, callback, returnData ) {

     if (asynchronous == undefined) {
         asynchronous = true;
     }


     var dataMsg = msg;
     if (typeof msg == 'object') {
           dataMsg = JSON.stringify(msg);
     }

     if (callback == undefined) {
         callback="none";
     }

     if (returnData == undefined) {
         returnData = { "data" : "none" }
     }

     var content = {}

     content = {
                  id: lastSeqId,
                  data : dataMsg ,
                  a: asynchronous,
                  c: callback,
                  r: JSON.stringify(returnData)
     }

     if (callback == undefined) {
          content = {
                      id: lastSeqId,
                      data : dataMsg ,
                      a: asynchronous,
                      c: 'none',
                      r: '',
                 }
     }



      var result = {
               maxtimeout : 160,
               firstTime : 0,
               r : null,
               err: null,
               then : function(f, d) {
                   try {
                      ////console.log("GOT CALLED THEN");
                       if ((this.err == null) && (this.r == null)) {
                         if (this.maxtimeout--<= 0) {
                             return;
                         } else {
                             var self = this;
                             if (this.firstTime++>=2) {
                                 setTimeout(function() { self.then(f,d); }, 140);
                             } else {
                                 setTimeout(function() { self.then(f,d); }, 80);
                             }
                             return;
                         }
                         return;
                       }
                      ////console.log('RECEIVED DATA.. LETS PROCESS');
                       if (this.err != null) {
                          try {return d(this.err);} catch (ee) {}
                          return null;
                       }
                       return f(this.r);
                   } catch (zz) {
                    ////console.log(zz.stack);
                   }
               }
       }

     if (currDesktop == undefined) {
         errorLoadingAjax();
     }
//alert('a : ' + hostUrl + 'api/'+msg);
        if ( dataMsg != undefined) {

         if  ((typeof msg != 'object') && msg != null && msg.startsWith("/")) {
             allowUnload = false;

            //alert('b');
             if (postMessage == undefined) {
                 $.ajax(hostUrl + 'api/'+msg, {
                     type: 'GET',
                     xhrFields: {
                           withCredentials: false
                     },
                     headers: {
                                      "dtid": currDesktop,
                                      "token": token,
                                      "tokensecret": tokensecret,
                                      "email": email
                                 },
                     dataType: "json",
                     async:  true,
                     timeout: 3000,
                     contentType: "application/json; charset=utf-8",
                     success: function(data) {
                          allowUnload = true;
                          result.r = data;
                     },
                     error: function(jqXHR, textStatus, errorThrown) {
                         //Problem while sending the request
                         result.err = jqXHR;
                     }

                 });
             } else {
                 $.ajax(hostUrl + 'api/'+msg, {
                                             timeout: 3000,
                                             type: 'POST',
                                             dataType: "json",
                                             xhrFields: {
                                                      withCredentials: false
                                             },
                 headers: {
                                      "dtid": currDesktop,
                                      "token": token,
                                      "tokensecret": tokensecret,
                                      "email": email
                                 },
                                             data: postMessage,
                                              //JSON.stringify(postMessage),
                                              async:  true,
                                              contentType: "application/json; charset=utf-8",
                                              success: function(data) {
                                                   allowUnload = true;
                                                   result.r = data;
                                              },
                                              error: function(jqXHR, textStatus, errorThrown) {
                                                  //Problem while sending the request
                                                  result.err = jqXHR;
                                              }

                                          });
             }


         } else {


             allowUnload = false;
             $.ajax(hostUrl + 'api/'+msg, {
                 type: 'POST',
                 timeout: 3000,
                 xhrFields: {
                       withCredentials: false
                 },
                 headers: {
                                  "dtid": currDesktop,
                                  "token": token,
                                  "tokensecret": tokensecret,
                                  "email": email
                             },
                 data: postMessage,
                 //JSON.stringify(postMessage),
                 dataType: "json",
                 async:  asynchronous,
                 contentType: "application/json; charset=utf-8",
                 success: function(data) {
                      allowUnload = true;
                      result.r = data;
                 },
                 error: function(jqXHR, textStatus, errorThrown) {
                     //Problem while sending the request
                     result.err = jqXHR;
                 }

             });
         }
       }
     return result;
 }



 var sendGetMessage = function(msg, asynchronous, callback, returnData ) {

      postMessage = undefined;

      if (asynchronous == undefined) {
          asynchronous = true;
      }


      var dataMsg = msg;
      if (typeof msg == 'object') {
            dataMsg = JSON.stringify(msg);
      }

      if (callback == undefined) {
          callback="none";
      }

      if (returnData == undefined) {
          returnData = { "data" : "none" }
      }

      var content = {}

      content = {
                   id: lastSeqId,
                   data : dataMsg ,
                   a: asynchronous,
                   c: callback,
                   r: JSON.stringify(returnData)
      }

      if (callback == undefined) {
           content = {
                       id: lastSeqId,
                       data : dataMsg ,
                       a: asynchronous,
                       c: 'none',
                       r: '',
                  }
      }


      var result = {
          maxtimeout : 160,
          firstTime : 0,
          r : null,
          err: null,
          then : function(f, d) {
              try {
                 ////console.log("GOT CALLED THEN");
                  if ((this.err == null) && (this.r == null)) {
                    if (this.maxtimeout--<= 0) {
                        return;
                    } else {
                        var self = this;
                        if (this.firstTime++>=2) {
                            setTimeout(function() { self.then(f,d); }, 140);
                        } else {
                            setTimeout(function() { self.then(f,d); }, 80);
                        }
                        return;
                    }
                    return;
                  }
                 ////console.log('RECEIVED DATA.. LETS PROCESS');
                  if (this.err != null) {
                     try {
                        return d(this.err);
                     } catch (ee) {
                        return null;
                     }
                  }
                  return f(this.r);
              } catch (zz) {
               ////console.log(zz.stack);
              }
          }
      }
      if (currDesktop == undefined) {
          errorLoadingAjax();
      }


         if ( dataMsg != undefined) {
          if  ((typeof msg != 'object') && msg != null && msg.startsWith("/")) {
              allowUnload = false;

              if (postMessage == undefined) {
                  $.ajax(hostUrl + 'api/'+msg, {
                      timeout: 3000,
                      type: 'GET',
                      xhrFields: {
                        withCredentials: false
                      },
                  headers: {
                                       "dtid": currDesktop,
                                       "token": token,
                                       "tokensecret": tokensecret,
                                       "email": email
                                  },
                      dataType: "json",
                      async:  true,
                      contentType: "application/json; charset=utf-8",
                      success: function(data) {
                           allowUnload = true;
                           result.r = data;
                      },
                      error: function(jqXHR, textStatus, errorThrown) {
                          //Problem while sending the request
                          result.err = jqXHR;
                      }

                  });
              } else {
                 ////console.log('INVALID OPERATION');
              }


          } else {

              allowUnload = false;
              $.ajax(hostUrl + 'api/'+msg, {
                  type: 'GET',
                  xhrFields: {
                    withCredentials: false
                  },
              headers: {
                                   "dtid": currDesktop,
                                   "token": token,
                                   "tokensecret": tokensecret,
                                   "email": email
                              },
                  dataType: "json",
                  async:  asynchronous,
                  contentType: "application/json; charset=utf-8",
                  success: function(data) {
                       allowUnload = true;
                       result.r = data;
                  },
                  error: function(jqXHR, textStatus, errorThrown) {
                      //Problem while sending the request
                      result.err = jqXHR;
                  }

              });
          }
        }
      return result;
  }


//PUT
var sendPutMessage = function(msg, postMessage, asynchronous, callback, returnData ) {
try {
//console.error("PUT....");
     if (asynchronous == undefined) {
         asynchronous = true;
     }


     var dataMsg = msg;
     if (typeof msg == 'object') {
           dataMsg = JSON.stringify(msg);
     }

     if (callback == undefined) {
         callback="none";
     }

     if (returnData == undefined) {
         returnData = { "data" : "none" }
     }

     var content = {}

     content = {
                  id: lastSeqId,
                  data : dataMsg ,
                  a: asynchronous,
                  c: callback,
                  r: JSON.stringify(returnData)
     }

     if (callback == undefined) {
          content = {
                      id: lastSeqId,
                      data : dataMsg ,
                      a: asynchronous,
                      c: 'none',
                      r: '',
                 }
     }


      var result = {
               maxtimeout : 160,
               firstTime : 0,
               r : null,
               err: null,
               then : function(f, d) {
                   try {
                      ////console.log("GOT CALLED THEN");
                       if ((this.err == null) && (this.r == null)) {
                         if (this.maxtimeout--<= 0) {
                             return;
                         } else {
                             var self = this;
                             if (this.firstTime++>=2) {
                                 setTimeout(function() { self.then(f,d); }, 140);
                             } else {
                                 setTimeout(function() { self.then(f,d); }, 80);
                             }
                             return;
                         }
                         return;
                       }
                      ////console.log('RECEIVED DATA.. LETS PROCESS');
                       if (this.err != null) {
                          try {return d(this.err);} catch (ee) {}
                          return null;
                       }
                       return f(this.r);
                   } catch (zz) {
                    ////console.log(zz.stack);
                   }
               }
       }

     if (currDesktop == undefined) {
         errorLoadingAjax();
     }

        if ( dataMsg != undefined) {
         if  ((typeof msg != 'object') && msg != null && msg.startsWith("/")) {
             allowUnload = false;

             if (postMessage == undefined) {
                 $.ajax(hostUrl + 'api/'+msg, {
                     timeout: 3000,
                     type: 'PUT',
                     xhrFields: {
                           withCredentials: false
                     },
                 headers: {
                                      "dtid": currDesktop,
                                      "token": token,
                                      "tokensecret": tokensecret,
                                      "email": email
                                 },
                     dataType: "json",
                     async:  true,
                     contentType: "application/json; charset=utf-8",
                     success: function(data) {
                          allowUnload = true;
                          result.r = data;
                     },
                     error: function(jqXHR, textStatus, errorThrown) {
                         //Problem while sending the request
                         result.err = jqXHR;
                     }

                 });
             } else {
                 $.ajax(hostUrl + 'api/'+msg, {
                                             timeout: 3000,
                                             type: 'PUT',
                                             dataType: "json",
                                             xhrFields: {
                                                   withCredentials: false
                                            },
                 headers: {
                                      "dtid": currDesktop,
                                      "token": token,
                                      "tokensecret": tokensecret,
                                      "email": email
                                 },
                                             data: postMessage,
                                              //JSON.stringify(postMessage),
                                              async:  true,
                                              contentType: "application/json; charset=utf-8",
                                              success: function(data) {
                                                   allowUnload = true;
                                                   result.r = data;
                                              },
                                              error: function(jqXHR, textStatus, errorThrown) {
                                                  //Problem while sending the request
                                                  result.err = jqXHR;
                                              }

                                          });
             }


         } else {

             allowUnload = false;
             $.ajax(hostUrl + 'api/'+msg, {
                 timeout: 3000,
                 type: 'PUT',
                 xhrFields: {
                       withCredentials: false
                 },
             headers: {
                                  "dtid": currDesktop,
                                  "token": token,
                                  "tokensecret": tokensecret,
                                  "email": email
                             },
                 data: postMessage,
                 //JSON.stringify(postMessage),
                 dataType: "json",
                 async:  asynchronous,
                 contentType: "application/json; charset=utf-8",
                 success: function(data) {
                      allowUnload = true;
                      result.r = data;
                 },
                 error: function(jqXHR, textStatus, errorThrown) {
                     //Problem while sending the request
                     result.err = jqXHR;
                 }

             });
         }
       }
     return result;
     } catch (ez) {
        console.error(ez.stack);

     }
     return null;
 }

/*
var sendGetMessage = function(msg, asynchronous, callback, returnData ) {

   var postMessage = undefined;

   if (asynchronous == undefined) {
       asynchronous = true;
   }

   var dataMsg = msg;
   if (typeof msg == 'object') {
         dataMsg = JSON.stringify(msg);
   }

   if (callback == undefined) {
       callback="none";
   }

   if (returnData == undefined) {
       returnData = { "data" : "none" }
   }

   var content = {}

   content = {
                id: lastSeqId,
                data : dataMsg ,
                a: asynchronous,
                c: callback,
                r: JSON.stringify(returnData)
   }

   if (callback == undefined) {
        content = {
                    id: lastSeqId,
                    data : dataMsg ,
                    a: asynchronous,
                    c: 'none',
                    r: '',
               }
   }


   var result = {
       r : null,
       then : function(f) {
           return f(this.r);
       }
   }
   if (currDesktop == undefined) {
       errorLoadingAjax();
   }

      if ( dataMsg != undefined) {
       if  ((typeof msg != 'object') && msg != null && msg.startsWith("/")) {
           allowUnload = false;

           if (postMessage == undefined) {
               $.ajax(hostUrl + 'api/'+msg, {
                   type: 'GET',
                   headers: {
                          'dtid' : currDesktop
                    },
                   dataType: "json",
                   async:  true,
                   contentType: "application/json; charset=utf-8",
                   success: function(data) {
                        allowUnload = true;
                        result.r = data;
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                       //Problem while sending the request
                   }

               });
           } else {
               $.ajax(hostUrl + 'api/'+msg, {
                                           type: 'GET',
                                           dataType: "json",
                                           headers: {
                                                 'dtid' : currDesktop
                                           },
                                           //JSON.stringify(postMessage),
                                            async:  true,
                                            contentType: "application/json; charset=utf-8",
                                            success: function(data) {
                                                 allowUnload = true;
                                                 result.r = data;
                                            },
                                            error: function(jqXHR, textStatus, errorThrown) {
                                                //Problem while sending the request
                                            }

                                        });
           }


       } else {

           allowUnload = false;
           $.ajax(hostUrl + 'api/'+msg, {
               type: 'GET',
               headers: {
                       'dtid' : currDesktop
               },
               async:  asynchronous,
               contentType: "application/json; charset=utf-8",
               success: function(data) {
                    allowUnload = true;
                           result.r = data;
               },
               error: function(jqXHR, textStatus, errorThrown) {
                   //Problem while sending the request
               }

           });
       }
     }
   return result;
}
*/

function isNumber(str) {
   var pattern = /^\d+$/;
   return pattern.test(str);  // returns a boolean
};



function isDecimal(n){
    if(n == "")
        return false;

    var strCheck = "0123456789";
    var i;

    for(i in n){
        if(strCheck.indexOf(n[i]) == -1)
            return false;
    }
    return true;
}


function resetValues(controller, array) {
    array.forEach(function(entry) {
        try {
            controller.set(entry, null);

            var v = Ember.View.views[entry];
            if ( v != null ) {
                //console.log(v);
                $("#" + entry).removeClass("success").removeClass("error");
            }
        } catch (e) {

        }
    });
}




var destroyDesktop = function (desktop) {

    if ( desktop != '' ) {
        var asyncV = false;
        if (window.location.href.indexOf("localhost")) {
            asyncV = true;
        }

        if (!asyncV) {
            $.ajax(hostUrl + 'destroy/', {
                timeout: 3000,
                async: asyncV,
                xhrFields: {
                      withCredentials: false
                },
            headers: {
                                 "dtid": currDesktop,
                                 "token": token,
                                 "tokensecret": tokensecret,
                                 "email": email
                            },
                success: function(data) {
                    desktop = '';
                },

                error: function(jqXHR, textStatus, errorThrown) {
                    //TODO: Show Problem generating the desktop
                    desktop = '';
                }
            });
        }
    }
}


//Some hack because of ie / firefox on unload implemenation..
var destroyDesktopMaybe = function (desktop) {
     if ( desktop != '' ) {
            var asyncV = false;
             if (window.location.href.indexOf("localhost")) {
                 asyncV = true;
             }
         $.ajax(hostUrl + 'destroySoon/' + desktop, {
            timeout: 3000,
             async: asyncV,
             xhrFields: {
               withCredentials: false
             },
         headers: {
                              "dtid": currDesktop,
                              "token": token,
                              "tokensecret": tokensecret,
                              "email": email
                         },
             success: function(data) {
                 //desktop = '';
             },
             error: function(jqXHR, textStatus, errorThrown) {
             }
         });
     }
 }


var hash = window.location.hash;

if (hash == "#_=_") {
    window.location.hash = "#/";
}

//for caching... android app
var internetSaved = false;
var justDeleted = false;
var forceCache = false;
var isCordovaApp = false;
var haveNoInternet = function() {
    return false;
}
var checkConnection = function() {
    return true;
}

var token = null;
var tokensecret = null;
var email = null;
var desktopErrorCount = 0;

var createDesktopReady = function(iter) {

    try {
        var tt = readCookie("email");

        if (tt == null) {
            createDesktop();
            return;
        } else {
            createDesktop();
        }
    } catch (eff) {

       createDesktop();
       window.location.href=prefix + "logout";
    }

}
var createDesktop = function (w) {


    try {
        if ( currDesktop == '' ) {

        //alert('a');
            token = readCookie("token");

            tokensecret = readCookie("tokensecret");
            try {
                email = readCookie("email");
               //alert(email);
                email = email.replaceAll("\"","");
            } catch (eee) {
            }
            createCookie("email",email);

            //alert("CHECK?: " + checkConnection());


            var tmpDtid = readCookie("dtid");
            if (tmpDtid == null || ("" + tmpDtid).trim() == "") {
                //alert("ZZ");
                    $.ajax(hostUrl + 'create?ts=' + new Date().getTime() / 1000, {
                        async:  true,
                        crossDomain: true,
                        timeout:3000,  // I chose 8 secs for kicks
                        beforeSend: function(xhr) {
                            xhr.withCredentials=true;
                        },
                        dataType: "json",
                        headers: {
                                 "token": token,
                                 "tokensecret": tokensecret,
                                 "email": email
                        },
                        success: function(data) {
                            try {
                                    currDesktop = data.dtid;
                                    createCookie("dtid", currDesktop);

                                    ////alert(currDesktop);
                                    CustomRESTAdapter = CustomRESTAdapter.extend({
                                            host: customHost,
                                            namespace: 'api',
                                            bulkCommit: true,
                                            headers: {
                                                   "dtid": currDesktop,
                                                   "token": readCookie("token")
                                            }
                                    });
                                    ////alert("GREAT " + currDesktop + customHost);

                                    allowUnload = true;
                                        try {
                                            window.addEventListener("beforeunload", function (t) {
                                                if ($.browser == undefined) {
                                                    //weird not supported?
                                                } else {
                                                    if (!$.browser.msie) {
                                                         if (allowUnload) {
                                                            destroyDesktop(currDesktop)
                                                            this.removeEventListener('beforeunload',arguments.callee,false)
                                                         }
                                                   }
                                                }
                                            });
                                        } catch (ee) {
                                            try {
                                                 window.onbeforeunload = function (t) {
                                                       if (allowUnload) {
                                                             destroyDesktop(currDesktop)
                                                       }
                                                };
                                            } catch (eee) {
                                            }
                                        }
                                        ////alert('start');
                                    //Stall the long polling logic
                                    //do not do longPolling...
                                    //startPolling(currDesktop, data.dtid, data.token, data.email, data.id);
                                } catch (ee ){
                                    //TODO: Show Problem generating the desktop
                                    desktopErrorCount++;
                                    if (desktopErrorCount <= 10) {
                                        //unless we have dtid??
                                        setTimeout(function() { createDesktop() }, 4000);
                                    }
                                }
                        },

                        error: function(jqXHR, textStatus, errorThrown) {
                            //TODO: Show Problem generating the desktop
                            //alert('a1');
                            desktopErrorCount++;
                            if (desktopErrorCount <= 10) {
                                //unless we have dtid??
                                setTimeout(function() { createDesktop() }, 4000);
                            }
                        }
                    });//, 'jsonp');
            } else {
                currDesktop = tmpDtid;
            }

            //Load data from Store first

            preventSave = false;
            //loadFromStore();
            isLoading=false;
            //container.injection('application:main', 'store', 'store:main');
           ////alert('aaaa');
          //alert('advance?');
            App.advanceReadiness();
        } else {
            App.advanceReadiness();

        }
    } catch (eeee) {

         console.error(eeee.stack);


        App.advanceReadiness();
    }
}



/*Ember.Application.initializer({
    name  : 'currentUser',
    after : 'store',
    initialize: function(container, app) {
        //alert('z');
        //loadFromStore();
      //  var controller = container.lookup('controller:currentUser');
     //   container.typeInjection('controller', 'currentUser', 'controller:currentUser');
     //   preventSave = false;
    //
    }
});
*/
var deletedId = null;
var customLoad = function(force, store) {

if (force) {
    preventSave = false;
} else {
    preventSave = true;
}

//alert('customload' + apptype);
try {
        if (("" + apptype).indexOf("coupon") >= 0) {



                    if (!isCordovaApp) {
                           if (force) forceCache = true;
                                                var acc = store.find('account');

                        if (force) forceCache = true;
                        var datum = store.findAll('coupondata');
                    } else {
                    //alert('findall');
                          if (force) forceCache = true;
                                var acc = store.find('account');

                            if (force) forceCache = true;

                            var datum = store.findAll('coupondata').then(function(e) {
                                    //alert('findall done');
                                    if (force) forceCache = true;
                                    var events = store.findAll('category');
                                    if (force) forceCache = true;
                                    var giftcategory = store.findAll('source');
                                    if (force) forceCache = true;
                                    var s = store.findAll('coupon');
                                    if (force) forceCache = true;
                                    var stores = store.findAll('coupondetail');
                                    if (force) forceCache = true;
                                    var friend = store.findAll('couponlistdata');
                                    var gift = store.findAll('couponlist');
                                    var eventgift = store.findAll('aubaine');

                                    if (force) forceCache = true;
                                    var shopping = store.findAll('latestcoupon');
                                    if (force) forceCache = true;

                                    hasErrors=false;
                                    //alert('findall done 1');
                            });
                    }


/*
                try {
                   //alert('here - ' + force);
                    if (force) forceCache = true;
                        var acc = store.find('account');

                 if (force) forceCache = true;
                 var categories = store.findAll('category');
                 if (force) forceCache = true;
                 var sources = store.findAll('source');
                 if (force) forceCache = true;
                 console.error("WILL LOAD ALL COUPON")
                 var coupon = store.findAll('coupon');
                 if (force) forceCache = true;
                 console.error("WILL LOAD ALL COUPONDETAUL")
                 if (force) forceCache = true;
                 var sources = store.findAll('coupondetail');
                 if (force) forceCache = true;
                 var coupondata = store.findAll('couponlistdata');

                 if (force) forceCache = true;
                 var couponlist =s store.findAll('couponlist');

                 if (force) forceCache = true;
                 var news = store.findAll('aubaine');

                 if (force) forceCache = true;
                 var latestcpon = store.findAll('latestcoupon');

                 } catch (ee) {
                   //alert(ee.stack);
                 }
                 */
                 hasErrors=false;
             } else if (("" + apptype).indexOf("dwarf") >= 0) {
               //alert('findall dwarf');
                var latestcpon = store.findAll('dwarf');
                hasErrors=false;
             } else {

                if (!isCordovaApp) {
                       if (force) forceCache = true;
                                            var acc = store.find('account');

                    if (force) forceCache = true;
                    var datum = store.findAll('giftdata');
                } else {
                //alert('findall');
                if (force) forceCache = true;
                                                            var acc = store.find('account');

                                                     if (force) forceCache = true;

                        var datum = store.findAll('giftdata').then(function(e) {
                                //alert('findall done');
                                if (force) forceCache = true;
                                var events = store.findAll('event');
                                if (force) forceCache = true;
                                var giftcategory = store.findAll('giftcategory');
                                if (force) forceCache = true;
                                var s = store.findAll('state');
                                if (force) forceCache = true;
                                var stores = store.findAll('magasin');
                                if (force) forceCache = true;
                                var friend = store.findAll('friend');
                                var gift = store.findAll('gift');
                                var eventgift = store.findAll('eventgift');
                                if (force) forceCache = true;
                                var lists = store.findAll('list');
                                if (force) forceCache = true;
                                var wishlist = store.findAll('whishgift');
                                if (force) forceCache = true;
                                var shopping = store.findAll('shopping');
                                if (force) forceCache = true;

                                hasErrors=false;
                                //alert('findall done 1');
                        });
                }

             }
            running--;
            window.localStorage.setItem('JUSTLOADED', 0);
        } catch (eww) {
           //alert(eww.stack);
        }
}




function loadFromStore() {

    //Do not save
    preventSave = false;

}

function updateControllerOnlyAfterLoaded ( ctrl, key, obj, counter) {
try {
    if (obj == undefined) {
        running--;
        //console.error("SET RUNNING AAA --" + running);
        ctrl.set('cookieLoaded', ctrl.get('cookieLoaded') - 1 );
        return;
    }

console.error('GET LOADED? ' + ctrl.get('loaded'));
    if (ctrl.get('loaded')) {

       //////console.log("after loaded " + key);
       ////console.log(key + " is ");
       ////console.log(obj);

            console.error('GET FINDING OF : ' + key);
            try {
                var tmpData = AppController.get('store').all(key).filter(function(data) {
                    return data.get('id') == obj.id });
                console.error('TMPDATA : ' + tmpData);
                if (tmpData.length > 0) {
                //.length;
                //AppController.get('store').all(key, )
                    ctrl.set(key,obj);
                }
            } catch (ee) {
                ctrl.set(key,obj);
            }

            ctrl.set('cookieLoaded', ctrl.get('cookieLoaded') - 1 );
       ////console.log("RUNNING-- LOADED A : " + running);
       ////console.log("key and data : " + key + " and obj : " + obj);
        running--;
        //console.error("SET RUNNING AAA LOADED --" + running);
    } else {
        if ( counter <= 0 ) {

            try {
                var tmpData = AppController.get('store').all(key).filter(function(data) {
                            return data.get('id') == obj.id });

                    if (tmpData.length > 0) {
                    //.length;
                    //AppController.get('store').all(key, )
                        ctrl.set(key,obj);
                    }
            } catch (ee) {
                ctrl.set(key,obj);
            }
            running--;

        }
        Ember.run.later(function() {
        //Ember.run.next(updateControllerOnlyWhenFulfilled( ctrl, key, obj));
            /*if ( counter <= 0 ) {

            }*/



            updateControllerOnlyAfterLoaded( ctrl, key, obj, 1);
        }, 300);
    }

    } catch (z) {
        console.error(z.stack);
      }
}

var llllll=0;
function updateControllerOnlyWhenFulfilled( ctrl, key, obj, itr) {
  try {
    console.error("ITR : " + itr);
      if (itr >= 100) {
        return;
      }
    if (obj == undefined) {
        running--;
        //console.error("SET RUNNING BBB --" + running);
        ctrl.set('cookieLoaded', ctrl.get('cookieLoaded') - 1 );
        return;
    }
    console.error("IS FULFILLED : " + obj.isFulfilled);

    console.error(obj);
    console.error(obj.isFulfilled);
    console.error(obj.get('isFulfilled'));


    if ((obj.isFulfilled == undefined && obj != undefined) || (obj.isFulfilled)) {
        running--;
        //console.error("SET RUNNING BBB --" + running);
       ////console.log("RUNNING-- LOADED B : " + running);
       console.log("only when " + key);
       console.log(key + " is ");
       console.log(obj);
       if (obj.length > 0) {
          obj = obj[0];
       }
        try {
            if (!obj.get('isDisabled')) {
                console.error("SET CONTENT..." + obj);
                console.error(obj);
                console.error(obj.get('content'));
                console.error("AZZ SET CONTENT..." + obj);
                console.error(" KEY : " + key);
                if (obj.get('content') == undefined) {
                    console.error("GET CONTENT IS UNDEF...");
                    if (obj.length > 0) {
                        console.error('set array ');
                        ctrl.set(key,obj[0]);
                    } else {
                        console.error("SET KEY : " + key + " to obj");
                        console.error(obj);
                        ctrl.set(key,obj);
                    }
                } else {
                    ctrl.set(key,obj.get('content'));
                }

            }
            Ember.run.next(function() {
             ctrl.set('cookieLoaded', ctrl.get('cookieLoaded') - 1 );
            });
        } catch (z) {
            console.error(z.stack);
        }


    } else {
        Ember.run.later(function() {
        //Ember.run.next(updateControllerOnlyWhenFulfilled( ctrl, key, obj));
            updateControllerOnlyWhenFulfilled( ctrl, key, obj, itr++);
        }, 100);
    }
  } catch (z) {
   console.error(z.stack);
  }
}

function onlyAfterAllObjectLoaded(dataMsg, ctrl) {
try {
    //console.log('RELOAD?' + ctrl.get('cookieLoaded'));
   //alert('ALL COOKIE LOADED ? ' + ctrl.get('cookieLoaded'));
    if (ctrl.get('cookieLoaded') < 0) {

        var allLoaded = true;

        /*for(var key in dataMsg) {
            try {
              ////console.log(key);
                if (key.endsWith("_acenteraobj")) {
                  //  Ember.run.next(function() {
                     var toFindObject = dataMsg[key];

                      var theKey = toFindObject.controller_key;
                     var theType = toFindObject.type;
                     var theId = toFindObject.id;
                     var s = controller.get('store');

                     var f = s.find(theType, theId );
                     if (! f.isFulfilled) {
                        allLoaded = false;
                        break;
                     }
                }
            } catch (ee) {
            }
        }*/
//console.log('allLoaded ?' + allLoaded);
         if (allLoaded) {
          //console.log('allLoaded ?' + allLoaded);
            try {
            //alert('ALL LOADED');
            for(var key in dataMsg) {
                        try {
                             //console.log(key);
                               if (key.endsWith("_acenteraobj")) {
                                   //console.error("TTTTOK : " + key);
                                  //do nothing
                                  console.error("LAODING.....");
                                  console.error(key);
                                  var key1 = key.replaceAll("_acenteraobj","");
                                  console.error(key1);
                                  console.error(dataMsg[key]);
                                  var theId = dataMsg[key]['id'];
                                  var theType = dataMsg[key]['type'];

                                  var s = ctrl.get('store');
                                  var tmpData = s.all(theType).filter(function(data) {
                                      return data.get('id') == theId });
                                 console.error("KEYIDZ");
                                 console.error(tmpData);
                                 if (tmpData.length <= 0) {
                                     //console.error("KEYIDZ1 find");
                                     var f = s.find(theType, theId );
                                     ctrl.set('cookieLoaded', ctrl.get('cookieLoaded') + 1 );
                                     updateControllerOnlyWhenFulfilled(ctrl, key1, f, 1);
                                 } else {
                                    console.error("KEYIDZ1 we already got it.. but is it deleted?");
                                    var obj = tmpData;
                                    console.error(obj);
                                    console.error(key1);
                                    console.error("TAZ");
                                    console.error(!obj.get('isDisabled'));
                                    if (!obj.get('isDisabled')) {

                                      //ctrl.set('cookieLoaded', ctrl.get('cookieLoaded') + 1 );
                                      console.error("ABB" + key1);
                                      updateControllerOnlyWhenFulfilled(ctrl, key1, obj,1 );
                                    }
                                 }


                                  /*var f = s.find(theType, theId );
                                  ctrl.set('cookieLoaded', ctrl.get('cookieLoaded') + 1 );
                                  updateControllerOnlyWhenFulfilled(ctrl, theKey, f);
                                  */

                               } else {
                               console.error("TEST33");
                               console.error(key + "_acenteraobj");
                               console.error(dataMsg[key]);
                               console.error(dataMsg[key + "_acenteraobj"]);
                                    if (dataMsg[key + "_acenteraobj"] == undefined) {
                                        try {
                                            if (dataMsg[key] != null) {


                                                ctrl.set(key, dataMsg[key]);

                                                running++;
                                                //console.error("SET RUNNING AAA ++" + running);


                                                //console.log("WILL SET OF " + key);

                                                ctrl.set('cookieLoaded', ctrl.get('cookieLoaded') + 1 );

                                                updateControllerOnlyAfterLoaded(ctrl, key, dataMsg[key], 0);
                                            }
                                        } catch (w) {
                                          console.log(w.stack);
                                        }
                                        //});
                                    }
                               }
                        } catch (ignore) {
                           console.log(ignore.stack);
                        }
            }
            } catch (ww) {

            }


            try {
               //alert('will call postSetupPrivateController');
                ctrl.postSetupPrivateController(ctrl);
            } catch (zz) {
                console.error(zz.stack);
            }


            try {
                if (ctrl.get('content') != null) {
                   //console.error("SET CONTENT TO : " + ctrl.get("content").get('constructor'));
                   //console.error(ctrl.get("content"));
                    AppController.set("currentModel", ctrl.get('content'));
                }
            } catch (ee ){

            }
         } else {
                 Ember.run.later(function() {
                    //alert('will call postSetupPrivateController.. only after all Loaded 1');
                     onlyAfterAllObjectLoaded(dataMsg, ctrl);
                 }, 200);
         }
    } else {
       //alert('will call postSetupPrivateController.. only after all Loaded');
        Ember.run.later(function() {
            onlyAfterAllObjectLoaded(dataMsg, ctrl);
        }, 200);
    }
} catch (z) {
   //alert(z.stack);
  }
}

function updateControllerFromCookie(ctrl, controller) {
   //alert("CTRL : " + controller);
    if (controller == null) {
       //alert('return null');
        return;
    }
    /*if (controller.get('content') == null) {
        return;
    }
    if (controller.get('content').get('constructor') == null) {
        return;
    }*/

//alert('A');
    //TODO: IN THE CASE OF A ArrayController... we will have to modify this to get the value from a field ie : cookieObject
    //console.error("CONSTCUTOR : " + controller.get('content').get('constructor'));
    var cName = "";
    var c = "";
    var dataMsg = { };
    try {
        cName = "c_" + controller.get('content').get('constructor').toString().replaceAll("App.","");

        c = readCookie(cName);

        try {
           if (c != null) {
              dataMsg = jQuery.parseJSON(c);
           }
        } catch (e) {
           ////console.log(e.stack);
        }

    }catch (ez) {

    }

    //alert('BB');
    var store = controller.get('store');
   //alert('CC');

//alert("ZZ");
    try {
        ctrl.set('cookieLoaded', -1 );

        for(var key in dataMsg) {
            try {
                  //console.log(" COOKIE : " + key);
                   if (key.endsWith("_acenteraobj")) {
                      //  Ember.run.next(function() {
                         var toFindObject = dataMsg[key];

                          var theKey = toFindObject.controller_key;
                         var theType = toFindObject.type;
                         var theId = toFindObject.id;
                         var s = controller.get('store');


                         running++;
                         //console.error("SET RUNNING BBB --" + running);
                        ////console.log("RUNNING++ updateController A : " + running);

                        var tmpData = s.all(theType).filter(function(data) {
                            return data.get('id') == theId });
                       //console.error("KEYIDZ");
                       //console.error(tmpData);
                        if (tmpData.length <= 0) {
                           //console.error("KEYIDZ1 find");
                             var f = s.find(theType, theId );
                             ctrl.set('cookieLoaded', ctrl.get('cookieLoaded') + 1 );
                             updateControllerOnlyWhenFulfilled(ctrl, theKey, f, 1);
                         } else {
                             //console.error("KEYIDZ1 we already got it.. but is it deleted?");
                              var obj = tmpData[0];
                              if (!obj.get('isDisabled')) {
                                //ctrl.set('cookieLoaded', ctrl.get('cookieLoaded') + 1 );
                                updateControllerOnlyWhenFulfilled(ctrl, theKey, obj, 1);
                              }
                         }
                   } else {
                        /*if (dataMsg[key + "_acenteraobj"] == undefined) {

                            try {
                                if (dataMsg[key] != null) {

                                    ctrl.get('content').set(key, dataMsg[key]);
                                    running++;
                                   ////console.log("RUNNING++ updateController B : " + running);
                                    ctrl.set('cookieLoaded', ctrl.get('cookieLoaded') + 1 );
                                    updateControllerOnlyAfterLoaded(ctrl, key, dataMsg[key], 0);
                                }
                            } catch (w) {
                               ////console.log(w.stack);
                            }
                            //});
                        }*/
                   }
            } catch (ignore) {
               ////console.log(ignore.stack);
            }
        }
    } catch (ezz) {
       //alert(ezz.stack);
    }

    ////console.log('hack');
    //alert('HACK');
     Ember.run.later(function() {
       //alert('only after all start?');
        onlyAfterAllObjectLoaded(dataMsg, ctrl);
     }, 10);
}


function updateCookie(model, key, val) {
try {
console.log("updateCookie ? : ");
    controller = AppController.get('currentController');
   //console.log(controller);

    if (model == undefined) {
        return;
    }

    //upon controller load we do not want to alter the Cookie's
    /*if (val == null) {
        return;
    }*/



    var cNamea = "c_" + model.get('constructor').toString().replaceAll("App.","");
   console.log("controller loaded ? : " + controller.get('loaded'));
    if (!(controller.get('loaded'))) {
        return true;
    }

   console.log("COOKIE LOADED : " + controller.get('cookieLoaded'));
    if (controller.get('cookieLoaded') > 0) {
        return true;
    }

    var cookieController = controller;

console.log("COOKIE LOADED Z : " + controller.get('cookieLoaded'));
    var cName = "c_" + model.get('constructor').toString().replaceAll("App.","");
    var c = readCookie(cName);

    var dataMsg = { };
    try {

       if (c != null) {
          dataMsg = jQuery.parseJSON(c);
       }
    } catch (e) {
       ////console.log(e.stack);
    }
console.log("COOKIE LOADED  Z1: " + controller.get('cookieLoaded'));
    //If wrong cookie...
    if (dataMsg == null) {
        dataMsg = {};
    }

    var store = cookieController.get('store');
    var typeKey = null;
    try {
        typeKey = val.get('constructor.typeKey');
    } catch (err) {
    }

console.log("COOKIE LOADED Z2 : " + controller.get('cookieLoaded'));
    delete dataMsg[key];
    delete dataMsg[key+"_acenteraobj"];

   //console.log('typEKey is :' + typeKey);
    if (typeKey != null) {
console.error("WIL STORE DATA : " + key);
    console.log(dataMsg);

        dataMsg[key+"_acenteraobj"] = {
            id : val.get('id'),
            type : typeKey,
            controller_key : key
        };
    } else {
        console.log("COOKIE LOADED Z3 : " + controller.get('cookieLoaded'));
        if (dataMsg[key+"_acenteraobj"] == undefined) {
            dataMsg[key] = val;
        }
    }

    //
   //console.log('CREATING COOKIE ' + cName);
   //console.log(dataMsg);
console.error(cName);
console.error(dataMsg);
    createCookie(cName, JSON.stringify( dataMsg ) );
 } catch (cookieError) {
   console.log(cookieError.stack);
 }
}


function getNoNull(e) {
    if (e == null) {
        return "";
    } else if (e == undefined) {
        return "";
    }
    return e.trim();
}



function changeHashWithoutScrolling(hash) {
        var id = hash.replace(/^.*#/, '');
         window.location.hash = hash
}

function routeTo(item) {
    //TODO: What about server states ?
    changeHashWithoutScrolling(item);
}


function errorLoadingAjax() {
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
    //cookie did not exists ?

    try {
        var value = window.localStorage.getItem(name);
        return value;
    } catch (ee) {
       //alert(ee.stack);

    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

//Mark App as undefined since this must load before Ember
var App = undefined;
var AppController = undefined;



App = Ember.Application.create({previousUrl: '', currentUrl: '', currentPath: '', currentModel: {}, currentController : null,
     LOG_TRANSITIONS: true,
});
App.deferReadiness();


var deferSave = false;

//Every routes should extend BaseRoute
Ember.Controller = Ember.Controller.extend({
    needs: ["application"],
    loaded: false,
    wifi: false,
    reload_model: true,
    current_percentage: 0,
    cookieLoaded: -1,
    breadcrumbVisible: true,
    breadcrumbRoute: this.path,
    breadcrumbModel: null,
    breadcrumbUseParentModel: false,
    breadcrumbEnabled: false,
    breadcrumbTitle: "",
    postSetupPrivateController: function() {
    },
    getBreadcrumDisplayName: function (model) {

       return this.get('breadcrumbTitle');
    }.observes('content','model','breadcrumbTitle').property('breadcrumbTitle','content','model'),
    errorMsgCheck: function() {
        if (this.get('errorMsg') != null) {
            scrollTop();
        }
    }.observes('errorMsg'),
});


/*
Ember.ArrayController = Ember.ArrayController.extend({
    needs: ["application"],
    loaded: false,
    reload_model: true,
    current_percentage: 0,
    cookieLoaded: 0,
    errorMsg: null,
    errorMsgCheck: function() {
        if (this.get('errorMsg') != null) {
            scrollTop();
        }
    }.observes('errorMsg'),
    successMsg: null,
    breadcrumbVisible: true,
    breadcrumbRoute: this.path,
    breadcrumbModel: null,
    breadcrumbUseParentModel: false,
    breadcrumbEnabled: false,
    breadcrumbTitle: "",
    getBreadcrumDisplayName: function (model) {
       return this.get('breadcrumbTitle');
    }.observes('content','model','breadcrumbTitle')
});*/

var ignoreAlert = false;

DS.Model = DS.Model.extend({
        disable_date: DS.attr('string'),
        isDisabled: function() {
            if (this.get('disable_date') == null) {
                return false;
            }
            return true;
        }.property('disable_date')
});

Ember.ObjectController = Ember.ObjectController.extend({
    topbarTitle: null,
    topbarTemplate: null,
    isCordovaApp: function() {
            if (window.isCordovaApp) {
                return true;
            } else {
                return false;
            }
    }.property(),
    postSetupPrivateController: function(ctrl) {
        try {
            theCurrentRecord = this.get('content');

            //NOT SURE?
            try {
                if (theCurrentRecord.get('id') != undefined) {
                    //theCurrentRecord.reload().then(function(record) { record.rollback() });
                }
            } catch (ee) {
            }

            if (this.get('topbarTemplate') != null) {
                ctrl.controllerFor('application').send('topbarTemplate', this.get('topbarTemplate'));
            }
            if (this.get('topbarTitle') != null) {
                ctrl.controllerFor('application').send('setTopbarTitle', this.get('topbarTitle'));
            }
        } catch (eee) {
        }
    },
    account: null,
    offline: false,
    isOffline: function() {
        return this.get('offline');
    }.observes('offline').property('offline'),
    needs: ["application"],
    loaded: false,
    reload_model: true,
    current_percentage: 0,
    cookieLoaded: 0,
    errorMsg: null,
    errorMsgCheck: function() {
        if (this.get('errorMsg') != null) {
            scrollTop();
        }
    }.observes('errorMsg'),
    successMsg: null,
    breadcrumbVisible: true,
    breadcrumbRoute: this.path,
    breadcrumbModel: null,
    breadcrumbUseParentModel: false,
    breadcrumbEnabled: false,
    breadcrumbTitle: function () {
        try {
            if (this.get('content') == null) {
                return "";
            }
            if (this.get('content.name') != null) {
                return this.get('content.name');
            }
            if (this.get('content.displayname') != null) {
                return this.get('content.displayname');
            }
            return this.get('content');
        } catch (ee) {
            return "";
        }
    }.observes('content','model').property('content','model'),
    getBreadcrumDisplayName: function (model) {
       return this.get('breadcrumbTitle');
    }.observes('content','model','breadcrumbTitle')
});



App.BaseRoute = Ember.Route.extend({
  needs: ["application"],
  isLoaded: false,
  leftmenuModel:null,
  topbarModel:null,
  tmpModelRunningCount: 0,
  markAsLoaded: function(c,m) {
    try {
        var self = this;
        //console.log('markAsLoaded');

        try {
            if (self.get('tmpModelRunningCount') >= 1) {
                  running--;
                  //console.error("SET RUNNING ZZZ --" + running);
                 ////console.log("RUNNING-- tmpModelRunningCount : " + running);
                  self.set('tmpModelRunningCount',0);
            }
        } catch (eee) {
           ////console.log(eee.stack);
        }

        Ember.run.next(function() {
              if (running <= 0) {
                  Ember.run.next(function() {
                    Ember.run.next(function() {
                        //console.log('will call mark as loaded1');
                        self.markAsLoaded1(c,m);
                        });
                  });
              } else {


              setTimeout(function() {
                    Ember.run.next(function() {
                        self.markAsLoaded(c,m);
                    });
               }, 100);
              }
          });
      } catch (z) {
       ////console.log(z.stack);
      }
  },
  //Mark view ready if all items where loaded...
  markAsLoaded1: function(c,m) {
        try {
                //console.log('markAsLoaded1');
              var self = this;
              Ember.run.next(function() {
                    //console.log('running is : ' + running );



                    if (running <= 0) {
                        try {
                            running = 0;
                            //console.log(self.controllerFor('application'));

                            try {
                                self.controllerFor("application").set('loading',false);
                               //console.log("WILL MARK AS LOADED FOR " + c.get('constructor'));
                                if (c.get('loaded') != undefined) {
                                   c.set('loaded', true);
                                  //////console.log("WILL MARK AS LOADED DONE FOR  " + c.get('constructor'));
                                }
                            } catch (eee) {
                            }


                           AppController.setEndLoading();
                           //OK Great we are all ready lets resize the screen if required..
                           //some browser have delays.. so lets add some setTimeout ugly but its a fix
                           resizeScreen();
                           setTimeout(function() {
                                resizeScreen();
                                setTimeout(function() {
                                      resizeScreen();
                                }, 500);
                            }, 200);
                        } catch (e) {
                            //console.log(e.stack);
                        }
                    } else {
                    setTimeout(function() {
                      Ember.run.next(function() {
                          self.markAsLoaded1(c,m);
                      });
                      }, 10);
                    }
                });
        } catch (z) {
           ////console.log(z.stack);
        }
  },
  acenteraModel: function() {
    try {
     if (running <= 0) {
         running = 0;
     }
     running++;
     //console.error("SET RUNNING CCC --" + running);
    ////console.log("RUNNING++ B : " + running);
    ////console.log("RUNNING MODEL.... AT : " + running);
     this.set('tmpModelRunningCount', 1);
     if (AppController != null) {
         AppController.setStartLoading();
     }
     } catch (z) {}
  },
  setupController: function(controller, model) {
    try {
        if (running <= 0) {
                running = 0;
        }
        running++;
        //console.error("SET RUNNING DDD --" + running);
       ////console.log("ROUTE CONTROLLER Z A+" + running);
        //if AppController is null make sure we set the variable
       //alert('setup controller... load from Store ? ' + (AppController));
        if (AppController == null) {
            AppController=controller.get("controllers.application");
            //first time..
            loadFromStore();
        }


        //call Parent
        this._super(controller, model);

        //if backend require to reset variables
        if (this.getNewRoute()) {
            //sendPostMessage("ajax/newroute", false);
        }

        //Scroll back to the top... nicely
        //$("html, body").animate({ scrollTop: 0 }, "fast");
        scrollTop();

        //Set as Loading
        this.controllerFor("application").set('loading',true);
        //this.controllerFor("application").set('title','ACenterA');




        var self = this;

        self.controllerFor("application").set('loadedTS',1);

        resizeScreen();


        try {
            //call route setupController function
            //If this one have extra data to load it can do "running++"
            //and once completed.. running--;

            //var topbarTemplate = controller.get('topbarTemplate');
            var topbarTemplate = self.get('topbarTemplate');
            AppController.set('topbarController', self);
            if (topbarTemplate != undefined) {
                this.controllerFor('application').send('topbarTemplate', topbarTemplate);
            } else {

                topbarTemplate = controller.get('topbarTemplate');
                if (topbarTemplate != undefined) {
                        this.controllerFor('application').send('topbarTemplate', topbarTemplate);
                }
            }



            var leftmenuTpl = self.get('leftmenuTemplate');
            if (leftmenuTpl != undefined) {
                this.controllerFor('application').send('leftmenu', leftmenuTpl);
            }

            //console.log(controller);
            //console.log("TEST " + controller);

            resetValues(this, ['errorMsg', 'successMsg']);
            controller.set('loaded', false);
            controller.set('errorMsg', null);
            controller.set('successMsg', null);
            AppController.set('currentController', controller);
            self.setupPrivateController(controller,model);
           //console.error("SET CURRENT MODEL TO :" + model);
            AppController.set('currModel', model);







            var leftmenuCtrl = self.get('leftmenuController');
            if (leftmenuCtrl != undefined) {
                this.controllerFor('application').send('setCurrentController', leftmenuCtrl);
            }

            //console.log("LEFT MENUM MODEL IS");
            var leftmenuModel = this.get('leftmenuModel');
            //console.log(leftmenuModel);
            if (leftmenuModel != undefined) {
                this.controllerFor('application').send('setLeftmenuModel', leftmenuModel);
            }

            var topbarModel = this.get('topbarModel');
            //console.log(leftmenuModel);
            if (topbarModel != undefined) {
                this.controllerFor('application').send('setTopbarModel', topbarModel);
            } else {
                this.controllerFor('application').send('setTopbarModel', controller.get('content'));
            }

            var topbarTitle = controller.get('topbarTitle');
            //console.log(leftmenuModel);
            if (topbarTitle != undefined) {
                this.controllerFor('application').send('setTopbarTitle', topbarTitle);
//            } else {
         //this.controllerFor('application').send('setTopbarTitle', "");
            }



        } catch (e) {
           //console.error(e.stack);
        }

      } catch (e) {
        //in case of any exception we reduce running...
        //console.error(e.stack);
      }
      //make sure to reduce running since we have finished calling everything and view can render

      running--;
      //console.error("SET RUNNING WWW --" + running);
     //console.log("ROUTE WILL CALL markAsLoaded of " + controller.get('constructor'));
      var s = this;
      Ember.run.later(function() {
            s.markAsLoaded(controller,model);
      }, 80);

  },
  setupPrivateController1: function(controller,model) {

  },
  setupPrivateController : function(controller,model) {
     //this._super(controller, model);
     running--;
     //console.error("SET RUNNING W1 --" + running);
    ////console.log("SETUP PRIVATE CONTROLLER Z A-" + running);
  },
  getNewRoute: function() {
    return true;
  },
});

var hidDiv = null;
var hidTransparent = null;
var hidImg = null;
var bdy = null;
var force = false;
var footerObj = null;

$( document ).ready( function() {
   hidDiv = $("#hidDiv");
   hidTransparent = $("#hidTransparentDiv");
   hidImg = $("#hidImg");
   bdy = $("body");
   footerObj = $("footer");
});


Ember.Route = App.BaseRoute.extend({

});

App.BaseView = Ember.View.extend({
  isRendered: false,
  didInsertElement: function() {
      //console.error("GOT : " + this.get('controller').get('constructor'));
      try {
        this._super();



        //Temporary
        try {
            if (this.get('controller.reload_model')) {
                if (this.get('controller').get('content.id') != undefined) {
                    this.get('controller').get('content').reload();
                }
            }
            currModel = this.get('controller').get('content');
        } catch (itsok) {
        }

        var self = this;
        //setTimeout(function() {

                try {updateControllerFromCookie(self.get('controller'), self.get('controller'));} catch (eew) {

                   //alert(eww.stack);
            }
        //}, 3000);

      } catch (ee) {
       //alert(ee.stack);
      }


      this.setIsRendered();
  },
  didRender: function() {
  },
  setIsRendered: function() {
      if (!!this.$()) {
         var self = this;
         this.set('isRendered', true);
         Ember.run.next(this, this.didRender);
      } else {
        if (!this.get('isRendered')) {
            if (this.isDestroyed || this.isDestroying) {
            } else {
                Ember.run.next(this, function() {
                        this.setIsRendered();
                });
            }
        }
      }
  }
});





/* Application created in something before IE: test data
********************/
if (App == undefined) {
    App = Ember.Application.create({previousUrl: '', currentUrl: '', currentPath: '', currentModel: {}, currentController : null,
        LOG_TRANSITIONS: true
    });
}

//Helper to show loading.....
var running = 0;
var endRunningInterval = null;
var endRunningMaxInterval = null;

if (getTheme == undefined) {
    var getTheme = function() {
        return "";
    }
}


/* Some Ember Components / Helpers */

App.IfEqualComponent = Ember.Component.extend({
  //v: 'test',
  isEqual: function() {
    //this.set('vv', this._parentView);
    //console.log(this._parentView);
    //console.log(this._parentView.get('view'));
    //console.log("PARAM 1 is : " + this.get('param1'));
    //console.log(this.get('param2'));
    //console.log("" + this.get('param1') == "" + this.get('param2'));
    //this.set('v', this._parentView);
    //console.log('v');
    return ("" + this.get('param1') == "" + this.get('param2'));
  }.property('view','size','type','param1', 'param2','v'),
  startWith: function() {
      return ("" + this.get('param1')).startsWith("" + this.get('param2'));
    }.property('view','size','type','param1', 'param2','v')
});

App.InArrayComponent = Ember.Component.extend({
  inArray: function() {
    var paramToValidate = this.get('param1');
    var bFound = false;
    for (var i = 2; i <= 10; i++) {
        var arr = this.get('param' + i);
        if ((arr != null) && !bFound) {
           //console.error(arr);
            var l = arr.length;
            for (var z = 0; z < arr.length; z++) {
                if (arr[z].get('id') == paramToValidate.get('id')) {
                   //console.error(paramToValidate);
                   //console.error("FOUND IT");
                    return true;
                }
            }
        }
    }
   //console.error(paramToValidate);
   //console.error("DIDNT FOUND IT=");
    return false;
  }.property('param1', 'param2','param3','param4','param5','param6','param7','param8','param9','param10','param11')
});


App.InListComponent = Ember.Component.extend({
  inList: function() {
    var paramToValidate = this.get('param1');
    for (var i = 2; i <= 10; i++) {
        if (paramToValidate === this.get('param' + i)) {
            return true;
        }
        if (this.get('param' + i) == undefined) {
            return false;
        }
    }
  }.property('param1', 'param2','param3','param4','param5','param6','param7','param8','param9','param10','param11')
});



App.ElseEqualComponent = App.IfEqualComponent.extend({});
App.NotInArrayComponent = App.InArrayComponent.extend({});
App.StartWithComponent = App.IfEqualComponent.extend({});
App.ElseStartWithComponent = App.IfEqualComponent.extend({});

















/* Application Controller... main object */




App.ApplicationRoute = Ember.Route.extend({
       setupPrivateController: function(controller, model) {
            var self = this;

            controller.set('startLoadingTS', (new Date().getTime() / 1000));
            controller.setStartLoading();


            running++;
           ////console.log('SET RUNNING TO A1+ ' + running);
            model.account.then(function(e) {
                controller.set('account', e.get('content')[0]);
               ////console.log('SET RUNNING TO A1-' + running);
                running--;
                if (controller.get('account.id') == undefined) {
                    window.location.href=prefix + "logout";
                };
            });

            running++;
            model.projects.then(function(e) {
                controller.set('projects', e.get('content'));
                controller.set('projectsObject', e);
                running--;
            });
       },
       model: function(params) {
             var store = this.get("store");

             var multimodel = {
                account: store.find('account'),
                projects: store.findAll('projects')
             }
             return multimodel;
       },
       actions: {
           clear : function (controller, item) {
                controller.set(item, null);
           },
           clean : function (controller, item) {
               controller.set(item, null);
           },
           openModal: function(model) {
                try {
                     this.controllerFor("modal").set('model', model);
                     this.controllerFor("modal").set('content', model.content);
                     this.controllerFor("modal").set('ctrl', model.controller);
                     if (model.hasOwnProperty("didInsert")) {

                        this.controllerFor("modal").set('didInsert', model.didInsert);
                     } else {
                        this.controllerFor("modal").set('didInsert', null);
                     }
                     try {
                     //console.error("MODAL");
                     //console.error(model);
                        //alert(model.saveEnabled);
                        if (model.saveEnable != undefined) {


                            this.controllerFor("modal").set('saveEnable', model.saveEnable);
                        } else {
                            this.controllerFor("modal").set('saveEnable', true);
                        }
                     } catch (zz) {
                     }


                    if (isOnWifi) {
                        var r = null;


                        try {
                            var url = window.location.hash.substring(1);

                            ga('send', 'pageview', {
                                'page': url + "/" + model.tpl,
                                'title': url + "/" + model.tpl
                            });
                        } catch (e) {
                        }
                    }


                     return this.render("modal", {
                       into: 'application',
                       outlet: 'modal'
                     });
                 } catch (ee) {
                     console.log(ee.stack);
                 }
           },

           closeModal: function() {
             return this.disconnectOutlet({
               outlet: 'modal',
               parentView: 'application'
             });
           }
      }

});


App.ApplicationController = Ember.Controller.extend({
  title: null,
  account: null,
  reload_model: true,
  selectedProject: null,
  accountChange: function() {
  }.observes('account'),
  i18n: Ember.Object.create({}),
  lang: function() {
        if (this.get('account') != undefined) {
            return this.get('account.lang');
        }
        return 'en';
  }.observes('account').property('account.lang'),
  projectsObject: null,
  projects: [],
  topbarView: 'topbar',
  topbarTemplate: 'single',
  leftmenuTemplate: 'leftmenu',
  leftmenuController: null,
  breadcrumbEnabled: true,
  breadcrumbTitle: "",
  breadcrumbRoute: null,
  breadcrumbVisible: false,
  logo : "/assets/images/logo.png",
  currentModel : null, //current model used for breadcrumb and to know where we are at
  content: null,
  loadedTS: null,
  startLoadingTS: null,
  wizard: false,

  /* Start of loading animation.... */
  hasLoaded : false, //mark as web page never loaded... (First time page load)
  loading: true, //mark as being loading..
  setStartLoadingWithDelay: function(delay) {
        var customDelay = delay;
        if (delay == undefined) {
            customDelay = 450;
        }
        this.setStartLoading(customDelay);
  },
  setStartLoading: function(delay) {
          var self = this;
      try {

          $("body").css("cursor", "progress");

          self.set('loading',true);
          var innerDelay = 550;
          if (delay != undefined) {
              innerDelay = delay;
              if (running <= 0) {
                   running = 1;
                  ////console.log("setStartLoading RESET TO " + running);
                }
          } else {
              self.set('loading',true);
              //self.set('startLoadingTS', (new Date().getTime() / 1000));
          }

          setTimeout(function() {
              ////////alert('calling end loading.. ' + running);
              self.setEndLoading();
          }, innerDelay/2);

          if (innerDelay-5>=0) {
              setTimeout(function() {
                    ////////alert('calling end loading1.. ' + running);
                    self.setEndLoading();
              }, innerDelay-5);
          }


          setTimeout(function() {
                if (self.get('loading')) {
                          if (self.get('loading')) {
                              if (running > 0) {
                                  try {
                                      if (self.get('startLoadingTS') == undefined) {
                                        self.set('startLoadingTS', (new Date().getTime() / 1000));
                                      }
                                      //console.error('running is : ' + running);
                                      hidDiv = $("#hidDiv");
                                      hidImg = $("#hidImg");
                                      hidTransparent = $("#hidTransparentDiv");
                                      hidTransparent.removeClass("hidden").addClass("visible");
                                      hidDiv.removeClass("hidden").addClass("visible");
                                      hidImg.removeClass("hidden").addClass("visible");
                                  } catch (e) {
                                    //console.log(e.stack);
                                  }
                              }
                          }
               }
           }, innerDelay);

           $("body").css("cursor", "progress");

           ////////////alert(endRunningMaxInterval);
           if (endRunningMaxInterval == null) {
                   endRunningMaxInterval = setInterval(function() {
                         if (self.get('loading')) {
                              //AN ERROR OCCURED IN THE WEBSITE or it took too Long.. (limit is .. 12 seconds for now) see below
                              //TODO: Let user know... to refresh its browser?
                              ////////alert('FORCE END LOADING');
                              running = 0;

                              if (endRunningInterval != null) {
                                  clearInterval(endRunningInterval);
                                  endRunningInterval = null;
                              }
                              if (endRunningMaxInterval == null) {
                                  clearInterval(endRunningMaxInterval);
                              }
                              self.set('loading', false);
                              resizeScreen();

                                        setTimeout(function() {
                                            hidDiv = $("#hidDiv");
                                            hidImg = $("#hidImg");
                                            hidTransparent = $("#hidTransparentDiv");
                                            hidTransparent.addClass("hidden").removeClass("visible");
                                            hidDiv.addClass("hidden").removeClass("visible");
                                            hidImg.addClass("hidden").removeClass("visible");
                                            bdy.css("cursor", "default");
                                        }, 300);

                              resizeScreen();
                        }
                         clearInterval(endRunningMaxInterval);
                         endRunningMaxInterval = null;
                    }, maxUserWaitTime);
            }
       } catch (wee) {
           ////console.log(wee.stack);
       }
    },
    setEndLoading: function() {
                try {
                var self = this;
                //console.error('running is : ' + running);
                if (( running <= 0)) {
                    if (bdy != undefined) {
                        var timeElapsed = 9999;
                        var minElapseLimit = 0;

                        if (self.get('startLoadingTS') != undefined) {
                            timeElapsed = (new Date().getTime() / 1000) - self.get('startLoadingTS');
                            minElapseLimit = 0;

                            if (  ! AppController.get('hasLoaded') ) {
                                ////////alert('minELAPSELMIT SET TO 0');
                                minElapseLimit = 0;
                            }
                        }

                        //console.log("HAS LOADED.. timeElapsed vs : " + minElapseLimit);

                        if (timeElapsed >= minElapseLimit) {
                                self.set('loading', false);
                                try {
                                      bdy.css("cursor", "default");

                                      if (endRunningInterval != null) {
                                          clearInterval(endRunningInterval);
                                      }
                                      if (endRunningMaxInterval == null) {
                                          clearInterval(endRunningMaxInterval);
                                      }
                                      endRunningInterval = null;
                                      hidDiv = $("#hidDiv");
                                      hidImg = $("#hidImg");
                                      hidTransparent = $("#hidTransparentDiv");
                                      hidTransparent.addClass("hidden").removeClass("visible");
                                      hidDiv.addClass("hidden").removeClass("visible");
                                      hidImg.addClass("hidden").removeClass("visible");
                                      self.set('startLoadingTS', undefined);
                                      //$("#loadingdata").hide();
                                 } catch (e) {
                                   ////console.log(e.stack);
                                 }

                                 ////////alert('set to -5 ... ' + timeElapsed + " vs " + minElapseLimit);
                                 running = -5;
                                 Ember.run.once(self, function() {
                                    try {
                                       //console.log("HAS LOADED?? : " + AppController.get('hasLoaded'));
                                        if (  ! AppController.get('hasLoaded') ) {
                                                //console.error('set to true?');
                                                AppController.set('hasLoaded', true);
                                                self.set('startLoadingTS', 0);
                                               ////console.log("WILL SET TO TRUE : " + AppController.get('hasLoaded'));
                                                self.set('controllers.application.hasLoaded',true);
                                               ////console.log("SET TO TRUE : " + AppController.get('hasLoaded'));
                                                self.set('hasLoaded',true);
                                               ////console.log("SET TO TRUE : " + self.get('hasLoaded'));
                                        }

                                        try {

                                            /*var leftMnu= Ember.View.views['leftMenu'];
                                            if (leftMnu != undefined) {
                                                leftMnu.rerender();
                                            }*/
                                            /*setTimeout(function() {
                                                $("#loadingdata").hide();
                                            }, 150);*/

                                            var topMnu= Ember.View.views['topMenu'];
                                            if (topMnu != undefined) {
                                                //topMnu.rerender();
                                                self.send("refreshBreadcrumb");
                                            }
                                        } catch (e) {
                                           ////console.log(e.stack);
                                        }

                                    } catch (ee) {
                                        console.log(ee.stack);
                                    }
                                 });
                        } else {
                                if (endRunningInterval == undefined) {
                                    endRunningInterval = setInterval (function() {
                                         self.setEndLoading();
                                    }, 300);
                                }
                        }
                    } else {
                        if (endRunningInterval == undefined) {
                            endRunningInterval = setInterval (function() {
                                 self.setEndLoading();
                            }, 100);
                        }
                    }
                } else {
                    if (endRunningInterval == undefined) {
                        endRunningInterval = setInterval (function() {
                             self.setEndLoading();
                        }, 100);
                    }
                }
          } catch (err) {
           // console.err(err.stack);
          }
      },

      /* Start of Breadcrumb */
      breadcrumb : null,
      refreshBreadcrumb: function() {
              var br = this.get('currentModel');
              if (br != null) {
                  this.set('currentModel', null);
                  this.set('currentModel', br);
              }

      },
      modelChangeForBreadcrumb: function () {
            if (this.get('currentModel') == null ) {
              return;
            }
            var ea = [];

            var tt = this.get('currentModel').routes;



            var old = null;
            var oldModel = null;
            var lastController = null;
            for (var i = 0; i < tt.length; i++) {
                try {
                    var myController = window.App.__container__.lookup('controller:' + tt[i].routeName);

                  z = {
                      visible: getVisibleForStr(myController, tt[i].routeName),

                      //TOOD: Check this.. it was using currentModel before?

                      model : myController,
                      useParentModel: getParentModel(myController, tt[i].routeName),
                      routename: getRouteForStr(myController,tt[i].routeName),
                      hasNext : true,
                      parent: null,
                  }

                  if (old != null) {
                      if (z.useParentModel) {
                            var tmpModel = oldModel;
                            //THIS IS Potentially not good.. the while lloop;
                            if (oldModel != null) {
                                var prevention = 10;
                                while ( ! tmpModel.breadcrumbEnabled ) {

                                    if (prevention-- <= 0) {
                                        //console.log('too much breadcrumb level... something is not good');
                                        break;
                                    }
                                    if ( ! tmpModel.useParentModel ) {
                                        break;
                                    }
                                    tmpModel = tmpModel.model;
                                }
                                z.parent = tmpModel;
                            }
                            z.parent = tmpModel;
                      }
                      if (z.model == undefined) {
                          if (old.model != undefined) {
                              z.model = old.model;
                              z.name = getDisplayNameForStr(myController, tt[i].routeName, z.model);
                          }
                      }
                  }


                  if (z.model != null) {
                      oldModel = z.model;
                  }

                  if (old == null) {
                      old = { routename : "" };
                  }

//console.log(myController.get('content'));
                  z.name = getDisplayNameForStr(myController,tt[i].routeName, tt[i].get('content'), z.parent)


                  var hasNext = getHasNextForStr(tt[i].routeName, z.model);
                  if (hasNext == false) {
                      z.hasNext = false;

                  }
                  //TODO: issue when both have same "output"
                  //if (old.name != z.name) {

                          var tmp = getDisplayNameForStr(myController,tt[i].routeName, tt[i].get('content'))
                          if (!(tmp == undefined) || ( tmp == "" )) {
                                  if (z.visible) {
                                      ea.push(z);
                                      old = z;
                                  }
                          }
//                      }
                } catch (e) {
                    //console.log(e.stack);
                }
                lastController = myController;

            }

            if ( ea.length > 0 ) {
              ea[ea.length-1].hasNext = false;

            }

            this.set('breadcrumb', ea);

            return ea;
      }.observes('currentModel','content'),
      updateCurrentPath: function() {
            App.set('currentPath', this.get('currentPath'));
      }.observes('currentPath'),

      actions: {
            setTopbarView: function(view) {
                this.set('topbarView', view);
                var topMnu= Ember.View.views['topMenu'];
                //topMnu.rerender();
            },
            refreshBreadcrumb: function() {
                    var br = this.get('currentModel');
                    if (br != null) {
                        this.set('currentModel', null);
                        this.set('currentModel', br);
                    }
            },
        /* changeContext: function(e, v) {
              //console.log('CHANGE CONTEXT' + this.get('currentPath'));
              //console.log(e.get('id'));
              //console.log(e);
              var latestPath = this.get('currentPath');
              if (v == undefined) {
                //this.transitionToRoute("blank");
                this.transitionToRoute(latestPath, { id: e.get('id')});
              } else {
                this.transitionToRoute("blank");
                this.transitionToRoute(v, e);
              }
         },*/
         setCurrentController: function(ctrl) {
             this.set('leftmenuController', ctrl);

             try {
                 Ember.View.views['leftMenu'].rerender();
             } catch (e) {
             }
         },

         setLeftmenuModel: function(ctrl) {
              this.set('leftmenuModel', ctrl);

              try {
                  Ember.View.views['leftMenu'].rerender();
              } catch (e) {
              }
          },
          setTopbarModel: function(ctrl) {
            if (this.get('tobarModel') != ctrl) {
                this.set('topbarModel', ctrl);
            }

            try {
                Ember.View.views['topMenu'].rerender();
            } catch (e) {
            }
         },
         setTopbarTitle: function(title) {
             if (this.get('topbarTitle') != title) {
                this.set('topbarTitle', title);
             }


             try {
                 Ember.View.views['topMenu'].rerender();
             } catch (e) {
             }
          },
         leftmenu: function(tpl) {
            this.set('leftmenuTemplate', tpl);

            /*try {
                Ember.View.views['leftMenu'].rerender();
            } catch (e) {
            }*/
         },
         topbarTemplate: function(mode) {
            //if (this.get('topbarTemplate') != mode) {
                this.set('topbarTemplate', mode);

                //Somehow we must rerender..
                try {
                    var topMnu= Ember.View.views['topMenu'];
                    if (topMnu != undefined) {
                        topMnu.rerender();
                    }
                } catch (e) {
                   ////console.log(e.stack);
                }
            //}
         },
         logout: function() {
            window.localStorage.clear();
            window.location.href=prefix+"logout"
         },
         goto: function (e, w, parentModel) {
           try {
               if (e === "main.overview") {
                 this.transitionToRoute("main.overview");
               } else if ( e == "billing" ) {
                 this.transitionToRoute("billing.index");
               } else if ( e == "addFunds" ) {
                 if (this.get('account.wizard') <= 1) {
                     this.transitionToRoute("cluster.modifyAccount");
                 } else {
                     this.transitionToRoute("cluster.addFunds");
                 }
               } else {
                 if (parentModel != null) {
                     this.transitionToRoute(e,parentModel);
                 }  else {

                     this.transitionToRoute(e);
                 }
               }
            } catch (ewww) {
               //console.log(ewww.stack)
            }


         },
      }


});
//////alert('a0');
var customHost = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + prefix
if (prefix == "/") {
        customHost = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')
}


var CustomRESTAdapter = DS.RESTAdapter.extend({
                                    host: customHost,
                                    namespace: 'api',
                                    bulkCommit: true,
                                    headers: {
                                       "dtid": currDesktop
                                    }
});


if (App.TestData == undefined) {
    App.ApplicationAdapter = CustomRESTAdapter.extend({});

    App.ApplicationStore = DS.Store.extend({
        adapter: App.ApplicationAdapter.create({
        })
    });
}


//
// Handle deserializing data
//
/*
App.ApplicationSerializer = DS.RESTSerializer.extend({
    extractSingle: function(store, type, payload, id, requestType) {
        var result;
       ////console.log("EXTRACT SINGLE");
       ////console.log(store);
       ////console.log(type);
       ////console.log(payload);
       ////console.log(id);
       ////console.log(requestType);

        var model = type.typeKey;

        if (payload.object) {
            result = payload.object;
        } else {
            result = payload;
        }

        var embedObjs, embedKey;

        type.eachRelationship(function(key, relationship) {
            if (relationship.kind === 'hasMany') {

                embedKey = key;
               ////console.log(embedKey);
               ////console.log(result);
                //////////alert(embedKey);
                 ////console.log('tttaaa');
                 ////console.log(result);

                try {
                   ////console.log(result[key]);
                    for(var index in result) {
                        var attr = result[index];
                       ////console.log(attr);
                        if (attr[key] != undefined) {
                           ////console.log(attr[key]);
                            var tempObj = attr[key];
                            if (result[key] == undefined) {
                                result[key] = tempObj;
                            }
                            attr[key] = [];
                            for (var i = 0; i < tempObj.length; i++) {
                               ////console.log(tempObj[i]);
                                attr[key].push(tempObj[i].id);
                            }
                        }
                    }
                } catch (e) {
                }
            }
        });

        return this.x(store, type, result, id, requestType);
     }
})
*/



App.store = App.ApplicationStore.create();


Ember.LinkView.reopen({
  attributeBindings: ['data-toggle']
});


App.reopen({
    lang: Ember.computed.alias('controllers.application.account.lang')
});


App.set("i18n", Ember.Object.create({}));

function updateModel(object) {
    var s = AppController.get('store');
   ////console.log(s);
    try {
        for(var index in object) {
            var obj = object[index];
            if( Object.prototype.toString.call( obj ) === '[object Array]' ) {
                var len = obj.length;
                for (var i = 0; i < len; i++ ) {
                    s.push(index, obj[i]);
                }
            } else {
                s.push(index, obj);
            }
        }

    } catch (ex){
       console.log(ex.stack);
    }
}

var loadingEmber = true;


var appReady = function() {

try {

 var hasItem = true;
    var maxItemRetry = 230;
    while(hasItem && maxItemRetry >= 0) {
            hasItem = false;
            var m = acenteramodels;
            for(var v in m) {
                try {
                   //////console.log(m[v]);
                    if (m[v] != null) {
                        var l = m[v];
                        if (l != undefined) {
                            l();
                            delete acenteramodels[v];
                            hasItem = true;
                        }
                    }
                } catch (e) {
                  //alert(e.stack);
                }
            }
            maxItemRetry--;
    }


    var hasCtrlItem = true;
    var maxCtrlItemRetry = 230;
    while(hasCtrlItem && maxCtrlItemRetry >= 0) {
       ////console.log(acenteracontrollers.length);
        var ctrl = acenteracontrollers;
        hasCtrlItem=true;
        for(var v in ctrl) {
            try {
                if (ctrl[v] != null) {
                    var l = ctrl[v];

                    if ( l != undefined ) {
                        l();
                        delete acenteracontrollers[v];
                        hasCtrlItem = true;
                    }

                }
            } catch (e) {
              //alert(e.stack);
            }
        }
        maxCtrlItemRetry--;
    }

//console.log(acenteramodels);


    loadingEmber=false;


 //alert('creat edesk ready');
    createDesktopReady(0);
 //alert('creat edesk ready done');



  }catch(zzzz) {
      console.error(zzzz.stack);
  }



  setTimeout(function() {
      createCookie("error_project", 0);
  }, 2000);
};

/*
App.map_routes = [];

App.MapRoutes = function(routes) {
      App.map_routes.push(routes);
      return App.Router.map(function() {
        var route_lamda, _i, _len, _ref;
        _ref = App.map_routes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          route_lamda = _ref[_i];
          route_lamda.call(this);
        }
        return true;
      });
};*/

var lastRoute = null;
var lastModel = null;
var currRoute = null;
var currModel = null;


App.Router.reopen({
  notifyGoogleAnalytics: function() {
      try {

        resizeScreen();

        scrollTop();

        if  (currRoute != null) {
            var idx = currRoute.indexOf(".");
            lastRoute = currRoute.substring(idx+1, currRoute.length);
            if (lastRoute.endsWith(".index")) {
                lastRoute = lastRoute.substring(0, lastRoute.length-6)
            }
        }

        currRoute = AppController.get('currentPath');
        lastModel = currModel;
        //currModel = AppController.get('currentModel');

        AppController.set('previousUrl', AppController.get('currentUrl'));
        AppController.set('currentUrl', this.get('url'));
        try {
            createCookie("prev_task_url", readCookie("task_url") );
        } catch (ex) {}

        createCookie("task_url", this.get('url'));

        resizeScreen();

        try {
             Ember.View.views['leftMenu'].rerender();
         } catch (e) {
         }

        //if (haveGACreated) {
                    if (!haveGACreated) {
                        haveGACreated = true;
                        createGA();
                    }

                var url = this.get('url');

                if (url == "") {
                    url = "/index";
                }

                return ga('send', 'pageview', {
                        'page': url,
                        'title': url
                });

          //} else {
          //}
          return true;
      } catch (ee) {
                console.error(ee.stack);
      }
      return true;
  }.on('didTransition')
});


} catch (acenteraerror) {
  //console.error('GOT ERROR');
  //alert(acenteraerror.stack);
   console.error(acenteraerror.stack);
}


var currDate = new Date();
var retries = 0;

function createGA() {
        try {

                var clientId = readCookie("dtid");
                if (clientId == null) {
                    haveGACreated = false;
                }

            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');


              ga('create', 'UA-34138073-1', {
                 'storage': 'none',
                 'clientId': "" + clientId
                 }
              );

              ga('set', 'checkProtocolTask', function(){});


              ga('send', 'pageview');
        } catch (eeee){
                //alert(eeee.stack);
        }
}


var gaPlugin;

 //alert("Z2: ");
var successAnalyticsHandler = function() {
    //alert('success');
}

var analyticsErr = function(e) {
    //alert('error');
    //alert(e);
}

var states = {};
 //alert("Z3: " + isCordovaApp);

$(document).ready(function(){
    appReady();
});
