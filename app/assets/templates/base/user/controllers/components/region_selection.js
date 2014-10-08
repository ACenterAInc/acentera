App.RegionSelectionView = Ember.View.extend({
    templateName: 'components/region_selection',
    regions: null,//[ 'nyc', 'sfo' , 'ams' ],
    regionsList: [],
    products: [],
    slug: null,
    regionsAvailable: null
});
Ember.Handlebars.helper('regionselection-view', App.RegionSelectionView);
