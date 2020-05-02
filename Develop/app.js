var date = moment().format("MMMM Do YYYY");
$("#currentDay").text(date);

var exactTime = moment().format("h");
console.log(exactTime);

//get each id attached to div rows using jquery
//make if statement

// .get id value pass to an integer "(parseInt)"
// then compare to exactTime
// if number in the div < exactTime give a class attribute of past
// if === then get the attribute of present
// if  > exactTime give a class attribute of future
