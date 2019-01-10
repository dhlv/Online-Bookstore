
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imageslider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function Check(form) {

    if(document.getElementById("name").value ==""||document.getElementById("email").value==""||document.getElementById("phone").value==""||document.getElementById("comment").value==""){
            alert("Your input cannot be empty ~");          
    }
    
    else {
            alert("We've heard from you, thank you !");
    }
}

  function block(oEvent){
   if(window.event)
    oEvent=window.event;
   if(oEvent.button==2)
    alert("Right click disabled!");
  }
  document.onmousedown=block;


function checkMobile(s){  
    var length = s.length;  
    if(length == 10 && /^((([0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|)+\d{8})$/.test(s) )   
    {   
        return true;   
    }else{   
        return false;   
    }   
}   

