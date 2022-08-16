var windowWidth = $(window).width();
var jobCaptcha, referCaptcha;
var onloadCallback = function () {
  (jobCaptcha = grecaptcha.render("applyCaptcha", {
    sitekey: "6LeNsaIaAAAAANZuc6EtbaQ7MLki1EigL6eRaKbG",
    theme: "light",
  })),
    (referCaptcha = grecaptcha.render("jobReferCaptcha", {
      sitekey: "6LeNsaIaAAAAANZuc6EtbaQ7MLki1EigL6eRaKbG",
      theme: "light",
    }));
};

jQuery(document).ready(function ($) {
  var emailPattern = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  var clear;
  var msgDuration = 2000;
  var $alertMessage = "";
  var $msg = $(".error-msg");

  // const SITEKEY = '6LeNsaIaAAAAANZuc6EtbaQ7MLki1EigL6eRaKbG';
  // var contactCaptcha;
  // var widgetId2;

  // var onloadCallback = function () {
  //     contactCaptcha = grecaptcha.render(document.getElementById('contactCaptcha'), {
  //         'sitekey': SITEKEY,
  //         'theme': 'light'
  //     }),
  //     widgetId2 = grecaptcha.render('invokeCaptcha', {
  //         'sitekey': SITEKEY,
  //         'theme': 'light'
  //     });
  // };
  // onloadCallback();
  function render(message) {
    hide();
    switch (message) {
      case "warning":
        $msg.addClass("msg-danger active").text($alertMessage);
        break;
    }
  }

  function timer() {
    clearTimeout(clear);
    clear = setTimeout(function () {
      hide();
    }, msgDuration);
  }

  function hide() {
    $msg.removeClass("msg-success msg-danger msg-warning msg-info active");
  }

  //  $btnWarning.on("click", function () {
  //    render("warning");
  //  });

  $msg.on("transitionend", timer);

  $(".navigation__link").click(function () {
    $(".navigation__link").removeClass("active");
    $(this).addClass("active");
  });

  $("#resumeSubmit").hide();
  $("#resume").on("change", function (e) {
    var labelVal = $(".title").text();
    var oldfileName = $(this).val();
    fileName = e.target.value.split("\\").pop();

    if (oldfileName == fileName) {
      return false;
    }
    var extension = fileName.split(".").pop();
    var fileWeight = this.files[0];

    if ($.inArray(extension, ["jpg", "jpeg", "png"]) >= 0) {
      $(".filelabel i").removeClass().addClass("fa fa-file-image-o");
      $(".filelabel i, .filelabel .title").css({
        color: "#ff0000",
      });
      $(".filelabel").css({
        border: " 2px solid #ff0000",
      });
    } else if (extension == "pdf") {
      if (fileWeight.size >= 2000000 || fileWeight.fileSize >= 2000000) {
        $(".errorResume").text("Allowed file size exceeded. (Max. 2 MB)");
        $("#resumeSubmit").hide();
        this.value = null;
        $(".filelabel i, .filelabel .title").css({
          color: "red",
        });
        $(".filelabel").css({
          border: " 2px solid red",
        });
      } else {
        $("#resumeSubmit").show();
        $(".errorResume").text(" ");
        $(".filelabel i, .filelabel .title").css({
          color: "green",
        });
        $(".filelabel").css({
          border: " 2px solid green",
        });
      }
      $(".filelabel i").removeClass().addClass("fa fa-file-pdf-o");
      $(".filelabel i, .filelabel .title").css({
        color: "green",
      });
      $(".filelabel").css({
        border: " 2px solid green",
      });
    } else if (extension == "doc" || extension == "docx") {
      $(".filelabel i").removeClass().addClass("fa fa-file-word-o");
      $(".filelabel i, .filelabel .title").css({
        color: "green",
      });
      $(".filelabel").css({
        border: " 2px solid green",
      });
    } else {
      $(".filelabel i").removeClass().addClass("fa fa-file-o");
      $(".filelabel i, .filelabel .title").css({
        color: "red",
      });
      $(".filelabel").css({
        border: " 2px solid red",
      });
    }

    if (extension === "pdf" || extension === "docx" || extension === "doc") {
      if (fileWeight.size >= 2000000 || fileWeight.fileSize >= 2000000) {
        $(".errorResume").text("Allowed file size exceeded. (Max. 2 MB)");
        $("#resumeSubmit").hide();
        this.value = null;
        $(".filelabel i, .filelabel .title").css({
          color: "red",
        });
        $(".filelabel").css({
          border: " 2px solid red",
        });
      } else {
        $("#resumeSubmit").show();
        $(".errorResume").text(" ");
        $(".filelabel i, .filelabel .title").css({
          color: "green",
        });
        $(".filelabel").css({
          border: " 2px solid green",
        });
      }
    } else {
      $(".errorResume").text("Please select word or pdf file");
      $("#resumeSubmit").hide();
    }

    if (fileName) {
      if (fileName.length > 10) {
        $(".filelabel .title").text(fileName.slice(0, 4) + "..." + extension);
      } else {
        $(".filelabel .title").text(fileName);
      }
    } else {
      $(".filelabel .title").text(labelVal);
    }
  });

  $("#referBtn").click(function () {
    $("#referSubmit").trigger("click");
  });

  $("#referjobform").on("submit", function (e) {
    var referjobtitle = $(".job-details #jobtitle_carrier").text();
    var referformdata = {
      refersender: $.trim($("#referfromemail").val()),
      referreceiver: $.trim($("#refertoemail").val()),
      referjobweblink: window.location.href,
      referjobtitle: referjobtitle,
    };
    var referEmailFormat1 = emailPattern.test(referformdata.refersender);
    var referEmailFormat2 = emailPattern.test(referformdata.referreceiver);
    var getCaptchaResponse = grecaptcha.getResponse(referCaptcha);

    console.log(referformdata);
    e.preventDefault();

    if (
      referformdata.refersender === null ||
      referformdata.refersender === "" ||
      referformdata.refersender === undefined
    ) {
      $alertMessage = "Please Enter Email";
      render("warning");
      return;
    } else if (!referEmailFormat1) {
      $alertMessage = "Please Enter Valid Email";
      render("warning");
      return;
    } else if (
      referformdata.referreceiver === null ||
      referformdata.referreceiver === "" ||
      referformdata.referreceiver === undefined
    ) {
      $alertMessage = "Please Enter Email";
      render("warning");
      return;
    } else if (!referEmailFormat2) {
      $alertMessage = "Please Enter Valid Email";
      render("warning");
      return;
    } else if (getCaptchaResponse.length == 0) {
      $alertMessage = "Please check captcha";
      render("warning");
      return;
    } else {
      $("#referjobform")[0].submit();
      // $.ajax({
      //   type: 'post',
      //   url: $('#referjobform').attr('action'),
      //   // dataType: 'json',
      //   data: referformdata,
      //   success: function() {
      //       console.log('form was submitted');
      //       $('#referfromemail').val(''),
      //       $('#refertoemail').val('')
      //       $('#formregistration').modal('show');
      //       setTimeout(function() {
      //           $('#formregistration').modal('hide');
      //       }, 2000);
      //       setTimeout(function() {
      //           $('#referfriendjob').modal('hide');
      //       }, 3000);
      //   },
      //   error: function() {
      //       console.log('Error occured...')
      //   }
      // });
    }

    return false;
  });

  $("#jobSubmit").click(function () {
    var m_data = new FormData();
    var jobNameValue = $.trim($("#jobApplyName").val());
    var jobEmailValue = $.trim($("#jobApplyEmail").val());
    var fileValidate = $.trim($(".errorResume").text());
    var file = $("#resume").val();
    var emailFormat = emailPattern.test($("#jobApplyEmail").val());
    var pageTitle = $.trim($("h2#jobtitle_carrier").text());
    var captchaResponse = grecaptcha.getResponse(jobCaptcha);

    m_data.append("subject", pageTitle);
    m_data.append("name", jobNameValue);
    m_data.append("email", jobEmailValue);
    m_data.append("file", $("input[name=file_attach]")[0].files[0]);

    if (
      jobNameValue === null ||
      jobNameValue === "" ||
      jobNameValue === undefined
    ) {
      $(".errorName").text("Please Enter Name");
    } else if (
      jobEmailValue === null ||
      jobEmailValue === "" ||
      jobEmailValue === undefined
    ) {
      $(".errorName").text(" ");
      $(".errorEmail").text("Please Enter Email");
    } else if (!emailFormat) {
      $(".errorEmail").text("Please Enter a Valid Email");
    } else if (file === null || file === "" || file === undefined) {
      if (
        fileValidate === null ||
        fileValidate === "" ||
        fileValidate === undefined
      ) {
        $(".errorResume").text("please attach your resume");
        $(".filelabel i, .filelabel .title").css({
          color: "red",
        });
        $(".filelabel").css({
          border: " 2px solid red",
        });
        $(".errorEmail").text("");
        $(".errorName").text(" ");
      }
    } else if (captchaResponse.length == 0) {
      $(".errorCap").text("Please Check Captcha");
    } else if (
      $(".errorResume").text() == " " &&
      jobNameValue &&
      jobEmailValue &&
      file
    ) {
      $(".errorEmail, .errorCap").text("");

      // $('#jobApplyForm')[0].submit();
      $.ajax({
        // url: $('#jobApplyForm').attr('action'),
        // url: 'https://k7w2c3wx7g.execute-api.us-east-1.amazonaws.com/stage/sendMailWithAttachment',
        url: "https://uemzg8ui03.execute-api.us-east-1.amazonaws.com/prod/sendMailWithAttachment",
        data: m_data,
        contentType: false,
        processData: false,
        type: "POST",
        dataType: "json",
        success: function (response) {
          if (response.type == "error") {
            output = '<div class="error">' + response.text + "</div>";
          } else {
            output = '<div class="success">' + response.text + "</div>";
          }
          $("#resume").val("");
          grecaptcha.reset(jobCaptcha);

          $(".filelabel i").removeClass().addClass("fa fa-paperclip");
          $(".filelabel i, .filelabel .title").css({
            color: "#ced4da",
          });
          $(".filelabel").css({
            border: "2px dashed #ced4da",
          });
          $(".filelabel .title").text("Upload CV");
          $("#formregistration").modal("show");
          $("#jobApplyForm")[0].reset();
          setTimeout(function () {
            $("#formregistration").modal("hide");
          }, 2000);
          setTimeout(function () {
            $("#jobApply").modal("hide");
          }, 100);
        },
        error: function (err) {
          console.log("error " + err);
        },
      });
    }
    return false;
  });

  TweenMax.set(
    ".rightCircleOne,.leftCircleTwo,.rightCircleThree,.leftCircleFour,.rightCircleFive",
    {
      height: "0%",
    }
  );
  TweenMax.set(
    ".leftSectionOne ul,.leftSectionTwo ul,.leftSectionThree ul,.leftSectionFour ul,.leftSectionFive ul",
    {
      autoAlpha: 0,
    }
  );

  $(".accordionTabList li").hover(
    function () {
      $(this).find(".collapsed").fadeOut(0);
      console.log("vfhvfhbv");
    },
    function () {
      $(this).find(".collapsed").fadeIn(1000);
    }
  );

  var icon = $(".mobile-menu-icon");
  var menu = $(".mobile-slider");
  var tl = new TimelineLite({
    paused: true,
    reversed: true,
  });
  tl.fromTo(
    ".mobile-slider",
    0.3,
    {
      x: 200,
      autoAlpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      ease: Power4.easeOut,
    }
  );
  tl.to(
    ".filter",
    0.3,
    {
      autoAlpha: 1,
    },
    0
  );
  icon.click(function () {
    tl.play();
  });
  $(".close-menu").click(function () {
    tl.reverse();
  });
  // Also close slider when clicking outside of the menu
  $(".filter").click(function () {
    tl.reverse();
  });

  $(".all-jobs").click(function () {
    $(".collapse").addClass("show");
    $(".all-jobs").hide();
  });

  $.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend(
      {
        start: 0,
        end: 100,
        easing: "swing",
        duration: 400,
        complete: "",
      },
      options
    );

    var thisElement = $(this);

    $({
      count: settings.start,
    }).animate(
      {
        count: settings.end,
      },
      {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
          var mathCount = Math.ceil(this.count);
          thisElement.text(mathCount);
        },
        complete: settings.complete,
      }
    );
  };

  $(".hover-trigger").click(function () {
    $(this).siblings(".content-box").toggleClass("full-cont");
    $(this).toggleClass("iconRed");
  });
});

