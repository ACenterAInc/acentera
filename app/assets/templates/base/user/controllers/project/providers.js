

App.ProjectProvidersRoute = Ember.Route.extend({
       setupPrivateController: function(controller, model) {
            controller.send('cancelNewProvider');
       }
});

App.ProjectProvidersView = App.BaseView.extend({
       didRender: function() {
          //$("#addCloud").click();
       }
});


App.ProjectProvidersController = Ember.ObjectController.extend({
    needs : [ "application","project"],
    breadcrumbTitle: "Providers",
    selectedProviderType: null,
    new_account: "",
    new_provider_apikey: "",
    new_provider_secretkey: "",
    isDigitalocean: function() {
        return (this.get('selectedProviderType') == "digitaloceanv2");
    }.property('selectedProviderType'),
    isAzure: function() {
        return (this.get('selectedProviderType') == "azure");
    }.property('selectedProviderType'),
    content: Ember.computed.alias('controllers.project.project').cacheable(),
    actions: {
            select: function (provider) {
                try {
                    this.set('selectedProviderType',provider);

                    jq("#digitalocean").removeClass("selborder");

                    if (provider != null) {
                        jq("#" + provider).addClass("selborder");
                    }
                } catch (e) {
                }
            },
            cancelNewProvider: function(e) {
                resetValues(this, ['new_provider_tag', 'new_provider_name', 'new_account', 'new_provider_apikey','new_provider_secretkey']);
                var isVisible = $("#createProvider:visible");
                if (isVisible.length > 0) {
                    $("#addCloud").click();
                }

                scrollTop();
            },
            addNewProvider: function(e) {
                var self = this;
                try {

                //alert(this.get('selectedProviderType'));
                var providerValidate = false;
                 if (this.get('selectedProviderType') == "digitaloceanv2") {
                    providerValidate = Ember.View.views['new_provider_secretkey'].validate();
                 }
                 if (this.get('selectedProviderType') == "azure") {
                    providerValidate = Ember.View.views['new_provider_account'].validate() && (this.get('uploaded_file') != null);
                    if (this.get('uploaded_file') == null) {
                        App.getI18NValue('missing_pem_file');
                    }
                 }

                if ( Ember.View.views['new_provider_name'].validate() && Ember.View.views['new_provider_tag'].validate() && providerValidate ) {

                            var prov = this.get('store').createRecord('Provider',{});
                            prov.set('name', this.get('new_provider_name'));
                            prov.set('tag', this.get('new_provider_tag'));

                            if (this.get('selectedProviderType') == "digitaloceanv2") {
                                prov.set("secretkey", this.get('new_provider_secretkey'));
                            }

                            if (this.get('selectedProviderType') == "azure") {
                                prov.set('account', this.get('new_provider_account'));
                                //prov.set('apikey', this.get('new_provider_apikey'));
                                //prov.set('secretkey', this.get('new_provider_secretkey'));
                                prov.set('uploaded_file', this.get('uploaded_file'));
                            }


                            prov.set('type', App.capitalize(this.get('selectedProviderType')));

                            AppController.setStartLoadingWithDelay();

                            prov.save().then(function(e) {
                                 //prov.deleteRecord();
                                 //Object will automatically update the browser... lets just close

                                 self.get('controllers.project.content').reload().then(function (e) {
                                        Ember.run.next(self, function() {
                                          running--;
                                        });
                                 });
                                 self.send('cancelNewProvider');
                                 self.transitionToRoute('project.providers');
                            }, function(response) {
                               //if failure
                               //server responded with {"error":"some custom error message"}
                               if (response.status == 200) {
                                   if (! response.responseJSON.success) {
                                      self.set('errorMsg', response.responseJSON.message);
                                   }
                               } else {
                                    if (response.responseJSON.message == "invalid_cred") {
                                        self.set('errorMsg', App.getI18NValue("provider.cannot_connect"));
                                    } else if ( response.responseJSON.message == "duplicate_entity") {
                                        self.set('errorMsg', App.getI18NValue("provider.already_exists"));
                                    } else {
                                        self.set('errorMsg', App.getI18NValue(response.responseJSON.message));
                                    }
                               }
                               running--;
                            });

                 } else {
                         self.set('errorMsg', App.getI18NValue('error_invalid_fields_values'));
                 }
                } catch (ew) {
                }
            }
        }
});
