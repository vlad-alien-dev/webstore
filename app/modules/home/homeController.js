app.controller('homeController', function($scope, $http) {
    $http.get("http://localhost/sites/zipshop/categories.php")
        .success(function(response) {$scope.names = response;});
});
