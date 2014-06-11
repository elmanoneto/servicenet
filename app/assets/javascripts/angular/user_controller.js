app.controller('UserCtrl', [ '$scope', 'User', function($scope, User) {

  $scope.users = User.all();

  $scope.loadUsers = function () {
  	$scope.users = User.all();
  }


  $scope.openModal = function (idx) {
  	$scope.user.idx = '';
  	$scope.user.nome = '';
  	$scope.user.email = '';
  	$scope.user.nascimento = '';
  	$scope.user.senha = '';

  	$('#myModal').modal('show');
  }

  $scope.modalEdit = function (id, idx) {
  	var user = User.get(id);

  	user.$promise.then(function (result) {
    	$scope.user = result;
    	$scope.user.senha = '';
	});	

  	$('#modalEdit').modal('show');
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

  	$scope.loadUsers();
  }

  $scope.editUser = function () {
  	var user = {
  		'id': $scope.user.id,
  		'nome': $scope.user.nome,
  		'email': $scope.user.email,
  		'nascimento': $scope.user.nascimento,
  		'senha': $scope.user.senha
  	}

  	User.update(user);
  	
  	$scope.user.idx = '';
  	$scope.user.nome = '';
  	$scope.user.email = '';
  	$scope.user.nascimento = '';
  	$scope.user.senha = '';


  	$('#modalEdit').modal('hide');

  	$scope.loadUsers();
  }

}]);