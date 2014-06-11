app.controller('UserCtrl', [ '$scope', 'User', function($scope, User, $window) {

  $scope.users = User.all();

  $scope.query = {}

  var loadUsers = function () {
  	$scope.users = User.all();
  }

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

  $scope.registerUser = function () {
  	var user = {
  		'nome': $scope.user.nome,
  		'email': $scope.user.email,
  		'nascimento': $scope.user.nascimento,
  		'senha': $scope.user.senha
  	}

  	$scope.user.nome = '';
  	$scope.user.email = '';
  	$scope.user.nascimento = '';
  	$scope.user.senha = '';

  	User.create(user);
  	$('#myModal').modal('hide');

  	loadUsers();
  }

  $scope.orderProp="nome"; 

}]);