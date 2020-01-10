// image slider top of page SELECTORS
let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;
    // menu button SELECTORS
let menuIcon = document.querySelector(".menu-icon"),
    subNav = document.querySelector("#sub-nav"),
    mainText = document.querySelectorAll(".content"),
    closeBtn = document.querySelector(".exit");
    // cart button and text SELECTORS
let numberOfCartItems = document.querySelector(".cart-number"),
    cartItemsNav = document.querySelector(".cart-items-nav"),
    addToCart = document.querySelectorAll(".buyItem"),
    removeCartItem = document.querySelectorAll(".remove");
    items = 1;
    // image slider middle of page SELECTORS
let carouselSlide = document.querySelector(".carousel-slide"),
    carouselImages = document.querySelectorAll(".carousel-slide img"),
    prevBtn = document.querySelector("#prevBtn"),
    nextBtn = document.querySelector("#nextBtn"),
    counter = 1,
    size = carouselImages[0].clientWidth;
    // item sercher SELECTORS
let systemsCollection = document.querySelectorAll("#collection"),
    systemsForm = document.querySelector("#item-searcher"),
    systemsInput = document.querySelector(".systemsInput"),
    systemsListItems = document.querySelectorAll(".item");

    // menu button LOGIC
menuIcon.addEventListener("click", function(){
    subNav.classList.add("open");
    subNav.classList.remove("closed");
});

closeBtn.addEventListener("click", function(){
    subNav.classList.remove("open");
    subNav.classList.add("closed");
});

function loadEventListeners(){
    systemsInput.addEventListener("keyup", filterSystems)
};

loadEventListeners();

function filterSystems(e){
    let text = e.target.value.toLowerCase();

    document.querySelectorAll(".item").forEach(function(system){
        let item = system.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            system.style.display = "block";
        } else {
            system.style.display = "none";
        }

        if(systemsInput.value === ''){
            system.style.display = "none";
        }
    });
};

    // add to cart functionality 
addToCart.forEach((item)=> {
    item.addEventListener("click", function(){
        numberOfCartItems.textContent = items++;
        let newItem = document.createElement("li");
        newItem.classList.add("cart-item");
        cartItemsNav.appendChild(newItem);
        newItem.innerHTML = "<a href='#'>XBOX</a><button class='remove'>remove</button>";
    })
});

    // image slider top LOGIC
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = "none";
    }
};
    // initialize the image slider
function initializer(){
    reset();
    sliderImages[0].style.display = "block";
};

function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
};

arrowLeft.addEventListener("click", function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

function slideRight(){
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
};

arrowRight.addEventListener("click", function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});
    // image slider top should now function
initializer();


    // image slider middle of page LOGIC
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener("click", function(){
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener("click", function(){
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});
    // on end of every transition, check for id, if it has the id, return to beginning of HTMLcollection
carouselSlide.addEventListener("transitionend", function(){
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});