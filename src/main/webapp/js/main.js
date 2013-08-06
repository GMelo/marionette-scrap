// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    templates: '../templates',
    marionette: 'libs/backbone/marionette/backbone.marionette.min',
    'backbone.wreqr':'libs/backbone/marionette/backbone.wreqr.min',
    'backbone.babysitter':'libs/backbone/marionette/backbone.babysitter.min'
  }

});

require([
    'app',
    'controller',
    'router'

], function(App,Controller,Router){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function

    var options={
        ap:App,
        controller:Controller,
        route:Router
    }

  App.Start(options);
});
