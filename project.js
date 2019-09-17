// $("button").on("click", function(){
//   $(".book1").fadeIn(2000, function(){
//     console.log("It\'s Working!!!!");
//   });
// });

$(document).ready(function(){

  $("button").on("click", function () {
    $(".book1").fadeIn(2000);
    $(".book2").fadeIn(2000);
  });


})



// $("button").on("click", function() {
//   $(".book1").animate({ "left": "+=50%" }, 5000);
//   $(".book2").animate({ "right": "+=50%" }, 5000);
// });