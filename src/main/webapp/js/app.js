// Filename: app.js
define([
'jquery',
'underscore',
'backbone',
'marionette',
 'vent'// Request router.js
], function($, _, Backbone, Marionette,Vent){

    var app = new Marionette.Application();

    app.addInitializer( function(options){


    new options.route.Router({

        controller:options.controller
    });

    } );

    return app;
});
