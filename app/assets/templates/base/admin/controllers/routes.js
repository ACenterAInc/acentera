/* Routes
    ********************/
App.Router.map(function() {
      //Catch all Route
      this.route("404", { path: "*path"});


      //entry point
      //this.route("admin",  { path: "/" });



      this.resource(getTheme() + "admin",  { path: "/" },function() {
            this.route("index",  { path: "/" });
            this.route("abb",  { path: "/abb" });
      });

});

