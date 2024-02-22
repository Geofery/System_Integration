console.log(new Date());

console.log(Date());

console.log(Date.now());
//Seconds since January 1st 1970

//ISO 8601
//INTL for date format. 

const date = new Date();

const danishDate = new Intl.DateTimeFormat("da-dk").format(date);
console.log(danishDate);

const americanDate = new Intl.DateTimeFormat("en-us").format(date);
console.log(americanDate);

//UTC for date time standard, to make sure everything is running and being calculated from the same timezone. 


//System integration ISO 9126

//ISO 9001 quality systems

//ISO 8402 Quality management