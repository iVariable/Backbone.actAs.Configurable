Backbone.actAs = Backbone.actAs || {};
Backbone.actAs_Helpers = Backbone.actAs_Helpers || {};

Backbone.actAs_Helpers.Configurable = Backbone.actAs_Helpers.Configurable || {};
Backbone.actAs_Helpers.Configurable.Config = Backbone.actAs_Helpers.Configurable.Config || {};

Backbone.actAs.Configurable = {

	actAsConfigurable_type: 'Model',

	getConfig: function(){
		if( typeof this.actAsConfigurable_config == 'undefined' ){
			Backbone.actAs_Helpers.Configurable.Config[this.actAsConfigurable_type] = Backbone.actAs_Helpers.Configurable.Config[this.actAsConfigurable_type] || {};
			this.actAsConfigurable_config = _({}).extend(Backbone.actAs_Helpers.Configurable.Config[this.actAsConfigurable_type]);
		};
		return this.actAsConfigurable_config;
	},

	setConfig: function(config){
		return this.actAsConfigurable_config = config;
	}

};