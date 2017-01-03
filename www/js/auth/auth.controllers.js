angular.module('buddytracker.auth.controllers', [])


.controller('WelcomeCtrl', function($scope, $state, $ionicModal){
	$scope.bgs = ["img/welcome-bg.jpg"];

	$scope.facebookSignIn = function(){
		console.log("doing facebook sign in");
		$state.go('app.feed');
	};

})

.controller('CreateAccountCtrl', function($scope, $state){
	$scope.doSignUp = function(){
		console.log("doing sign up");
		$state.go('app.feed');
	};
})

.controller('WelcomeBackCtrl', function($scope, $state, $ionicModal){
	$scope.doLogIn = function(){
		console.log("doing log in");
		$state.go('app.feed');
	};

	$ionicModal.fromTemplateUrl('views/auth/forgot-password.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.forgot_password_modal = modal;
  });

  $scope.showForgotPassword = function() {
    $scope.forgot_password_modal.show();
  };

	$scope.requestNewPassword = function() {
    console.log("requesting new password");
  };

})

.controller('ForgotPasswordCtrl', function($scope){

});
