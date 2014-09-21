'use strict';

/* Services */


var sharedProperties = angular.module('sharedProperties', []);

sharedProperties.service('shared', function() {
	var essential = [];
	var added = [];
	var recipe = {};
	return {
        getAdded: function() {
            return added;
        },
        setAdded: function(value) {
            added = value;
        },
        getEssential: function() {
        	return essential;
        },
        setEssential: function(value) {
        	essential = value;
        },
        getRecipe: function () {
        	return recipe;
        },
        setRecipe: function (value) {
        	recipe = value;
        }
    }
})
