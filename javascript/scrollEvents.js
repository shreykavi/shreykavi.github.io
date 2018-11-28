$(document).ready(function() {
  var disappearedDIV = false;
  var disappearedDIV2 = false;
  var navOn = false;
  var logoChanged = false;
  var skillsAnimated = false;
  var firstWidth = 0;
  var windowWidth = window.innerWidth > 0 ? window.innerWidth : screen.width,
    windowHeight = window.innerHeight > 0 ? window.innerHeight : screen.height;

  // Get heights
  var SkillsSection = $("#SkillsSection").offset();
  var ExperienceSection = $("#ExperienceSection").offset();

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);

    //parallax mountains and sky effect
    if (scrollTop >= windowHeight / 5) {
      $("#sky").css({ fill: "#8FD1F2" });
    } else {
      $("#sky").css({ fill: "#99ddff" });
    }
    if (scrollTop >= windowHeight / 3) {
      $("#sky").css({ fill: "#8AC2DE" });
    }
    if (scrollTop >= windowHeight / 2.5) {
      $("#sky").css({ fill: "#86A6CF" });
    }
    if (scrollTop >= windowHeight / 2) {
      $("#sky").css({ fill: "#6993C9" });
    }
    if (scrollTop >= windowHeight / 1.5) {
      $("#sky").css({ fill: "#446896" });
    }
    if (scrollTop >= windowHeight / 1.15) {
      $("#sky").css({ fill: "#243C5C" });
    }

    $("#sun").velocity(
      { translateY: scrollTop * 2 },
      { duration: 1, loop: false }
    );
    $("#mountain-four, #mountain-four-light").velocity(
      { translateY: scrollTop / 1.25 },
      { duration: 1, loop: false }
    );
    $("#mountain-three, #mountain-three-light").velocity(
      { translateY: scrollTop / 1.75 },
      { duration: 1, loop: false }
    );
    $("#mountain-two, #mountain-two-light").velocity(
      { translateY: scrollTop / 2.5 },
      { duration: 1, loop: false }
    );
    $("#mountain-one").velocity(
      { translateY: scrollTop / 7 },
      { duration: 1, loop: false }
    );

    //animations for skills pullup and moving stuff
    //CHANGED: now moves based on scrollTop
    if (
      windowWidth > 600 &&
      1200 - 1.3 * scrollTop > 0 &&
      scrollTop < SkillsSection.top
    ) {
      $("#disappearing_div_one").height(1200 - 1.3 * scrollTop);
    }

    // if (scrollTop > SkillsSection.top - 300 && !disappearedDIV) {
    //   disappearedDIV = true;
    //   $("#disappearing_div_one").velocity({ height: 0 }, { duration: 400 });
    // }
    // if (scrollTop < 100 && disappearedDIV) {
    //   disappearedDIV = false;
    //   $("#disappearing_div_one").velocity({ height: 1500 }, { duration: 0 });
    // }

    //skills animations
    if (!skillsAnimated) {
      if (scrollTop > SkillsSection.top - 100) {
        $("#DinoText").velocity(
          { translateY: 0 },
          { duration: 500, loop: false }
        );
        $("#DinoText2").velocity(
          { translateY: 0 },
          { duration: 750, loop: false }
        );
        skillsAnimated = true;
      }
    }

    //experiences animations
    if (scrollTop > ExperienceSection.top - 200 && !disappearedDIV2) {
      $(".expanding_div")
        .velocity({ width: "75%" }, { duration: 800 })
        .velocity({ width: 0 }, { duration: 0 });
      setTimeout(function() {
        $(".hiding_div").css("display", "inline");
        $(".experience").fadeTo("fast", 1);
        $(".small-text").fadeTo("fast", 1);
      }, 790);
      disappearedDIV2 = true;
    }
    if (scrollTop < 800 && disappearedDIV2) {
      $(".expanding_div").velocity({ width: 0 }, { duration: 0 });
      setTimeout(function() {
        $(".hiding_div").css("display", "none");
        $(".experience").fadeTo("fast", 0);
        $(".small-text").fadeTo("fast", 0);
      }, 0);
      disappearedDIV2 = false;
    }

    // //TODO: MAke logo disappear at bottom of site
    // if ( (scrollTop+windowHeight+1000) > CreditsSection.top){
    //   $('.logoBlock').velocity(
    //     { translateX: -5000},
    //     { duration: 200 }
    //   );
    //   $('.logoS').velocity(
    //     { translateX: -5000},
    //     { duration: 200 }
    //   );
    // };

    if (firstWidth == 0) {
      firstWidth = $("#logo").outerWidth();
      console.log("Got first width " + firstWidth);
    }

    //DEPRECATED: Logo resize animation for nav bar
    // if (scrollTop > 790) {
    //   logoChanged = true;
    //   var logoWidth = $("#logo").outerWidth();

    //   if (logoWidth > 50) {
    //     console.log(logoWidth);
    //     $("#logo").css("width", logoWidth - 0.01 * scrollTop);
    //   }
    // }
    // if (scrollTop < 300) {
    //   var logoWidth = $("#logo").outerWidth();
    //   if (logoChanged && logoWidth < firstWidth) {
    //     //Subtract whats been added for same height to return width
    //     $("#logo").css("width", logoWidth + 0.04 * scrollTop);
    //   }
    // }
    // if (scrollTop == 0) {
    //   while (true) {
    //     if (logoChanged && logoWidth < firstWidth) {
    //       //Subtract whats been added for same height to return width
    //       var logoWidth = $("#logo").outerWidth();
    //       $("#logo").css("width", logoWidth + 2);
    //     } else {
    //       break;
    //     }
    //   }
    // }

    //nav bar
    if (scrollTop > 790 && !navOn) {
      $("#logo").velocity(
        { rotateZ: 180 },
        { duration: 500, easing: "linear", loop: false }
      );
      $("#logo").velocity(
        { rotateZ: 0 },
        { duration: 1, easing: "linear", loop: false }
      );
      $("#nav")
        .css("display", "block")
        .velocity({ translateX: -2000 }, { duration: 1, loop: false })
        .velocity({ translateX: 0 }, { duration: 600, loop: false });
      $(".navlink")
        .velocity({ translateY: 34 }, { duration: 1, loop: false })
        .velocity(
          { translateY: 0 },
          { duration: 500, loop: false, delay: 600 }
        );
      navOn = true;
    }

    //reset nav
    if (scrollTop < 590 && navOn) {
      $("#nav").css("display", "none");
      $("#nav")
        .css("display", "block")
        .velocity({ translateX: -2000 }, { duration: 400, loop: false });
      navOn = false;
    }

    //reset DinoText
    if (scrollTop < 500) {
      $("#DinoText").velocity(
        { translateY: 1500 },
        { duration: 1, loop: false }
      );
      $("#DinoText2").velocity(
        { translateY: 1500 },
        { duration: 1, loop: false }
      );
      skillsAnimated = false;
    }
  });

  //navlink scrolling
  $(".navlink").click(function(e) {
    e.preventDefault();
    var sectionID = e.currentTarget.id + "Section";
    console.log(sectionID);
    var theOffset = $("#" + sectionID).offset();
    if (sectionID == "ExperienceSection") {
      theOffset.top = theOffset.top - 100;
    }
    $("html, body").animate({ scrollTop: theOffset.top }, 450);
  });
});
