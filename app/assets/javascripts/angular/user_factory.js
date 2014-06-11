app.factory('User', ['$resource', function($resource) {
  function User() {
    this.service = $resource('/api/users/:userId', {userId: '@id'});
  };
  User.prototype.all = function() {
    return this.service.query();
  };
  User.prototype.delete = function (uId) {
  	this.service.remove({userId: uId})
  };
  User.prototype.create = function (attr) {
  	return this.service.save(attr);
  }
  return new User;
}]);