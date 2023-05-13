$(document).ready(function () {
  // ----- Selector
  // let title = $("#title");
  // title.text("JS Framework");
  // console.log(title.text());
  // ---- text, html, val
  // $("#title").text("JS Framework")
  // let title = $("#title");
  // title.html("<button>FS</button>");
  // $("#text-input").val("Write here");
  // ---- events: click, mouseenter, mouseleave, dblclick, keypress
  let input = $("#text-input");
  let btn = $("#search-btn");

  // btn.click(function () {
  //   let inputValue = input.val();
  //   console.log("User entered: ", inputValue);
  // });

  // btn.dblclick(function () {
  //   let inputValue = input.val();
  //   console.log("User entered: ", inputValue);
  // });

  // btn.mouseover(function () {
  //   btn.text("Search now");
  // });

  // btn.mouseleave(function () {
  //   btn.text("Search");
  // });

  // input.change(function () {
  //   console.log(input.val());
  // });

  // input.keypress(function () {
  //   console.log(input.val());
  // });

  // ---- Effects
  // let paragraph = $("#paragraph");
  // let showBtn = $("#show-btn");
  // let hideBtn = $("#hide-btn");
  // let toggleBtn = $("#toggle-btn");
  // let bothBtn = $("#both-btn");

  // hideBtn.click(function () {
  //   // paragraph.hide(2000);
  //   // paragraph.fadeOut(1000);
  //   paragraph.slideUp(500);
  // });

  // showBtn.click(function () {
  //   // paragraph.show(400);
  //   // paragraph.fadeIn(1000);
  //   paragraph.slideDown(500);
  // });

  // toggleBtn.click(function () {
  //   // paragraph.toggle(1000);
  //   // paragraph.fadeToggle(2000);
  //   paragraph.slideToggle(300);
  // });

  // // ------------ chaining and callback
  // bothBtn.click(function () {
  //   paragraph
  //     .slideUp(1000, function () {
  //       paragraph.text("I am alive!");
  //     })
  //     .slideDown(2000, function () {
  //       console.log("Done");
  //     });
  // });

  // ---- HTML
  let btns = $("#btns");
  let hideBtn = $("#hide-btn");

  // btns.append("<button>Hi</button>");
  // btns.prepend("<button>Hi</button>");

  let htmlButton = "<button>Hi</button>";
  // hideBtn.after(htmlButton);
  // hideBtn.before(htmlButton);
});
