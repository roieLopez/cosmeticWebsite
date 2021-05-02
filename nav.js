// $btn = $( ".btnr" )[0];
// $abb = $( ".abb" )[0];
// console.log($abb)

// $('.ContainerhideNav').on('click', function () {
//   let $this = $(this);
//   let $nextQuestion = $this.next();
//   $nextQuestion.slideToggle();
// });


$('.menu2, .overlay').click(function () {
  $('.menu2').toggleClass('clicked');
  
  $('#nav').toggleClass('show');
  
});