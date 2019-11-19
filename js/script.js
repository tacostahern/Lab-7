function init(){
//add your javascrip between these two lines of code
  var input = document.getElementById("entryinput")
  var button = document.getElementById("entrybutton")
  
  button.addEventListener("click", function()
  {
    alert(input)
  });
}
window.addEventListener('load', init);
