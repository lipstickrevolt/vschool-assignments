angular.module("myApp")

.controller("otherTechController", ["$scope", function ($scope) {



    $scope.word = "Other tech";

    $scope.otherTechs = [{
            name: '3D Printer',
            img: 'https://static.formlabs.com/static/formlabs-web-frontend/img/products/form2/form2-complete-package-store.jpg?2a76adeg45b163fgd4ccc57',
            price: '3500'
  },
        {
            name: 'Google Glasses',
            img: 'https://www.wired.com/wp-content/uploads/images_blogs/gadgetlab/2014/01/20140124-GOOGLE-GLASS-FRAMES-0018.jpg',
            price: '900'

                       },
        {
            name: 'Flying Car',
            img: 'http://i.dailymail.co.uk/i/pix/2016/02/19/12/315D7E0E00000578-3454461-image-a-12_1455883276806.jpg',
            price: '35000000'
                       }];



}])