function startAnimation() {
  // process animation
  var t2 = new TimelineMax();

  t2.to(".rightCircleOne", 1, {
    height: "100%",
    onComplete: function () {
      TweenMax.to(".leftCircleOne", 0.1, {
        className: "+=firstBorderClass",
      });
      TweenMax.to(
        ".leftSectionOne ul h3",
        0.2,
        {
          color: "#fe9b2c",
        },
        "same"
      );
      TweenMax.to(
        ".leftSectionOne ul",
        0.7,
        {
          autoAlpha: 1,
        },
        "same"
      );
    },
  })
    .to(".leftCircleTwo", 1, {
      height: "100%",
      onComplete: function () {
        TweenMax.to(".leftCircleTwo", 0.1, {
          className: "+=secondBorderClass",
        });
        TweenMax.to(
          ".leftSectionTwo h3",
          0.2,
          {
            color: "#29a9b8",
          },
          "same1"
        );
        TweenMax.to(
          ".leftSectionTwo ul",
          0.7,
          {
            autoAlpha: 1,
          },
          "same1"
        );
      },
    })
    .to(".rightCircleThree", 1, {
      height: "100%",
      onComplete: function () {
        TweenMax.to(".leftCircleThree", 0.1, {
          className: "+=thirdBorderClass",
        });
        TweenMax.to(
          ".leftSectionThree h3",
          0.2,
          {
            color: "#426e9b",
          },
          "same2"
        );
        TweenMax.to(
          ".leftSectionThree ul",
          0.7,
          {
            autoAlpha: 1,
          },
          "same2"
        );
      },
    })
    .to(".leftCircleFour", 1, {
      height: "100%",
      onComplete: function () {
        TweenMax.to(".leftCircleFour", 0.1, {
          className: "+=fourthBorderClass",
        });
        TweenMax.to(
          ".leftSectionFour h3",
          0.2,
          {
            color: "#9bb95e",
          },
          "same3"
        );
        TweenMax.to(
          ".leftSectionFour ul",
          0.7,
          {
            autoAlpha: 1,
          },
          "same3"
        );
      },
    })
    .to(".rightCircleFive", 1, {
      height: "100%",
      onComplete: function () {
        TweenMax.to(".leftCircleFive", 0.1, {
          className: "+=fivethBorderClass",
        });
        TweenMax.to(
          ".leftSectionFive h3",
          0.2,
          {
            color: "#ee7234",
          },
          "same4"
        );
        TweenMax.to(
          ".leftSectionFive ul",
          0.7,
          {
            autoAlpha: 1,
          },
          "same4"
        );
      },
    });
}
var flag = true;
window.onscroll = function () {
  myFunction();

  var topScroll = $(window).scrollTop();
  // console.log('$(window).scrollTop() ', topScroll);
  if (topScroll >= 1800) {
    startAnimation();
    // console.log(flag);
    if (flag) {
      // $('#number1').jQuerySimpleCounter({end: 200,duration: 3000});
      //  $('#number2').jQuerySimpleCounter({end: 500,duration: 2500});
      //   $('#number3').jQuerySimpleCounter({end: 10,duration: 3000});
      //   setTimeout(function(){
      //   flag=false;
      // },3000)
    }
  }
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/*var t1 = new TimelineMax();
    TweenMax.set('.servicesMenu',{autoAlpha:0,display:'none', x:1500});
    $(".serviceTxt").hover(function(){
        t1.to('.servicesMenu',0.5,{x:0, autoAlpha:1, display:'block',})
    },
    function(){
    t1.to('.servicesMenu',0.5,{x:1500, autoAlpha:0, display:'none',})
    }
);*/

$(".backIcon").click(function (e) {
  e.stopPropagation();
  $(".submenu").hide();
});
/*  end of header js  */

$(document).on("click", ".banner-arrow", function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});

