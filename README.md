# About Backbone.ActAs.Configurable

A small mixin for your models/collections/views/objects allowing you to configure them externally
from one config-object. Of course you can configure your objects manually, but why you should do this, if there is
a better way?

N.B.: I know that it's simply global object with accessors, but if this is really comfortable in use
why not to use it?

# Getting started

All you need is Underscore library (because of _.extend() usage).

# Usage

At first you need a config object with special name Backbone_actAs_Helpers_Configurable_Config.
It's really comfortable to store it in his own file (config.js or same).
Let's see that's inside it.

```javascript
/**
 * config.js
 */
Backbone_actAs_Helpers_Configurable_Config = {
	App: {
		title: 'MyCoolApp',
		type: 'standalone'
	},
	Profile:{
		Dialog: {
			width: 500,
			height: 300
		}
	},

	DataProvider:{
		URL: {
			Base:		'http://test.com/',

			Profile:	'/backend/index.php?action=profile&id=',
			Job:		'/backend/index.php?action=job',
			Year:		'/backend/index.php?action=year',
			Month:		'/backend/index.php?action=month',
			Day:		'/backend/index.php?action=day',
			DayResult:	'/backend/index.php?action=dayResult'
		}
	}
}
```

Now let's use this config.
As in other actAs-plugins you are using them by simply mixing it to your object.
I prefer to mix them to Backbone.Model.prototype. But of course it's up to you how mix them.

```javascript
// Let's make all out models configurable...
_.extend( Backbone.Model.prototype, Backbone.actAs.Configurable );

//...and create our example app
var CApplication = Backbone.Model.extend({
	actAsConfigurable_type: 'App' // Special key for accessing config in our config.js
});

var CProfile = Backbone.Model.extend({
	actAsConfigurable_type: 'Profile'
});

var profile = new CProfile(),
	app = new CApplication();

//Now our model have getConfig() and setConfig() methods.
console.log( app.getConfig().title ); // 'MyCoolApp'

console.log( profile.getConfig().Dialog.width ); // 500
```

## Notes

*ATTENTION!* setConfig() and getConfig() methods using their own local copy of global config.
Then you call setConfig() you are modifing config only for this model. Other model of the same type
will remain untouched.

So if you want to modify global config you should directly modify Backbone.actAs_Helpers.Configurable.Config object.