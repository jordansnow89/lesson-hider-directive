angular.module("directivePractice").controller("lessonCtrl", function($scope) {
  $scope.lessons = [
    "Services",
    "Routing",
    "Directives",
    "Review",
    "Firebase",
    "No server project",
    "Node",
    "Express",
    "Mongo"
  ];

  $scope.announceDay = (lesson, day) => {
    if (day) {
      alert(`${lesson} is active on ${day}.`);
    } else {
      alert(`${lesson} is not active on this day. `);
    }
  };

  $scope.removeLesson = lesson => {
    $scope.lessons.splice($scope.lessons.indexOf(lesson), 1);
    console.log("lesson");
  };
});
