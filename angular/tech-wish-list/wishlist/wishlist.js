angular.module("myApp")

.controller("wishlistController", ["$scope", function($scope){
    
    $scope.test = "Wish List";
    
    $scope.otherTechs = [{
            name: 'Bose Quiet Comfort headphones',
            img: 'http://bpc.h-cdn.co/assets/16/33/980x551/gallery-1471538214-bose-quietcomfort-35-silver.jpg',
            price: '350'
  },
        {
            name: 'Jet Pack',
            img: 'https://www.themarysue.com/wp-content/uploads/2016/03/JB-9.jpg',
            price: '250000'

                       },
        {
            name: 'PowerEgg Drone',
            img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5l9gbLNvFyo7gMcAailW7XS4zL9MlAdrmJXnNDJaW_3vP_5vQgg6rZD1qY7hFy99HRgPOh0U_&usqp=CAE',
            price: '3000'
                       }];
    
    
    
    
}])