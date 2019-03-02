var checkoutPanel = document.getElementById("checkout-panel");
var shippingPanel = document.getElementById("shipping-panel");

checkoutPanel.style.height = "auto";

function showAddress(){
  checkoutPanel.style.height = "0";
  shippingPanel.style.height = "auto";
}
