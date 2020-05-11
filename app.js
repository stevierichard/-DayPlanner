$(document).ready(function () {
  var currentDate = moment().format("MMMM Do YYYY");
  $("#currentDay").text(currentDate);

  var exactTime = parseInt(moment().format("HH"));
  console.log(exactTime);

  if (exactTime === 9) {
    $("#9").attr("class", "row bg-success");
  }
  if (exactTime > 9) {
    $("#9").attr("class", "row bg-danger");
  }
  if (exactTime < 9) {
    $("#9").attr("class", "row bg-secondary");
  }
  if (exactTime === 10) {
    $("#10").attr("class", "row bg-success");
  }
  if (exactTime > 10) {
    $("#10").attr("class", "row bg-danger");
  }
  if (exactTime < 10) {
    $("#10").attr("class", "row bg-secondary");
  }
  if (exactTime === 11) {
    $("#11").attr("class", "row bg-success");
  }
  if (exactTime > 11) {
    $("#11").attr("class", "row bg-danger");
  }
  if (exactTime < 11) {
    $("#11").attr("class", "row bg-secondary");
  }
  if (exactTime === 12) {
    $("#12").attr("class", "row bg-success");
  }
  if (exactTime > 12) {
    $("#12").attr("class", "row bg-danger");
  }
  if (exactTime < 12) {
    $("#12").attr("class", "row bg-secondary");
  }
  if (exactTime === 13) {
    $("#13").attr("class", "row bg-success");
  }
  if (exactTime > 13) {
    $("#13").attr("class", "row bg-danger");
  }
  if (exactTime < 13) {
    $("#13").attr("class", "row bg-secondary");
  }
  if (exactTime === 14) {
    $("#14").attr("class", "row bg-success");
  }
  if (exactTime > 14) {
    $("#14").attr("class", "row bg-danger");
  }
  if (exactTime < 14) {
    $("#14").attr("class", "row bg-secondary");
  }
  if (exactTime === 15) {
    $("#15").attr("class", "row bg-success");
  }
  if (exactTime > 15) {
    $("#15").attr("class", "row bg-danger");
  }
  if (exactTime < 15) {
    $("#15").attr("class", "row bg-secondary");
  }
  if (exactTime === 16) {
    $("#16").attr("class", "row bg-success");
  }
  if (exactTime > 16) {
    $("#16").attr("class", "row bg-danger");
  }
  if (exactTime < 16) {
    $("#16").attr("class", "row bg-secondary");
  }
  if (exactTime === 17) {
    $("#17").attr("class", "row bg-success");
  }
  if (exactTime > 17) {
    $("#17").attr("class", "row bg-danger");
  }
  if (exactTime < 17) {
    $("#17").attr("class", "row bg-secondary");
  }

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
