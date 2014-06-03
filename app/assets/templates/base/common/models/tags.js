

App.Tag = DS.Model.extend({
        name: DS.attr('string'),
        type: DS.attr('string')
});


App.TagAdapter = CustomRESTAdapter.extend({
     buildURL: function(record, suffix,z ) {
          //not great.. console.error(App.Provider.params);
          return null;
      }
});