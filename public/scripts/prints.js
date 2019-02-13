var slider = document.getElementById("page-cover");
var sliderImages = document.getElementsByClassName("slider-image");
var sliderIndex;

function openSlider(index){
  slider.style.height = "100%";
  sliderIndex = index;
  updateSlider();
}

function closeSlider(){
  slider.style.height = "0";
}

function previousSlide(){
  sliderIndex--;
  if(sliderIndex < 0) sliderIndex += sliderImages.length;
  updateSlider();
}

function nextSlide(){
  sliderIndex++;
  if(sliderIndex > sliderImages.length - 1) sliderIndex -= sliderImages.length;
  updateSlider();
}

function updateSlider(){
  for(var i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.width = "0";
  }

  sliderImages[sliderIndex].style.width = "100%";
}
