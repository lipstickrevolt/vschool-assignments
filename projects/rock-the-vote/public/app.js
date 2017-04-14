var app = angular.module("myApp", []);

app.controller("mainCntrl", ["$scope", "getConcerns", function ($scope, getConcerns) {


    getConcerns.getConcern().then(function (response) {
        $scope.allConcerns = response;
    })

    $scope.submit = function (newConcern) {
        getConcerns.postConcern(newConcern).then(function (response) {

            $scope.allConcerns.push(response);
            $scope.newConcern.title = "";
            $scope.newConcern.description = "";
        })

    }

    $scope.like = function (concern) {
        concern.like++;
        concern.totalVotes = concern.disLike + concern.like;

        getConcerns.editConcern(concern).then(function(response){
            concern = response;
        })

    }
    $scope.disLike = function (concern){
        concern.disLike++;
        concern.totalVotes = concern.disLike + concern.like;

        getConcerns.editConcern(concern).then(function(response){
            concern = response;
        })
    }
    $scope.addComment = function(newComment, concern){
        concern.comments.push(newComment);
        getConcerns.editConcern(concern).then(function(response){
            concern = response;

        })
        delete concern.comment
    }
    $scope.delete = function(concern, index){
        $scope.allConcerns.splice(index, 1);
        getConcerns.deleteConcern(concern);
    }

    $scope.deleteComment = function(comment, index){
        var allComments = $scope.concern.comments
        allComments.splice(index, 1);
        getConcerns.deleteConcern(comment);

    }


}])