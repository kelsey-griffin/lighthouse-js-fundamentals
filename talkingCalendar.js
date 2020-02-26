let talkingCalendar = function(date) {
  let year = date.substring(0,4);
  let month = date.substring(5,7);
  let day = date.substring(8,10);
  
  // months
  if (month === "01") {
    month = "January";
  } else if (month === "02") {
    month = "February";
  } else if (month === "03") {
    month = "March";
  } else if (month === "04") {
    month = "April";
  } else if (month === "05") {
    month = "May";
  } else if (month === "06") {
    month = "June";
  } else if (month === "07") {
    month = "July";
  } else if (month === "08") {
    month = "August";
  } else if (month === "09") {
    month = "September";
  } else if (month === "10") {
    month = "October";
  } else if (month === "11") {
    month = "November";
  } else if (month === "12") {
    month = "December";
  } else {
    month = "invalid month";
  };

  //remove starting 0 on single digit days
  if (day[0] === "0") {
    day = day[1];
  };

  // day suffix e.g. th, nd, st
  if (day[day.length-1] === 1) {
    day += "st";
  } else if (day[day.length-1] === 2) {
    day += "nd";
  } else if (day[day.length-1] === 3) {
    day += "rd";
  } else {
    day += "th";
  };

  return month + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
