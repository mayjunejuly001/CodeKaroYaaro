// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Owl Carousel
$(document).ready(function() {
    $(".client-slider-section").owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});

//price section
// function course(module, name) {

//     if (module == "Grade 1-4") {
//         if (name == 'Starter') {

//             var course1 = 'Starter Plan';
//             var price1 = '';
//             var discount1 = '';
//             var grade = 'Grade 1-4';
//             var dis_price1 = '5788';
//             var session1 = 'For 2 Months*(3 Super Sessions Per Week)';
//         } else if (name == 'Intermediate') {
//             var course1 = 'Intermediate Plan';
//             var price1 = '';
//             var discount1 = '';
//             var grade = 'Grade 1-4';
//             var dis_price1 = '10290';
//             var session1 = 'For 4 Months*(3 Super Sessions Per Week)';
//         } else if (name == 'Professional') {
//             var course1 = 'Professional Plan';
//             var price1 = '';
//             var discount1 = '';
//             var grade = 'Grade 1-4';
//             var dis_price1 = '15434';
//             var session1 = 'For 6 Months*(3 Super Sessions Per Week)';
//         } else {
//             //  block of code to be executed if the condition1 is false and condition2 is false
//         }
//     } else if (module == 'Grade 5-7') {
//         if (name == 'Starter') {
//             var course1 = 'Starter Plan';
//             var price1 = '';
//             var discount1 = '';
//             var grade = 'Grade 5-7';
//             var dis_price1 = '5788';
//             var session1 = 'For 2 Months*(3 Super Sessions Per Week)';
//         } else if (name == 'Intermediate') {
//             var course1 = 'Intermediate Plan';
//             var price1 = '';
//             var discount1 = '';
//             var grade = 'Grade 5-7';
//             var dis_price1 = '10290';
//             var session1 = 'For 4 Months*(3 Super Sessions Per Week)';
//         } else if (name == 'Professional') {
//             var course1 = 'Professional Plan';
//             var price1 = '';
//             var discount1 = '';
//             var grade = 'Grade 5-7';
//             var dis_price1 = '15434';
//             var session1 = 'For 6 Months*(3 Super Sessions Per Week)';
//         } else {
//             //  block of code to be executed if the condition1 is false and condition2 is false
//         }
//     } else if (module == 'Grade 8-10') {
//         if (name == 'Starter') {
//             var course1 = 'Starter Plan';
//             var price1 = '';
//             var discount1 = '';
//             var grade = 'Grade 8-10';
//             var dis_price1 = '5788';
//             var session1 = 'For 2 Months*(3 Super Sessions Per Week)';
//         } else if (name == 'Intermediate') {
//             var course1 = 'Intermediate Plan';
//             var price1 = '';
//             var discount1 = '';
//             var grade = 'Grade 8-10';
//             var dis_price1 = '10290';
//             var session1 = 'For 4 Months*(3 Super Sessions Per Week)';
//         } else if (name == 'Professional') {
//             var course1 = 'Professional Plan';
//             var price1 = '';
//             var discount1 = '';
//             var grade = 'Grade 8-10';
//             var dis_price1 = '15434';
//             var session1 = 'For 6 Months*(3 Super Sessions Per Week)';
//         } else {
//             //  block of code to be executed if the condition1 is false and condition2 is false
//         }
//     } else if (module == 'Grade 10') {
//         if (name == 'Starter') {
//             var course1 = 'Starter Plan';
//             var price1 = '';
//             var discount1 = '';
//             var grade = 'Grade 10';
//             var dis_price1 = '5788';
//             var session1 = 'For 2 Months*(3 Super Sessions Per Week)';
//         } else if (name == 'Intermediate') {
//             var course1 = 'Intermediate Plan';
//             var price1 = '';
//             var discount1 = '';
//             var grade = 'Grade 10';
//             var dis_price1 = '10290';
//             var session1 = 'For 4 Months*(3 Super Sessions Per Week)';
//         } else if (name == 'Professional') {
//             var course1 = 'Professional Plan';
//             var price1 = '';
//             var discount1 = '';
//             var grade = 'Grade 10';
//             var dis_price1 = '15434';
//             var session1 = 'For 6 Months*(3 Super Sessions Per Week)';
//         } else {
//             //  block of code to be executed if the condition1 is false and condition2 is false
//         }
//     } else if (name == 'Basic') {
//         var course1 = 'Starter Course';
//         var price1 = '';
//         var discount1 = '';
//         var dis_price1 = '4250';
//         var grade = '';
//         var session1 = 'Super 8 Sessions*(1 Session Cost = Rs. 532)';
//     } else if (name == 'Starter') {
//         var course1 = 'Intermediate Course';
//         var price1 = '';
//         var discount1 = '';
//         var dis_price1 = '25133';
//         var grade = '';
//         var session1 = 'Super 48 Sessions*(1 Session Cost = Rs. 524)';
//     } else if (name == 'Yearly') {
//         var course1 = 'Professional Course';
//         var price1 = '';
//         var discount1 = '';
//         var dis_price1 = '40766';
//         var grade = '';
//         var session1 = 'Super 96 Sessions*(1 Session Cost = Rs. 424)';
//     } else {
//         //  block of code to be executed if the condition1 is false and condition2 is false
//     }

//     $.ajax({
//         type: 'GET',
//         url: 'Action/ ajax.php',
//         data: {
//             course: course1,
//             price: price1,
//             discount: discount1,
//             dis_price: dis_price1,
//             session: session1,
//             grade: grade,
//             CommandType: 'JOIN'
//         },
//         success: function(responce) {
//             if (responce == 1) {
//                 window.location.href = 'join';
//             }
//         }
//     });
// }