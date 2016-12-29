app.factory('suggestions', ['$http', function($http) {
	var o = {};
	o.suggestions = [];

	o.getAll = function () {
		return $http.get('/suggestions.json').then(function(success) {
			angular.copy(success.data, o.suggestions);
		});
	};

	o.get = function (id) {
		return $http.get('/suggestions/' + id + '.json').then(function(success) {
			return success.data;
		})
	};

	o.create = function(suggestion) {
		return $http.post('/suggestions.json', suggestion).then(function(success){
			o.suggestions.push(success.data);
		});
	};

	o.update = function(suggestion) {
		return $http.put('/suggestions/'+ suggestion.id + '.json', suggestion).then(function(success) {
			return success.data;
		})
	}
	return o;
}]);
