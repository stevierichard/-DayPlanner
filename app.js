$(document).ready(function () {
  var currentDate = moment().format("MMMM Do YYYY");
  $("#currentDay").text(currentDate);

  var exactTime = moment().format("h");
  var exactTime = moment().format("h");
  console.log(exactTime);

  $("#9am-save").on("click", function () {
    var userText = $("#9am-note").val();
    localStorage.setItem("data9", JSON.stringify({ task: userText }));
    render9Data();
  });

  $("#10am-save").on("click", function () {
    var userText = $("#10am-note").val();
    localStorage.setItem("data10", JSON.stringify({ task: userText }));
    render10Data();
  });

  $("#11am-save").on("click", function () {
    var userText = $("#11am-note").val();
    localStorage.setItem("data11", JSON.stringify({ task: userText }));
    render11Data();
  });

  $("#12pm-save").on("click", function () {
    var userText = $("#12pm-note").val();
    localStorage.setItem("data12", JSON.stringify({ task: userText }));
    render12Data();
  });

  $("#01pm-save").on("click", function () {
    var userText = $("#01pm-note").val();
    localStorage.setItem("data01", JSON.stringify({ task: userText }));
    render01Data();
  });

  $("#02pm-save").on("click", function () {
    var userText = $("#02pm-note").val();
    localStorage.setItem("data02", JSON.stringify({ task: userText }));
    render02Data();
  });

  $("#03pm-save").on("click", function () {
    var userText = $("#03pm-note").val();
    localStorage.setItem("data03", JSON.stringify({ task: userText }));
    render03Data();
  });

  $("#04pm-save").on("click", function () {
    var userText = $("#04pm-note").val();
    localStorage.setItem("data04", JSON.stringify({ task: userText }));
    render04Data();
  });

  $("#05pm-save").on("click", function () {
    var userText = $("#05pm-note").val();
    localStorage.setItem("data05", JSON.stringify({ task: userText }));
    render05Data();
  });

  render9Data();
  render10Data();
  render11Data();
  render12Data();
  render01Data();
  render02Data();
  render03Data();
  render04Data();
  render05Data();

  function render9Data() {
    var item = JSON.parse(localStorage.getItem("data9"));
    if (item != null) {
      $("#9am-note").val(item.task);
    }
  }

  function render10Data() {
    var item = JSON.parse(localStorage.getItem("data10"));
    if (item != null) {
      $("#10am-note").val(item.task);
    }
  }

  function render11Data() {
    var item = JSON.parse(localStorage.getItem("data11"));
    if (item != null) {
      $("#11am-note").val(item.task);
    }
  }

  function render12Data() {
    var item = JSON.parse(localStorage.getItem("data12"));
    if (item != null) {
      $("#12pm-note").val(item.task);
    }
  }

  function render01Data() {
    var item = JSON.parse(localStorage.getItem("data01"));
    if (item != null) {
      $("#01pm-note").val(item.task);
    }
  }

  function render02Data() {
    var item = JSON.parse(localStorage.getItem("data02"));
    if (item != null) {
      $("#02pm-note").val(item.task);
    }
  }

  function render03Data() {
    var item = JSON.parse(localStorage.getItem("data03"));
    if (item != null) {
      $("#03pm-note").val(item.task);
    }
  }

  function render04Data() {
    var item = JSON.parse(localStorage.getItem("data04"));
    if (item != null) {
      $("#04pm-note").val(item.task);
    }
  }

  function render05Data() {
    var item = JSON.parse(localStorage.getItem("data05"));
    if (item != null) {
      $("#05pm-note").val(item.task);
    }
  }
});
