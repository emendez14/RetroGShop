let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;
let menuIcon = document.querySelector(".menu-icon"),
    subNav = document.querySelector("#sub-nav");

menuIcon.addEventListener("click", function(){
    
})

function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = "none";
    }
}

function initializer(){
    reset();
    sliderImages[0].style.display = "block";
}

function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

arrowLeft.addEventListener("click", function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
})

function slideRight(){
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

arrowRight.addEventListener("click", function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
})

initializer();