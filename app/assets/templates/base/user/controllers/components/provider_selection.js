App.ProviderSelectionView = Ember.View.extend({
    templateName: 'components/provider_selection',
    disabled: false
});
Ember.Handlebars.helper('providerselection-view', App.ProviderSelectionView);
