$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-override");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

  });
var submit = document.getElementById('getInfo');
function bleh(){
  submit.textContent = 'bleh';
}
submit.onclick = bleh;

//create function for onclick information