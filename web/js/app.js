'use strict';

/* App Module */

var bentoBoxApp = angular.module('bentoBoxApp', [
  'ngRoute',
  'phonecatAnimations',
  'sharedProperties',
  'ingredientListControllers',
  'phonecatFilters',
  'recipeControllers'
]);

bentoBoxApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/ingredient-list.html',
        controller: 'ingredientListCtrl'
      }).
      when('/recipes/:recipeId', {
        templateUrl: 'partials/recipeDetail.html',
        controller: 'RecipeDetailsCtrl'
      }).
      when('/recipes/', {
        templateUrl: 'partials/allRecipes.html',
        controller: 'AllRecipesCtrl'
      }).
      when('/fakerecipes/', {
        templateUrl: 'partials/allRecipes.html',
        controller: 'AllFakeRecipesCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


