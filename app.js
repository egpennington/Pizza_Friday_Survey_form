// found this funny greeting script online
//Time of day message script- by javascriptkit.com
//Visit JavaScript Kit (http://javascriptkit.com) for script
//Credit must stay intact for use

var Digital=new Date()
var hours=Digital.getHours()

//Configure message below to your own.
if (hours>=5&&hours<=11) //MESSAGE FOR MORNING
document.write('<b>Welcome to our site. Good morning visitor.</b>')
else if (hours==12) //MESSAGE FOR NOON
document.write('<b>It is high noon. Thanks for dropping by!</b>')
else if (hours>=13&&hours<=17) //MESSAGE FOR AFTERNOON
document.write('<b>Good afternoon, and thanks for visiting.</b>')
else if (hours>=18&&hours<=20) //MESSAGE FOR EVENING (6pm-8pm)
document.write('<b>Good evening. Hope you\'re enjoying the gentle breeze</b>')
else if (hours>=21&&hours<=11) //MESSAGE FOR NIGHT (9pm-11pm)
document.write('<b>Glad to see you this time of the night.</b>')
else //MESSAGE FOR LATE NIGHT, EARLY MORNING (12pm-4am)
document.write('<b>Wow, thanks for choosing to visit our site over sleep!</b>')

/* This script displays a greeting to the user based upon the current time.
It is an example from Javascript & jQuery book

var today = new Date();            // Create a new date object
var hourNow = today.getHours();    // Find the current hour
var greeting;

// Display the appropriate greeting based on the current time
if (hourNow > 18) {
    greeting = 'Good Morning!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}
document.write(greeting);
*/



/* javascript for Pizza Friday Survey form
   code from Formspree website.  This js code downloaded from website.
   coded to stay on page and not go to the website after submitting.
   There is a bug that need fixed.

  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    //var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }  */
