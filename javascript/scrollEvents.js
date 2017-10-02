$(document).ready(function() {
    var disappearedDIV = false;
    var disappearedDIV2 = false;
    var navOn = false;
    var windowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width,
    windowHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

    $(window).scroll(function(){
        //parallax mountains and sky effect
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        if(scrollTop >= windowHeight/5){
           $('#sky').css({fill:'#8FD1F2'});
         }
         else{
            $('#sky').css({fill:'#99ddff'});
          }
         if(scrollTop >= windowHeight/3){
            $('#sky').css({fill:'#8AC2DE'});
          }
         if(scrollTop >= windowHeight/2.5){
            $('#sky').css({fill:'#86A6CF'});
          }
         if(scrollTop >= windowHeight/2){
            $('#sky').css({fill:'#6993C9'});
          }
         if(scrollTop >= windowHeight/1.5){
            $('#sky').css({fill:'#446896'});
          }
        if(scrollTop >= windowHeight/1.15){
           $('#sky').css({fill:'#243C5C'});
         }

        $('#sun').velocity(
          { translateY : scrollTop*2 },
          { duration: 1, loop: false }
        );
        $('#mountain-four, #mountain-four-light').velocity(
          { translateY : scrollTop/1.25 },
          { duration: 1, loop: false }
        );
        $('#mountain-three, #mountain-three-light').velocity(
          { translateY : scrollTop/1.75 },
          { duration: 1, loop: false }
        );
        $('#mountain-two, #mountain-two-light').velocity(
          { translateY : scrollTop/2.5 },
          { duration: 1, loop: false }
        );
        $('#mountain-one').velocity(
          { translateY : scrollTop/7 },
          { duration: 1, loop: false }
        );

        //animations for skills pullup and moving stuff
        if(scrollTop > 900 && !disappearedDIV){
            disappearedDIV = true;
            $('#disappearing_div_one').velocity(
              { height : 0 },
              { duration: 800 }
            );
        }
        if(scrollTop < 100 && disappearedDIV){
            disappearedDIV = false;
            $('#disappearing_div_one').velocity(
              { height : 1000 },
              { duration: 0 }
            );
        }
        if(scrollTop > 800){
            $('#shovel').velocity(
              { rotateZ : "30" },
              { duration: 500, easing:"linear", loop: 40, delay: 2000 }
            );
            $('#axe').velocity(
              { rotateZ : "-30" },
              { duration: 500, easing:"linear", loop: 40, delay: 2000 }
            );
        }

        //experiences animations
        if(scrollTop > 2450 && !disappearedDIV2){
            disappearedDIV2 = true;
            $('.expanding_div').velocity(
              { width : "75%" },
              { duration: 800 }
            ).velocity(
              { width : 0 },
              { duration: 0 }
            );
            setTimeout(function(){
              $('.hiding_div').css("display", "inline");
              $('.experience').fadeTo("slow", 1);
              $('.small-text').fadeTo("slow", 1);
            }, 790);
        }
        if (scrollTop < 1680 && disappearedDIV2){
            disappearedDIV2 = false;
            $('.expanding_div').velocity(
              { width : 0 },
              { duration: 0 }
            );
            setTimeout(function(){
              $('.hiding_div').css("display", "none");
              $('.experience').fadeTo("fast", 0);
              $('.small-text').fadeTo("fast", 0);
            }, 0);
        }

        //nav bar
        if(scrollTop > 790 && !navOn){
          $('#nav').css('display','block').velocity(
            { translateX : -1000 },
            { duration: 1, loop: false }
          ).velocity(
            { translateX : 0 },
            { duration: 1000, loop: false }
          );
          $('.navlink').velocity(
            { translateY : 90 },
            { duration: 1, loop: false }
          ).velocity(
            { translateY : 0 },
            { duration: 500, loop: false, delay:900}
          );
          navOn = true;
        }
        if(scrollTop < 560 && navOn){
          $('#nav').css('display','none');
          $('#nav').css('display','block').velocity(
            { translateX : -1000 },
            { duration: 1000, loop: false }
          );
          navOn = false;
        }
    });

    //navlink scrolling
    $(".navlink").click(function(e){
      e.preventDefault();
      var sectionID = e.currentTarget.id + "Section";
      var theOffset = $("#" + sectionID).offset();
      $("html body").animate({
        scrollTop: theOffset.top - 100
      }, 450)

    })
});
