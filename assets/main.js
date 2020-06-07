// Using arguments
// new Date(2020, 5, 7, 10, 52)
// Year: 4-digit year.
// Month: Month of the year (0-11). Month is zero-indexed. Defaults to 0 if omitted.
// Day: Day of the month (1-31). Defaults to 1 if omitted.
// Hour: Hour of the day (0-23). Defaults to 0 if omitted.
// Minutes: Minutes (0-59). Defaults to 0 if omitted.
// Seconds: Seconds (0-59). Defaults to 0 if omitted.
// Milliseconds: Milliseconds (0-999). Defaults to 0 if omitted.

// Set the date we're counting down to
const countStartDate = new Date("Nov 1, 2019").getTime();
const countYearStart = new Date ("Jan 1, 2019").getTime();


// Update the count down every 1 second
const x = setInterval(function() {

  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = now - countYearStart + countYearStart - countStartDate;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id
  document.getElementById("countup").innerHTML = days + " days" //  + hours + " hours " + minutes + " mins " + seconds + "s "
  ;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countup").innerHTML = "EXPIRED";
  }
}, 1000);

