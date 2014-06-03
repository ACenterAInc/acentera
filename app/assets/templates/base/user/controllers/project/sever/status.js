
App.ProjectServerCreateStatusRoute = Ember.Route.extend({
       setupPrivateController: function(controller, model) {
            //model.reload();
       },
       actions: {
       }
});

App.ProjectServerCreateStatusView = App.BaseView.extend({
      didRender: function() {
         //
      }
});

App.ProjectServerCreateStatusController = Ember.ObjectController.extend({
        needs: ["project","ProjectServers"],
        breadcrumbTitle: "Task Status",
        showErrorGoBackButton: false,
        actions: {
            taskCompleted: function(e) {
                //alert('completed');
                /*var self = this;
                self.get('controllers.project.content').reload().then(function (e) {
                        Ember.run.next(self, function() {
                            self.transitionToRoute('project.servers');
                        });
                 });*/
            },
            taskError: function(e) {
                //alert('task response is error...');
            },
            taskErrorGoBackClick: function(e) {
                //alert('clicked on go back');
            }
        }
});


