
App.BaseTableController = Ember.ObjectController.extend({
        data: null,
        dt: function() {

        }.observes('data')
});

App.BaseTableView = Ember.View.extend({
        maxrows: 0,
        chart : null,
        data: null,
        linkedServer: null,
        isLoaded : false,
        classNames: ['table'],
        viewobj : null,
        view: null,
        hideaction: false,
        type: null,
        action: null,
        oldid: null,
        datatable: null,
        tagName:'div',
        initialized: false,
        template_name: null,
        action: "clickHandler",
        controller: null,
        noDataMessage: null,
        tableId: null,
        chartData: null,
        columns: null,
        options: null,
        tagName: 'div',
        clickRoute: null,
        clickOn: function (e ) {
            if (this.get('clickRoute') != undefined) {
                    AppController.transitionToRoute(this.get('clickRoute'), e);
            }
        },
        getRowObject: function(obj) {
          return {
                id : obj.get('id'),
                name : obj.get('name')
          };
        },
        noData: function() {
           this.get('datatable').fnSettings().oLanguage.sEmptyTable = this.get('noDataMessage');
           this.get('datatable').fnClearTable();
        }.observes('noDataMessage'),
        initRowClick: function() {
                    /* Add events */
                    var self = this;

                    var theTableObj = this.get('datatable');
                    $('#' + self.get('tableId') + " tbody").on('click', 'tr', function() {

                                     var row =  theTableObj.fnGetData(this);
                                     if (row != undefined) {
                                         //clicked on an item.. not on no data..
                                         var emberobject = row.emberobject
                                         self.clickOn(emberobject);
                                     }

                    });
        },

        templateName: function() {
            try {
                var k = this.get('viewobj.subTemplate');
                if (k == undefined) {
                    k = this.get('template_name');
                    if (k == undefined) {
                        k="basetablecomponent"
                    }

                    return k;
                }
                return k;
            } catch (e) {
                    return null;
            }
        }.property('viewobj.subTemplate').cacheable(),
        didInsertElement: function() {
            //Must be first thing..
            if (this.get('viewobj') != undefined) {
                if (this.get('viewobj').get('elementId') != undefined) {
                    var height_ori = ("" + this.get('viewobj').get('height')).replace("px","");

                    var heightToDel = jq('#' + this.get('viewobj').get('tableId')).offset().top - jq('#' + this.get('viewobj').get('elementId')).offset().top;
                    this.$().height(height_ori - heightToDel);
                    this.$().width(this.get('viewobj').get('width'));

                    try {
                         jq('#' + this.get('viewobj').get('elementId')).find('.box').height((height_ori - heightToDel));

                         heightToDel = (jq('#' + this.get('tableId')).offset().top - jq('#' + this.get('viewobj').get('elementId')).offset().top) * 3;
                         $('#' + this.get('tableId')).height(height_ori - heightToDel);


                    } catch (e) {
                    }
                }
            }

            try {
                running++;
                this.initializeTable();
            } catch (ee) {
            }
       },
       initializeTable: function() {
            if ($('#' + this.get('elementId')).length) {

                running--;

                var tabledef = this.getTableDefinition();

                if (tabledef != null) {
                    if (tabledef.bAuthWidth == undefined) {
                        tabledef.bAutoWidth = false;
                    }
                }

                var self = this;
                var dt = $('#' + self.get('tableId')).dataTable(tabledef);
                this.set('datatable',dt);
                this.set('initialized', true);
                this.initRowClick();

                this.update();
                resizeScreen();
            } else {
                Ember.run.later(this, function() {
                    initializeTable();
                }, 500);
            }
       },
       didInsertElementCallback: function() {
            /*this.didInsertElementTable();
            var self =
            Ember.run.once(this, this.update());*/
       },
       update: function() {
              var self = this;
              // TODO: Take the current data we received and make it properly per columns.....
              if (this.get('datatable') != undefined) {
                try {
                   this.get('datatable').fnClearTable();
                } catch (e) {
                }
                if ((this.get('data') == undefined) || (this.get('data').length == 0)) {
                    this.noData();
                } else {
                    var dtTableData = [];
                    try {
                        if (this.get('data').isFulfilled || this.get('data').isLoaded || this.get('data').loaded || this.get('data').length != undefined) {
                           var theDataTmp = this.get('data.content');
                            if (theDataTmp == undefined ) {
                                theDataTmp = this.get('data');
                            }
                            if (theDataTmp != undefined ) {
                                if (theDataTmp.content != undefined) {
                                    theDataTmp = theDataTmp.content;
                                }
                            }
                             jQuery.each(theDataTmp, function(data) {
                                    if (theDataTmp[data].id != null) { // THIS IF STATEMENT IS REQUIRED OTHERWISE DUPLICATE IN DATATABLE WHILE CREATING NEW OBJECTS
                                       var tmpData = self.getRowObject(theDataTmp[data]);
                                       if (tmpData) {
                                            try {
                                               if (tmpData.emberobject == undefined) {
                                                    tmpData.emberobject = theDataTmp[data];
                                               }
                                           } catch (ew) {
                                           }
                                           dtTableData.push(tmpData);
                                       }
                                    }
                             });
                        }
                        if (dtTableData.length <= 0 ) {
                          this.noData();
                        } else {
                            self.get('datatable').fnAddData( dtTableData );
                        }
                        resizeScreen();
                    } catch (ee) {
                    }
                }
              }
            }.observes('data.@each.id'),
            getRowObject: function(obj) {
            }
});



App.SimpleTable = App.BaseTableView.extend({
    clickRoute: null,
    clickOn: function (e ) {
        if (this.get('clickRoute') != undefined) {
                AppController.transitionToRoute(this.get('clickRoute'), e);
        }
    },
    getRowObject: function(obj) {
      return {
            id : obj.get('id'),
            name : obj.get('name')
      };
    },
    getTableDefinition: function() {
            return {
                "bProcessing": true,
                "bLengthChange": false,
                "bPaginate": false,
                "oLanguage": {
                        "sEmptyTable":     "Loading..."
                },
                "aaData": [],
                "aoColumns": [
                    { "mData": "id" },
                    { "mData": "name" },
                    {
                        "mData": "emberobject",
                        "bSearchable": false,
                        "bSortable": false,
                        "fnRender": function (oObj)
                        {
                            return "<a href='" + prefix + "#/customLink/" + oObj.aData.emberobject.get('id') + "'>Select</a>";
                       }
                    }
                ]
            };
    }
});
Ember.Handlebars.helper('simple-table', App.SimpleTable);
