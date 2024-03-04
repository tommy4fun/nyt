"use strict"

const carousel = document.querySelector('.image-carousel');
var widowSize = window.outerWidth;

let countNext = 0;
let countPrev = 4;
//Let's redistribute the photos to the required positions, calculating the width and margin of the photo.
if(widowSize <= 650){
    for(let i = 1; i < 6; i++){
        // Create img element
        let createdImg = document.createElement("img");
        
        // Set attributes for the img element
        createdImg.className = `slide`;
        createdImg.style.width = `${270}px`;
        createdImg.style.marginLeft = `${7.5}px`;
        createdImg.style.marginRight = `${7.5}px`;
        createdImg.src = `assets/image-slide-${i}.jpg`;
        createdImg.alt = `slide-${i}`;
        
        // Append the img element to the carousel
        carousel.appendChild(createdImg);
    }
}else{
    for(let i = 1; i < 6; i++){
        // Create img element
        let createdImg = document.createElement("img");
        
        // Set attributes for the img element
        createdImg.className = `slide`;
        createdImg.style.width = `${540}px`;
        createdImg.style.marginLeft = `${15}px`;
        createdImg.style.marginRight = `${15}px`;
        // createdImg.style.transition = "width 0.3s";
        createdImg.src = `assets/image-slide-${i}.jpg`;
        createdImg.alt = `slide-${i}`;
        
        // Append the img element to the carousel
        carousel.appendChild(createdImg);
    }
}

const images = document.querySelectorAll('.slide');

// used to change zoom and margins of photos for responsive design
window.addEventListener("resize", ()=>{
    widowSize = window.outerWidth;
    if(widowSize <= 650){
        images.forEach((element) => {
            element.style.width = `${270}px`;
            element.style.marginLeft = `${7.5}px`;
            element.style.marginRight = `${7.5}px`;
        });
    }else{
        images.forEach((element) => {
            element.style.width = `${540}px`;
            element.style.marginLeft = `${15}px`;
            element.style.marginRight = `${15}px`;
        });
    }
})

const next = () => {
    // to find out which photo we are talking about
    
    var sec_three = document.querySelector('.sec_three');
    
    

    if(!sec_three.classList.contains('scrolling')){
        sec_three.classList.add('scrolling');
        countPrev = countNext;
        carousel.style.justifyContent = `flex-start`;
        let removedElement = images[countNext];
        images[countNext].style.width = `${0}px`;

        images[countNext].style.marginLeft = `${0}px`;
        images[countNext].style.marginRight = `${0}px`;

        // wait 0.3 seconds for the first resized image to finish resizing
        setTimeout(()=>{
            carousel.appendChild(removedElement);
            if(widowSize <= 650){
                images[countNext].style.width = `${270}px`;
                images[countNext].style.marginLeft = `${7.5}px`;
                images[countNext].style.marginRight = `${7.5}px`;
            }else{
                images[countNext].style.width = `${540}px`;
                images[countNext].style.marginLeft = `${15}px`;
                images[countNext].style.marginRight = `${15}px`;
            }

            if(countNext == 4){
                countNext = 0;
            }else{
                countNext++;
            }
            sec_three.classList.remove('scrolling');
        },300);
    }
    

    
}


const prev = () => {
    // to find out which photo we are talking about
    
    var sec_three = document.querySelector('.sec_three');
    if(!sec_three.classList.contains('scrolling')){
        sec_three.classList.add('scrolling');
        countNext = countPrev;

        carousel.style.justifyContent = `flex-end`;
        let removedElement = images[countPrev];
        images[countPrev].style.width = `${0}px`;

        images[countPrev].style.marginLeft = `${0}px`;
        images[countPrev].style.marginRight = `${0}px`;

        // wait 0.3 seconds for the first resized image to finish resizing
        setTimeout(()=>{
            carousel.insertBefore(removedElement, carousel.children[0]);
            if(widowSize <= 650){
                images[countPrev].style.width = `${270}px`;
                images[countPrev].style.marginLeft = `${7.5}px`;
                images[countPrev].style.marginRight = `${7.5}px`;
            }else{
                images[countPrev].style.width = `${540}px`;
                images[countPrev].style.marginLeft = `${15}px`;
                images[countPrev].style.marginRight = `${15}px`;
            }

            if(countPrev == 0){
                countPrev = 4;
            }else{
                countPrev--;
            }
            sec_three.classList.remove('scrolling');
        },300)
    }

}
