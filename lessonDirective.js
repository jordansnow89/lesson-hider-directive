angular.module("directivePractice").directive("lessonHider", function() {
  return {
    templateUrl: "lessonHider.html",
    restrict: "E",
    scope: {
      lesson: "=",
      dayAlert: "&",
      removeLesson: "&"
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, element, attributes) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;
        scope.checked = false;
        scope.schedule.forEach(function(scheduleDay) {
          if (scheduleDay.lesson === scope.lesson) {
            scope.lessonDay = scheduleDay.weekday;
            scope.checked = true;
            // element.css("text-decoration", "line-through");
            return;
          }
        });
      });
    }
  };
});
