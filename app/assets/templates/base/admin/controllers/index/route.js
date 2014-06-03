
App.AdminIndexRoute = App.BaseRoute.extend({
       setupPrivateController: function(controller, model) {
            controller.set('controllers.application.content','22aaz');
            console.error(controller.get('controllers.application'));
            running--;
       }
});

App.AdminAbbRoute = App.BaseRoute.extend({
       setupPrivateController: function(controller, model) {
            controller.set('controllers.application.content','22aaz');
            console.error(controller.get('controllers.application'));
            running--;
       }
});
