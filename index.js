$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-override");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });