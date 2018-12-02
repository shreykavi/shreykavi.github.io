//function for details object
var jobs = ["clearpath", "miovision", "rbc", "d+h", "plan_group"];
var projects = [
  "growbusy",
  "kirsch",
  "thermonitor",
  "mp3",
  "benny",
  "keil",
  "waitless",
  "morsecode"
];

//TODO: finish setting up all data here + missing images for first 2
function getDetails(experience) {
  var returnDetails = {
    title: "",
    image: "",
    date: "",
    location: "",
    tech: "",
    small_description: "",
    large_description: ""
  };

  //Set using this
  // returnDetails.title = "";
  // returnDetails.image = "";
  // returnDetails.date = "";
  // returnDetails.location = "";
  // returnDetails.tech = "";
  // returnDetails.small_description = "";
  // returnDetails.large_description = "";

  switch (experience) {
    case "clearpath":
      returnDetails.title = "Clearpath Robotics Inc.";
      returnDetails.image = "pics/clearpath_logo.png";
      returnDetails.date = "September - December 2018";
      returnDetails.location = "Kitchener, ON";
      returnDetails.tech =
        "ROS, RVIZ, Gazebo, 2D/3D Lidars, RTK GPS, IMU, SNMP, EKF, SLAM";
      returnDetails.small_description = "Software Developer";
      returnDetails.large_description =
        "Developed docking algorithm that autonomously navigates robot into dock for automated charging.<br><br>Setup RTK GPS for precise satellite positioning with SwiftNav Duro. This was later utilized by an engineering to develop a navigation software.<br><br>Improved Gazebo simulation development environments for more realistic behavior.";
      break;
    case "miovision":
      returnDetails.title = "Miovision Technologies";
      returnDetails.image = "pics/miovision_logo.png";
      returnDetails.date = "January - April 2018";
      returnDetails.location = "Kitchener, ON";
      returnDetails.tech =
        "Code Composer Studio, Tiva microcontroller, C++, Python, Linux, SPI, MongoDB, Express.js, AngularJS, Node.js";
      returnDetails.small_description = "Hardware Firmware Developer ";
      returnDetails.large_description =
        "Developed microcontroller firmware to control testing hardware used for water rating new devices.<br><br>Created full-stack MEAN applications over multiple servers to gather and organize hardware test data from multiple Databases. This data was used to track device manufacturing data.<br><br>Enhanced existing device firmware by adding features and optimizing performance.";
      break;
    case "rbc":
      returnDetails.title = "RBC Global Asset Management";
      returnDetails.image = "pics/rbc_logo.png";
      returnDetails.date = "June - September 2017";
      returnDetails.location = "Toronto, ON";
      returnDetails.tech =
        "React, JQuery, Laravel, Node.js, SQL, Git, Bash, JavaScript, ES6, HTML5, CSS3";
      returnDetails.small_description = "Web Developer";
      returnDetails.large_description =
        "Developed full-stack applications used by thousands of advisors all over Canada.<br><br>Reconstructed third-party web tools using React framework.<br><br>Helped build and add numerous features to existing tools.<br><br>Patched critical bugs under time constraints.";
      break;
    case "d+h":
      returnDetails.title = "Finastra";
      returnDetails.image = "pics/finastra_logo.png";
      returnDetails.date = "September - December 2016";
      returnDetails.location = "Mississauga, ON";
      returnDetails.tech =
        "API Testing, Performance Testing, Automated Testing, C#, Java";
      returnDetails.small_description = "Software Engineering in Test";
      returnDetails.large_description =
        "Worked in an Agile Environment with daily Scrum updates.<br><br>Designed automated testing scripts for Web Environment Testing using C# and Gherkin Feature Scripts in Microsoft Visual Studio.<br><br>Helped develop Testing Framework with Apache JMeter for automating API Testing. It inputted and outputted from CSV files so anyone setup automated tests.<br><br>Closely worked with developers to make sure API's were functional and were free of defects. Small exposure to Oracle SQL Databases and API development.";
      break;
    case "plan_group":
      returnDetails.title = "Plan Group";
      returnDetails.image = "pics/plan_logo.png";
      returnDetails.date = "January - April 2016";
      returnDetails.location = "Vaughan, ON";
      returnDetails.tech =
        "AutoCAD, Single Line Diagrams, Design to Problem Solve";
      returnDetails.small_description = "CAD Engineering";
      returnDetails.large_description =
        "Addressed design and formatting concerns from various clients. These were then added to existing drawings which were used for construction.<br><br>Worked on Single Line Diagram Schematics for multiple clients.<br><br>Utilized AutoCAD to complete drawings for records and manuals.";
      break;

    case "growbusy":
      returnDetails.title = "growbusy";
      returnDetails.image = "pics/growbusy.png";
      returnDetails.date = "October 2018 - Present";
      returnDetails.tech = "Nativescript-Vue, Firebase, TBA";
      returnDetails.small_description = "Business Scheduling App";
      returnDetails.large_description =
        "Full-stack mobile app (ios and android) with business and client facing sides.<br><br> Purpose is for service businesses to organize their operation and help interact with clients.<br><br>Leverages artificial intelligence to help businesses attract and manage their clients.";
      break;
    case "kirsch":
      returnDetails.title = "Edge Finder";
      returnDetails.image = "pics/kirsch.png";
      returnDetails.date = "May - July 2018";
      returnDetails.tech = "FPGA, VHDL";
      returnDetails.small_description = "FPGA Kirsch Edge Detector";
      returnDetails.large_description =
        "FPGA board used for digital image processing.<br><br>Loads groups of pixels in 3x3 matrix from any selected png file.<br><br>Compares the brightness of each pixel to its surrounding pixels. Uses Kirch Edge Detection method: edge strengths assigned for different brightness comparisons which then determines a direction for the edge.";
      break;
    case "thermonitor":
      returnDetails.title = "Thermonitor";
      returnDetails.image = "pics/thermonitor.png";
      returnDetails.date = "January - March 2017 (UNFINISHED)";
      returnDetails.tech = "ESP8266, FreeRTOS";
      returnDetails.small_description = "IOT Condition Tracker";
      returnDetails.large_description =
        "ESP8266 WI-FI Module with FreeRTOS<br><br>Monitors the temperature and humidity of its environment and notifies consumers when conditions are outside of a desired range.";
      break;
    case "mp3":
      returnDetails.title = "WAV Music Player";
      returnDetails.image = "pics/music_player.png";
      returnDetails.date = "November 2017";
      returnDetails.tech = "Nativescript-Vue, Firebase, TBA";
      returnDetails.small_description = "ARM Microcontroller Project";
      returnDetails.large_description =
        "Keil ARM microcontroller programmed to decode, buffer and play WAV stereo music files on speakers.<br><br>Used FatFS to navigate directories and load files.<br><br>Implemented an LCD screen to display song titles and 4 control buttons for play/pause, stop, next, and previous";
      break;
    case "benny":
      returnDetails.title = "Benny-bot";
      returnDetails.image = "pics/benny.png";
      returnDetails.date = "August 2017";
      returnDetails.tech = "Node.js, Slack";
      returnDetails.small_description = "Slackbot Translator";
      returnDetails.large_description =
        "Slackbot translates French to English using Google Translation API.<br><br>Implemented a user confirmation system that asks biligual workers to confirm translations. <br><br>Bot saves correct translation data and contributes to a growing database of translated data. If asked same translations again it can answer without confirmation.";
      break;
    case "keil":
      returnDetails.title = "Reaction Time";
      returnDetails.image = "pics/keil.png";
      returnDetails.date = "January - May 2017";
      returnDetails.tech = "Keil ARM microcontroller";
      returnDetails.small_description = "Microcontroller Game";
      returnDetails.large_description =
        "Keil ARM microprocessor used to create reaction game.<br><br>When game starts user waits until LED turns on and then quickly presses a button. It then captures the user's reaction time. Captured data is taken as microseconds and displayed to LEDs in its binary value.<br><br>Program utilizes interrupt service routines, polling subroutines, and memory mapping.";
      break;
    case "waitless":
      returnDetails.title = "WaitLess";
      returnDetails.image = "pics/waitless.png";
      returnDetails.date = "September 2016";
      returnDetails.tech = "Arduino, ultrasonic sensor, motors, power supply";
      returnDetails.small_description = "Automated Restaurant Attendant";
      returnDetails.large_description =
        "HackTheNorth 2016 Project<br><br>Robot designed with Arduino C and Bluetooth communication from Android phones. Uses Dijkstra’s Algorithm to obtain shortest path to target and sends data to Arduino which then translates into motion<br><br>Scans for obstacles using an ultrasonic sensor and stops when objects stand in its path.<br><br>Uses complex circuits for power management.";
      break;
    case "morsecode":
      returnDetails.title = "Morse Code";
      returnDetails.image = "pics/morse.png";
      returnDetails.date = "July 2016";
      returnDetails.tech = "FPGA, VHDL, LED";
      returnDetails.small_description = "Displays Morse Code";
      returnDetails.large_description =
        "VHDL project which uses LED output on FPGA board to display ASCII characters in Morse code utilizing memory mapping";
      break;
    default:
      break;
  }
  return returnDetails;
}

