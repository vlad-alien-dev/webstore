app.controller('mapController', function($scope, $routeParams, $http) {
    $scope.message = $routeParams.subtype1Id;
    var req = {
        method: 'POST',
        url: 'http://localhost/sites/zipshop/colormap.php',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: { "subtype1": "CHC3" }
    }
    $http(req)
        .success(function(response,data, headers) {$scope.names = response;})
        .error(function(){});
});



