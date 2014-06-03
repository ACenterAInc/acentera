

App.Quota = DS.Model.extend({
        name: DS.attr('string'),
        compute: DS.attr('string'),
        disableDate: DS.attr('string')
});


App.QuotaAdapter = CustomRESTAdapter.extend({
     buildURL: function(record, suffix,z ) {
          //not great.. console.error(App.Provider.params);
          try {
              if (suffix == undefined) {
                return "api/project/" + App.Project.params.project_id + "/quotas";
              } else {
                return "api/project/" + App.Project.params.project_id + "/quota/" + suffix;
              }
          } catch (e) {
             console.error(e.stack);
          }
      }
});


var inflector = Ember.Inflector.inflector;
inflector.irregular("quota", "quota");