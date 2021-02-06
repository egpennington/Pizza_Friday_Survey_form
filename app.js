/* This script displays a greeting to the user based upon the current time.
It is an example from Javascript & jQuery book */

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
