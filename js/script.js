function init(){
//add your javascrip between these two lines of code
  var input;
  var button = document.getElementById("entrybutton");
  var h2 = document.getElementById("textoutput");
  button.addEventListener("click", function()
  {
    input = document.getElementById("entryinput").value;
    alert(input);
  });
}
window.addEventListener('load', init);
