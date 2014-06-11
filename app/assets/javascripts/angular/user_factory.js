app.factory('User', ['$resource', function($resource) {
  function User() {
    this.service = $resource('/api/users/:userId', {userId: '@id'}, {'update': { method: 'PUT' }});
  };

  User.prototype.all = function() {
    return this.service.query();
  };

  User.prototype.delete = function (uId) {
  	this.service.remove({userId: uId});
  };

  User.prototype.create = function (attr) {
  	return this.service.save(attr);
  };

  User.prototype.get = function (uId) {
  	return this.service.get({userId: uId});
  };

  User.prototype.update = function(attr) {
	return this.service.update(attr);
  }

  return new User;
}]);