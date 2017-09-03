$(document).ready(function() {
  $(".button-collapse").sideNav();

  $(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    if (wScroll > $(".pr").offset().top - ($(window).height() / 1.2)) {
      animate();
    }

    if(wScroll > $(".thumbs").offset().top - ($(window).height() / 1.2)) {

      $(".thumb-unit").each(function(i){

        setTimeout(function() {
          $(".thumb-unit").eq(i).addClass("is-showing");
        }, 150 * (i+1));

      });

    }

  });

  function animate(){
    $('#htmlProgress').attr('data-progress', 95);
    $('#cssProgress').attr('data-progress', 90);
    $('#javascriptProgress').attr('data-progress', 90);
    $('#nodejsProgress').attr('data-progress', 85);
  }

});
