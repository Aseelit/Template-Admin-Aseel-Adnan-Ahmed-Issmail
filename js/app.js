$(document).ready(function () {
  "use strict";
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  const menue = $(".asibar-toogle");
  const menu_stop = $(".menu-stop");
  const has_sub = $(".has-sub");
  // function menue sidebar
  menue.click(function () {
    //  $('aside').toggleClass('show');
    if ($("aside").hasClass("show")) {
      $("aside").toggleClass("show");
    } else {
      $("aside").toggleClass("show");
    }
  });

  //  Has Sub

  has_sub.click(function () {
    // menu-count
    const m = $(this).children("span.menu-count");
    var id = $(this).attr("id");
    $(this).toggleClass("open");
    $(`ul[aria-menue=${id}]`).slideToggle(300, function () {
      if (m) {
        m.toggleClass("rot");
      } else {
        return false;
      }
    });
  });

  const validated = $(".needs-validation");
  const submit = $("button[type='submit']");
  submit.click(function () {
    console.log($(this).parent().parent().addClass("was-validated"));
  });
  validated.submit(function (e) {
    e.preventDefault();
    $(this).toggleClass("was-validated");
  });
  // .input-group

  const input_hover_group = $(".input-group .form-control");
  const input_hover_group_marged = $(".input-group .form-control.marged");
  input_hover_group.focus(function () {
    $(this).parent().toggleClass("border-primary");
    $(this).toggleClass("form-hover");
  });
  input_hover_group.blur(function () {
    $(this).parent().toggleClass("border-primary");
    $(this).toggleClass("form-hover");
  });
  // marged
  input_hover_group_marged.focus(function () {
    // $(this).parent().toggleClass("border-primary")
    $(this).toggleClass("form-hover");
  });
  input_hover_group_marged.blur(function () {
    // $(this).parent().toggleClass("border-primary")
    $(this).toggleClass("form-hover");
  });
  const form_float = $(".form-float > .textarea");
  const chart_teaxtarea = $(".chart-teaxtarea");

  form_float.on({
    focus: function () {
      $(this).next().css({
        top: "-22px",
        color: "blue",
        fontSize: "13px",
      });
    },
    blur: function () {
      $(this).next().css({
        top: "7px",
        color: "#818183",
        fontSize: "16px",
      });
    },
  });

  chart_teaxtarea.on({
    keypress: function (e) {
      console.log($(this).val().length);
      var count = $(this).val().length;
      const char_count = $(".char-count");
      char_count.text(`${count}`);
      if (count >= 20) {
        $(this).css({
          color: "red",
        });
      } else {
        $(this).css({
          color: "#818183",
        });
      }
    },
  });

  const form_chek = $(".form-check-input");
  form_chek.on({
    focus: function () {
      $(this).css({
        boxShadow: "none",
      });
    },
    blur: function () {
      $(this).css({
        boxShadow: "none",
      });
    },
  });
  // $(".form-check-input:not(:checked)")
  $(".dropdown .btn").on({
    focus: function () {
      $(this).css({
        backgroundColor:" #000000c2",
        borderColor: "#000000c2",
        outline: "0",
        boxShadow: "none",
      });
    },
    blur: function () {
      $(this).css({
        backgroundColor:"#fff",
        borderColor: "#0d6efd",
        outline: "0",
        color: "#0d6efd",
        boxShadow: "none",
      });
    },
  })
});
