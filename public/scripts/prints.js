var slider = document.getElementById("page-cover");

function closeSlider(){
  slider.style.width = "0";
  slider.style.height = "0";
}

function openSlider(index){
  slider.style.width = "100%";
  slider.style.height = "100%";
}
