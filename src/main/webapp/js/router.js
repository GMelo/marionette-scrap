/**
 * Created with IntelliJ IDEA.
 * User: GMelo
 * Date: 03/08/2013
 * Time: 10:40
 * To change this template use File | Settings | File Templates.
 */
// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'controller',
    'marionette'
], function($, _, Backbone, Controller, Marionette ) {

    var MyRouter = Marionette.AppRouter.extend({
        controller: Controller,
        // "someMethod" must exist at controller.someMethod
        appRoutes: {
            // Define some URL routes
            '': 'home'

        }
    });



    return
        MyRouter;

});

