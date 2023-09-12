const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
    
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;
    
    
    tabItem.forEach(function(item){
        item.classList.remove('tabs__active-btn');
    });
    
    tabTarget.classList.add("tabs__active-btn");
    
    tabContent.forEach(function(item){
        item.classList.remove('tabs__active-content');
    });
    
    document.querySelector(`#${button}`).classList.add('tabs__active-content');
    
}



const swiper = new Swiper(".swiper", {
                effect: "fade",  
      pagination: {
        el: ".swiper-pagination",
      },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });