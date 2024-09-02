var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  window.addEventListener("scroll",function(){
    if(window.scrollY > 0){
      document.querySelector('nav').style.backgroundColor="black"
    }
    else{
      document.querySelector('nav').style.backgroundColor="transparent"
    }
  })

  document.querySelector("#menu-button").addEventListener("click",function(){
    document.querySelector("#mobileMenu").classList.toggle('sidbar')
    document.querySelector("#contant").classList.toggle('hide-contant')
  })
   
  window.addEventListener("load", function(){
    document.querySelector(".loaderBackground").style.display='none'
  })
 
  AOS.init();
