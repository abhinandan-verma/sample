import Swiper from 'swiper'


document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const btn = item.querySelector('.accordion-btn');
    const content = item.querySelector('.accordion-content');
    btn.addEventListener('click', function() {
      content.classList.toggle('show');
      btn.querySelector('.chevron').classList.toggle('rotate');
    });
  });
});


function handleMenu(){
    var menu = document.getElementById("menu");
    if(menu.style.display === "none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }

    console.log("Menu clicked");
}


    // var swiper = new Swiper(".slide-content", {
    //   slidesPerView: 3,
    //   spaceBetween: 25,
    //   loop: true,
    //   centerSlide: true,
    //   fade: true,
    //   grabCursor: true,
    //   loopFillGroupWithBlank: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   autoplay: {
    //     delay: 3000, // Adjust the delay in milliseconds (5 seconds in this example)
    //   },
    //   breakpoints: {
    //     0: {
    //       slidesPerView: 1,
    //     },
    //     520: {
    //       slidesPerView: 2,
    //     },
    //     950: {
    //       slidesPerView: 4,
    //     },
    //   },
    // });


