

App.Provider = DS.Model.extend({
        name: DS.attr('string'),
        account: DS.attr('string'),
        apikey: DS.attr('string'),
        uploaded_file: DS.attr(),
        uploaded_filea: DS.attr(),
        secretkey: DS.attr('string'),
        regions: DS.hasMany('region'),
        available_regions: DS.hasMany('region'),
        region_sizes: DS.attr(),
        type: DS.attr('string'),
        tags: DS.attr(),
        tag: DS.attr('string'),
        candelete: DS.attr('number'),
        disableDate: DS.attr('string')
});


App.ProviderAdapter = CustomRESTAdapter.extend({
     buildURL: function(record, suffix,z ) {
          try {
              if (suffix == undefined) {
                return "api/project/" + App.Project.params.project_id + "/providers";
              } else {
                return "api/project/" + App.Project.params.project_id + "/provider/" + suffix;
              }
          } catch (e) {
          }
      }
});
