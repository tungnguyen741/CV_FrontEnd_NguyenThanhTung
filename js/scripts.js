/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict


let img_project1 = document.getElementById('img_project1');
let img_project = document.querySelectorAll('.project a img');
let img_project4 = document.querySelector('.project.project-4 .header_project');
console.log(img_project);

function slipDown (item, value){
    item.style.transform = `translateY(${value})`;
    item.style.transition = "all 3.5s cubic-bezier(0.4, 0, 1, 1) 0s"
}

function sideWay (item, value1, value2){
    item.style.transform = `translateX(${value1})`;
    item.style.opacity = value2
}
img_project[0].addEventListener('mouseover',() => slipDown(img_project[0],'-83%') )
img_project[0].addEventListener('touchstart',() => slipDown(img_project[0],'-83%') )

img_project[2].addEventListener('mouseover', () => slipDown(img_project[2], '-72.5%') ) ;
img_project[2].addEventListener('touchstart', () => slipDown(img_project[2], '-72.5%') ) ;

img_project[3].addEventListener('mouseover', () => slipDown(img_project[3], '-60%') ) ;
img_project[3].addEventListener('touchstart', () => slipDown(img_project[3], '-60%') ) ;

img_project[4].addEventListener('mouseover', () => slipDown(img_project[4], '-60%') ) ;
img_project[4].addEventListener('touchstart', () => slipDown(img_project[4], '-60%') ) ;

img_project[8].addEventListener('mouseover', () => slipDown(img_project[8], '-89%') ) ;
img_project[8].addEventListener('touchstart', () => slipDown(img_project[8], '-89%') ) ;

 

setInterval(() => {
    if(img_project[6].getAttribute('class') == 'show'){
        setTimeout(() => {
            img_project[6].classList.add('hidden');
            img_project[6].classList.remove('show');
        }, 0);
        setTimeout(() => {
            img_project[5].classList.add('show');
            img_project[5].classList.remove('hidden');
        }, 0);
    }
    if(img_project[5].getAttribute('class') == 'show' ){
        setTimeout(() => {
            img_project[5].classList.add('hidden');
            img_project[5].classList.remove('show');
        }, 0);
        setTimeout(() => {
            img_project[7].classList.add('show');
            img_project[7].classList.remove('hidden');
        }, 0);
    }
    if(img_project[7].getAttribute('class') == 'show' ){
        setTimeout(() => {
            img_project[7].classList.remove('show');
            img_project[7].classList.add('hidden');
        }, 0);
        setTimeout(() => {
            img_project[6].classList.add('show');
            img_project[6].classList.remove('hidden');
        }, 0);
    }
}, 3000);
    

 
      
 

 
//  addEventListener('touchend')
for(let i =0; i < img_project.length  ; i++){
    img_project[i].addEventListener('mouseleave',() => {
        img_project[i].style.transform = "translateY(0)";
        img_project[i].style.transition = "all 2s cubic-bezier(0.4, 0, 1, 1) 0s"
    })
    img_project[i].addEventListener('touchend',() => {
        img_project[i].style.transform = "translateY(0)";
        img_project[i].style.transition = "all 2s cubic-bezier(0.4, 0, 1, 1) 0s"
    })
}