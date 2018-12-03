(function(){

    angular.module("LunchCheck", [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.dishes = "";
        $scope.textboxClass = "";
        $scope.messageClass = "";

        $scope.checkDishes = function () {
            let dishesArr = $scope.dishes.split(',');

            if (dishesArr.length === 0) {
                setMessage("Please enter data first", false);
                return;
            }

            dishesArr = dishesArr.filter(function(dish){
                return dish.trim().length !== 0;
            });

            if (dishesArr.length === 0) {
                setMessage("Please enter data first", false);
                return;
            }

            if (dishesArr.length > 3) {
                setMessage("Too mach!", true);
            } else {
                setMessage("Enjoy", true);
            }
        }

        function setMessage(message, valid) {
            $scope.message = message;

            if (valid) {
                $scope.textboxClass = "valid-textbox";
                $scope.messageClass = "success-message";
            } else {
                $scope.textboxClass = "error-textbox";
                $scope.messageClass = "error-message";
            }
        }
    }

})();