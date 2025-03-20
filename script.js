$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,                    // Enable looping of the carousel
        margin: 10,                    // Space between slides
        nav: true,                     // Show navigation arrows
        autoplay: true,                // Enable autoplay
        autoplayTimeout: 5000,         // Time for each slide (in ms)
        responsive: {
            0: {
                items: 1             // Show 1 item on screens smaller than 600px
            },
            600: {
                items: 1             // Show 1 item on screens between 600px and 1000px
            },
            1000: {
                items: 1             // Show 1 item on larger screens (1000px and up)
            }
        }
    });
});


// Mobile Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
