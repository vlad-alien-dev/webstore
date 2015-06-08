

app.controller('zipperController', function($scope,$http) {
    $http.get("http://localhost/sites/zipshop/zippers.php")
        .success(function(response) {$scope.colors = response;});
        $scope.numericValue=[0,0];
        $scope.count=0;
        $scope.sum  = function() {
            $scope.finalSum=0;
            for(var i=0; i<$scope.numericValue.length; i++){
                $scope.finalSum+=$scope.numericValue[i];
            }
            return $scope.finalSum;
        };
});