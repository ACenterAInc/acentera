Handlebars.registerHelper('equalObject', function(array, val, options) {

        try {
            var content = array;//options.data.view.content;
            ////console.error("equalsize 333.......")
            //console.error(content);
            //console.error(" vs " + val);
            //console.error(options);
            var v = options.data.view.get(val);
            //console.error("v is : " + v);

            if (v == undefined) {
                try {
                    v = options.data.view.controller.get(val);
                } catch (ee) {
                }
            }
            //console.error("v1a is : " + v);
            if (v == undefined) {
               try {
                    v = options.contexts[0].get(val);
                    //console.error("v1b is : " + v);
                    if (v == undefined) {
                        v = options.contexts[0].get(val.replaceAll("view.",""));
                    }
                    //console.error("v1c is : " + v);
               } catch (ww) {
                  //console.error(ww.stack);
               }
            }

                if ("" + v == "" + content) {
                    //console.error('yy');
                   //console.error(options.data);

                   return options.fn(options.data.view);
                }

                return options.inverse(options.data.view);
        } catch (e) {
            return options.inverse(options.data.view);
            //return options.fn(options.data.keywords.controller);
        }
});


Handlebars.registerHelper('equalObjectTest', function(array, val, options) {

        try {
            var content = array;//options.data.view.content;
            console.error("equalsize 333.......")

            console.error(content);


            console.error(" VAL IS  " + val);
            console.error(options);

            var v = options.data.view.get(val);
            console.error("v is : " + v);

            if (v == undefined) {
                try {
                    v = options.data.view.controller.get(val);
                } catch (ee) {
                }
                if (v == undefined ) {
                    v = options.data.view.get(content);
                }
                if (v == undefined ) {
                    console.error(options.contexts[options.contexts.length -1]);
                    v = options.contexts[options.contexts.length -1].get(val);
                }
            }

            console.error("v1a is : " + v);
            if (v == undefined) {
               try {
                    v = options.contexts[0].get(val);
                    console.error(v);
                    if (v == undefined) {
                        v = options.contexts[0].get(val.replaceAll("view.",""));
                    }
                    console.error("v1c is : " + v);
               } catch (ww) {
                  console.error(ww.stack);
               }
            }


                if ("" + v == "" + content) {
                    console.error('yy');
                   console.error(options.data);

                   return options.fn(options.data.view);
                }

                return options.inverse(options.data.view);
        } catch (e) {
            return options.inverse(options.data.view);
            return options.fn(options.data.keywords.controller);
        }
});