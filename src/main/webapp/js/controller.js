/**
 * Created with IntelliJ IDEA.
 * User: GMelo
 * Date: 03/08/2013
 * Time: 11:03
 * To change this template use File | Settings | File Templates.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'marionette'
], function($, _, Backbone, Marionette ) {

  var MyController = {}

    MyController.home = function(){
        alert('home');
    }



    return MyController;
});

