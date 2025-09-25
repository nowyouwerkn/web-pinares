/* --- Navbar scroll --- */
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 80) {
    $("nav").addClass("scroll");
  } else {
    $("nav").removeClass("scroll");
  }
});

/* --- Navbar Responsive --- */
$(".left-nav .overlay").on("click", function () {
  $("body").removeClass("toggled");
  $(".clonado").remove();
});

$(".close-btn").on("click", function () {
  $("body").removeClass("toggled");
  $(".clonado").remove();
});

function toggleMenu() {
  $("body").addClass("toggled");
}

/*---

    F A D E   E F F E C T
  
---*/
/*
$(window).scroll(function(e){
  $('.fade-eff').css({'opacity':( 250-$(window).scrollTop() )/100});
});
*/