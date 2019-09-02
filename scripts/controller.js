//***** Fetch All User Input Buttons
var calc_num_button = document.querySelectorAll(".user_input");

//**** Loop through and bind each to an event hanlder
for (var i = 0; i < calc_num_button.length; i++) {

  // Add an eventListener to listen to click events
  calc_num_button[i].addEventListener("click", display_user_input, false);
}

document.querySelector("#clear").addEventListener("click", clear_display, false);


document.calculator.equal.onclick = result;