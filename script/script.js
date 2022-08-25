$(window).on("load", function () {
  $(".preloader").fadeOut("slow");
});

$(document).ready(function () {
  // ................navbar shrink .......................
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });
});

$(document).ready(function () {
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player-1").attr("src", videoSrc);
      }
    }
    //   }))
  });

  /**-----------------
   * Toggle Theme - Light & Dark Mode
   * -----------------
   */
  function toggleTheme() {
    // if (localStorage.getItem("shala-theme") !== nll) {
    //   if (localStorage.getItem("shala-theme") === "dark") {
    //     $("body").addClass("dark");
    //   } else {
    //     $("body").removeClass("dark");
    //   }
    // } else {
    //   updateIcon();
    // }

    updateIcon();
  }
  toggleTheme();

  $(".toggle-theme").on("click", function () {
    console.log("musab");
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("shala-theme", "dark");
    } else {
      localStorage.setItem("shala-theme", "light");
    }
    updateIcon();
  });
  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    } else {
      $(".toggle-theme i").removeClass("fa-sun");
      $(".toggle-theme i").addClass("fa-moon");
    }
  }

  /* ............... features carousel................*/

  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /* screen shot carsouesl */
  $(".screenshots-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  /* testimonials carsouesl */
  $(".testimonials-carsouel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /* team carsouesl */
  $(".team-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /**----------------------
   * Page scrolling
   * --------------------------------
   */
  // $.scrollTt({
  //   topOffset: -50,
  // });
  /**--------------------- Navbar ------------------ */
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
