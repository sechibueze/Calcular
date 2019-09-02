var equal_check = "";


function equal_was_last_clicked() {

  //checks if the last button clicked was equal_to 

  if (equal_check !== "") {

    return true;

  } else {

    return false;
  } // -- if - else-block --

} //-- function 


function display_user_input() {

  //Before display check if equal to was clicked
  if (equal_was_last_clicked()) {

    //if true , clear the user input display screen
    //before setting the current input of the user
    document.querySelector("#display").innerHTML = "";

    //Set the current input of the user
    document.querySelector("#display").innerHTML += this.value;

    //unset equal_check
    equal_check = "";

  } else {
    // equal_was_last_clicked() was not last clicked
    //Go ahead and just set the current input of the user

    //this keyword is refers to the input object that listened 
    //and called this function
    document.querySelector("#display").innerHTML += this.value;
  }

}


function result() {
  // Fetch what the user has entered
  var user_data = document.querySelector("#display").innerHTML;
  //*** future versions will need to validate this value  ***//
  if (user_data != "" && user_data != null) {
    // evaluate the string fetched and return the evaluated value
    user_data = eval(user_data);

    // Set the evaluated value as the result 
    document.getElementById("display").innerHTML = user_data;

    // Modify equal_check value 
    // any value can be set apart from empty string "" ;
    equal_check = "Equals has been clicked, so clear data on next input";

  } else {
    // User did not enter anything but just clicked the equals button
    document.getElementById("display").innerHTML = "";

  } //-- if block --- //

} //-- function

/*** Resets the calculation   ***/
function clear_display() {

  document.querySelector("#display").innerHTML = "";
  equal_check = ""
}



















function convert_to_rad(x) {
  var x;
  return (Math.PI / 180) * x;
}
/*** Method to overload the TRIGONOMETRICAL FUNCTIONS   ***/
function sin(x) {
  var x = convert_to_rad(x);
  return Math.sin(x);
}
function asin(x) {

  return Math.asin(x);
}
function cos(x) {
  var x = convert_to_rad(x);
  return Math.cos(x);
}
function acos(x) {

  return Math.acos(x);
}
function tan(x) {
  var x = convert_to_rad(x);
  return Math.tan(x);
}
function atan(x) {
  return Math.atan(x);
}
function exp(x = 1) {

  return Math.exp(x);
}
function sqrt(x) {

  return Math.sqrt(x);
}
function log10(x) {

  return Math.log10(x);
}
function log(x) {

  return Math.log(x);
}