$(document).ready(function() {
  //create scrollable cards of brief descriptions
  for (var i = 0; i < jobs.length; i++) {
    var temp = getDetails(jobs[i]);

    //building html
    var html_element =
      '<div id="' +
      jobs[i] +
      '" class="experience">\n<div class="experience-logo">\n<img src="' +
      temp.image +
      '" alt="" style="height: 200px;">\n</div>\n<p class="experience-title">' +
      temp.title +
      '</p><p class="experience-small" style="">' +
      temp.small_description +
      "</p>\n</div>\n</div>";

    $("#work-experiences").append(html_element);
  }
  for (var i = 0; i < projects.length; i++) {
    var temp = getDetails(projects[i]);

    //building html
    var html_element =
      '<div id="' +
      projects[i] +
      '" class="experience">\n<div class="experience-logo">\n<img src="' +
      temp.image +
      '" alt="" style="height: 200px;">\n</div>\n<div><p class="experience-title">' +
      temp.title +
      '</p><p class="experience-small" style="">' +
      temp.small_description +
      "</p>\n</div>\n</div>";

    $("#project-experiences").append(html_element);
  }

  //scroll experience content with buttons
  $(".more_content").click(function(e) {
    console.log();
    var scrollAmount = 0;
    var divWidth = $("#work-experiences").width();
    switch (e.target.id) {
      case "work-arrow-r":
        scrollAmount = $("#work-experiences").scrollLeft();
        // $("#work-experiences").scrollLeft(scrollAmount + divWidth);
        $("#work-experiences").animate(
          { scrollLeft: scrollAmount + divWidth },
          450
        );
        break;
      case "work-arrow-l":
        scrollAmount = $("#work-experiences").scrollLeft();
        // $("#work-experiences").scrollLeft(scrollAmount - divWidth);
        $("#work-experiences").animate(
          { scrollLeft: scrollAmount - divWidth },
          450
        );
        break;
      case "project-arrow-r":
        scrollAmount = $("#project-experiences").scrollLeft();
        // $("#project-experiences").scrollLeft(scrollAmount + divWidth);
        $("#project-experiences").animate(
          { scrollLeft: scrollAmount + divWidth },
          450
        );
        break;
      case "project-arrow-l":
        scrollAmount = $("#project-experiences").scrollLeft();
        // $("#project-experiences").scrollLeft(scrollAmount - divWidth);
        $("#project-experiences").animate(
          { scrollLeft: scrollAmount - divWidth },
          450
        );
        break;
    }
  });
  //buttons disappear with scroll
  $("#work-experiences").scroll(function() {
    var scrollAmount = $("#work-experiences").scrollLeft();
    var divWidth = $("#work-experiences").width();
    var maxScroll = $("#work-experiences")[0].scrollWidth;
    maxScroll = maxScroll - divWidth - 10;
    console.log(scrollAmount);
    console.log(maxScroll);
    if (scrollAmount == 0) {
      $("#work-arrow-l").text("");
      $("#work-arrow-r").text(">");
    } else if (scrollAmount >= maxScroll) {
      $("#work-arrow-l").text("<");
      $("#work-arrow-r").text("");
    } else {
      $("#work-arrow-l").text("<");
      $("#work-arrow-r").text(">");
    }
  });
  $("#project-experiences").scroll(function() {
    var scrollAmount = $("#project-experiences").scrollLeft();
    var divWidth = $("#project-experiences").width();
    var maxScroll = $("#project-experiences")[0].scrollWidth;
    maxScroll = maxScroll - divWidth - 10;
    console.log(scrollAmount);
    console.log(maxScroll);
    if (scrollAmount == 0) {
      $("#project-arrow-l").text("");
      $("#project-arrow-r").text(">");
    } else if (scrollAmount >= maxScroll) {
      $("#project-arrow-l").text("<");
      $("#project-arrow-r").text("");
    } else {
      $("#project-arrow-l").text("<");
      $("#project-arrow-r").text(">");
    }
  });

  //scrolling from navbar
  $(".navlink").click(function(e) {
    e.preventDefault();
    var sectionID = e.currentTarget.id + "Section";
    console.log(sectionID);
    var theOffset = $("#" + sectionID).offset();
    if (sectionID == "ExperienceSection") {
      theOffset.top = theOffset.top - 100;
    }
    $("html, body").animate(
      {
        scrollTop: theOffset.top
      },
      450
    );
  });

  //initialize experience details
  var detailsOn = false;

  $(".experience-details").velocity({ translateX: 2000 }, { duration: 0 });

  //experience details pop up
  $(".experience").click(function(e) {
    e.preventDefault();

    var experience = e.currentTarget.id;
    var detailPanel = jobs.includes(experience)
      ? "#experience-work"
      : "#experience-project";
    $(detailPanel).velocity({ translateX: 0 }, { duration: 300 });
    detailsOn = true;
    var temp = getDetails(experience);
    console.log(temp);

    if (detailPanel == "#experience-work") {
      var html_element =
        '<div class="col-lg-5 col-md-5 col-sm-12" style="vertical-align: middle; display: flex; flex-direction: column; align-items: center; justify-content: center;">\n<img class="experience-details-image" src="' +
        temp.image +
        '">\n<p class="experience-details-title">' +
        temp.title +
        '</p>\n<p class="experience-details-small">' +
        temp.small_description +
        '</p>\n<p class="experience-details-date">' +
        temp.date +
        "<br>" +
        temp.location +
        '</p>\n</div>\n<div class="col-lg-7 col-md-7 col-sm-12" style="vertical-align: middle; display: flex; flex-direction: column; align-items: center; justify-content: center;">\n<p class="experience-details-large">' +
        temp.large_description +
        "<br><br>[ " +
        temp.tech +
        ' ]</p>\n<p ><br></p></div>"';
    } else {
      var html_element =
        '<div class="col-lg-5 col-md-5 col-sm-12" style="vertical-align: middle; display: flex; flex-direction: column; align-items: center; justify-content: center;">\n<img class="experience-details-image" src="' +
        temp.image +
        '">\n<p class="experience-details-title">' +
        temp.title +
        '</p>\n<p class="experience-details-small">' +
        temp.small_description +
        '</p>\n<p class="experience-details-date">' +
        temp.date +
        "<br>" +
        '</p>\n</div>\n<div class="col-lg-7 col-md-7 col-sm-12" style="vertical-align: middle; display: flex; flex-direction: column; align-items: center; justify-content: center;">\n<p class="experience-details-large">' +
        temp.large_description +
        "<br><br>[ " +
        temp.tech +
        ' ]</p>\n<p ><br></p></div>"';
    }

    //use details to fill out details div
    $(detailPanel).html(html_element);

    //Small text animation
    $(".small-text").fadeTo("fast", 0);
    setTimeout(function() {
      $(".small-text").text("*click outside box to close details*");
      $(".small-text").fadeTo("slow", 1);
    }, 500);
  });

  $(document).click(function(e) {
    if (detailsOn == true) {
      if (e.target.class == ("experience-details" || "experience")) return;
      //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
      if ($(e.target).closest(".experience-details").length) return;
      if ($(e.target).closest(".experience").length) return;

      //Do processing of click event here for every element except with id menu_content
      $(".experience-details").velocity(
        {
          translateX: 2000
        },
        {
          duration: 300
        }
      );
      //reset small experience tip
      $(".small-text").fadeTo("fast", 0);
      setTimeout(function() {
        $(".small-text").text("*click experience to see more details*");
        $(".small-text").fadeTo("slow", 1);
      }, 500);
      detailsOn = false;
    }
  });

  //Me descriptions
  $(".imglink")
    .mouseenter(function() {
      switch ($(this).attr("id")) {
        case "linkedin":
          $("#imglinkdesc").html("*click for linkedin*");
          break;
        case "github":
          $("#imglinkdesc").html("*click for github*");
          break;
        case "resume":
          $("#imglinkdesc").html("*click for resume*");
          break;
        default:
          break;
      }
    })
    .mouseleave(function() {
      $("#imglinkdesc").html("*hover over for descriptions*");
    });
});
