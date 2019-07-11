// LIBRARY CLASS
function payPaw() {
  // Add HTML code to your page
  this.template = '<div id="paypaw">' + ' <div class="class"></div>';
  document.body.innerHTML += this.template;
  // Change element styling
  document.getElementById("paypaw").style.display = "none";
  // Modify element attributes
  document.getElementById("paypaw").src = "";
  // Add listeners to elements
  document.getElementById("paypaw").addEventListener("click", this.function);


  // Add all your code here
}