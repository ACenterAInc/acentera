
App.AdminIndexRoute = App.BaseRoute.extend({
       setupPrivateController: function(controller, model) {
            controller.set('controllers.application.content','22aaz');
            running--;
       }
});

App.AdminAbbRoute = App.BaseRoute.extend({
       setupPrivateController: function(controller, model) {
            controller.set('controllers.application.content','22aaz');
            running--;
       }
});
