const sliderWrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

/*changing slides*/
menuItems.forEach((item, index)=>{
  item.addEventListener('click', ()=>{
    sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
  }

  )
});