$(document).ready(function () {
  /*  header js  */
  if (windowWidth < 1025) {
    $(".mobile-menu-icon").on("click", function () {
      $("body").addClass("hoverflow_H");
      $("html").addClass("hoverflow_H");
      $(".mobile-slider, .filter").show();
      $("body").css({
        position: "fixed",
        overflow: "hidden",
      });
    });
    $(".closeBtn, .filter").on("click", function () {
      $("html").removeClass("hoverflow_H");
      $("body").removeClass("hoverflow_H");
      $("body").css({
        position: "static",
        overflow: "unset",
      });
    });
  } else {
    $(".mobile-menu-icon").on("click", function () {
      $("body").addClass("hoverflow_H");
      $("html").addClass("hoverflow_H");
      $(".mobile-slider, .filter").show();
    });
    $(".closeBtn, .filter").on("click", function () {
      $("html").removeClass("hoverflow_H");
      $("body").removeClass("hoverflow_H");
    });
  }
  $(".mob-nav-services").click(function () {
    $(".mobile-submenu-services").addClass("active");
  });
  $(".mob-nav-about").click(function () {
    $(".mobile-submenu-about").addClass("active");
  });
  $(".mob-nav-resources").click(function () {
    $(".mobile-submenu-resources").addClass("active");
  });

  $(".mob-sub-close").click(function () {
    $(".mobile-submenu").removeClass("active");
  });
  // $("body").niceScroll({
  //   cursorcolor: "#fff"
  // });
  // $('.mobile-menu-icon').click(function(){
  //   $("body").getNiceScroll().hide();
  // });
  // $('.filter').click(function(){
  //     $("body").getNiceScroll().show();
  // })
  // $('.closeBtn').click(function(){
  //   $("body").getNiceScroll().show();
  // });
});
