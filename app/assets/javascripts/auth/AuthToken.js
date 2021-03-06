app.service('AuthToken', ['$window', function($window) {
  this.setToken = function(token) {
    return $window.localStorage['suggestionBoxToken'] = token;
  }

  this.getToken = function() {
    return $window.localStorage['suggestionBoxToken'];
  }

  this.destroyToken = function() {
    return $window.localStorage.removeItem('suggestionBoxToken');
  }
}]);
