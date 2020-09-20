const moment = require('moment');


//Format 
// console.log("ISO")
// console.log(now.format());

// console.log("\nTime")
// console.log(now.format("HH:mm:ss"));
// console.log(now.format("h:mm:ss a"));

// console.log("\nDate")
// console.log(now.format("dddd, MMMM Do YYYY"));
// console.log(now.format("DD-MM-YYYY"));




//Tính khoảng thời gian các giữa 2 thời điểm
// let d1 = moment('2018-06-12');
// let d2 = moment('2018-06-28');

// let days = d2.diff(d1, 'days');
// console.log(`Difference in days: ${days}`);

// let hours = d2.diff(d1, 'hours');
// console.log(`Difference in hours: ${hours}`);


//Công,trừ  thời gian 
// let now = moment();
// console.log(`Now: ${now.format('ll')}`);

// now.add('3', 'days');
// console.log(`Adding three days: ${now.format('ll')}`);

// now.subtract('2', 'years');
// console.log(`Subtracting 2 years: ${now.format('ll')}`);

//Tách các tham số trong thời gian
// let now = moment();

// let year = now.get('year');
// let month = now.get('month');  // 0 to 11
// let date = now.get('date');
// let hour = now.get('hour');
// let minute = now.get('minute');
// let second = now.get('second');
// let millisecond = now.get('millisecond');

// console.log("Year: " + year);
// console.log("Month: " + month);
// console.log("Date: " + date);
// console.log("Hour: " + hour);
// console.log("Minute: " + minute);
// console.log("Second: " + second);
// console.log("Millisecond: " + millisecond);

// let now = moment();

// console.log("Day of week: " + now.weekday());
// console.log("Day of month: " + now.date());
// console.log("Day of year: " + now.dayOfYear()); 

// let day = moment().startOf('year');
// let now = moment();

// let days = now.diff(day, 'days');

// console.log(`${days} have passed since the start of the year.`);

// let val = moment().endOf('day');
// let mins = val.diff(now, 'minutes');

// console.log(`The day will end in ${mins} minutes.`);

// let day2 = moment("2028-12-20")
// let diff = day2.fromNow();

// console.log(`The day will come ${diff}.`);

//Chuyển đổi milisecond
// let unixTime = moment().unix();
// console.log(unixTime);

// let unixTime2 = moment();
// console.log(unixTime2.format('DD-MM-YYYY'));


//Chuyển đồi định dạng ngày
let day = "03/04/2008";
let parsed = moment(day, "DD/MM/YYYY");

console.log(parsed.format('ll'));