app.factory('User', ['$resource', function($resource) {
  function User() {
    this.service = $resource('/api/users/:userId', {userId: '@id'});
  };
  User.prototype.all = function() {
    return this.service.query();
  };
  User.prototype.delete = function (uId) {
  	this.service.remove({userId: uId})
  }
  return new User;
}]);