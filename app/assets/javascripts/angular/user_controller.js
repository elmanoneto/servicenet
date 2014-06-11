app.controller('UserCtrl', [ '$scope', 'User', function($scope, User, $window) {

  $scope.users = User.all();

  $scope.openModal = function () {
  	$('#myModal').modal('show');
  }

  $scope.removeUser = function (id, idx) {
  	var confirm = window.confirm('Tem certeza que deseja remover este usuário?');
  	
  	if(confirm == true){
  		$scope.users.splice(idx, 1);
  		return User.delete(id);
  	}
  }
  	

}]);