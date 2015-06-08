

app.controller('mapController', function($scope,$http, $modal
) {
    $http({
        method: 'POST',
        url: 'http://localhost/sites/zipshop/colormap.php',
        contentType: 'charset=utf-8',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        data: {subtype1:'CHC3'}
    })
        .success(function(response) {$scope.colors = response;});


        $scope.gridOptions = { data: 'colors',
            enableRowSelection:false,
            enableSorting:false,
        columnDefs: [{
            field: 'index',
            displayName: 'Index'
        }, {
            field: 'image',
            displayName: 'Image',
            cellTemplate: '<div style="background-image:url({{row.getProperty(\'imageLink\')}});" ><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'
        },{
            field: 'name',
            displayName: 'Name'
        },{
            field: 'cm12',
            displayName: '12 см',
            cellTemplate: '<div><div class="ngCellText"><a href="#color/{{row.getProperty(\'name\')}}/{{col.field}}">{{row.getProperty(col.field)}}</a></div></div>'
        }, {
            field: 'cm14',
            displayName: '14 см',
            cellTemplate: '<div><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'
        }, {
            field: 'cm16',
            displayName: '16 см',
            cellTemplate: '<div><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'
        }, {
            field: 'cm18',
            displayName: '18 см',
            cellTemplate: '<div ><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'
        }]};
    $scope.items=1;
    $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'modules/zippers/zipperView.html',
            controller: 'zipperController',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };
});