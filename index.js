$('.slide').each(function() {
  $(this).mouseover(function() {
      $(this).addClass('active');
    $('.stage').children('.slide').not('.active').addClass('inactive');
  });
  $(this).mouseleave(function() {
      $(this).removeClass('active');
      $('.stage').children('.slide').not('.active').removeClass('inactive');
  });
});

const animationItems = document.querySelectorAll('.item')
console.log(animationItems)
if(animationItems.length > 0){
  window.addEventListener('scroll',animationOnScroll)
  function animationOnScroll(){
    for (let index = 0; index < animationItems.length; index++) {
      const animationItemsIndex = animationItems[index];
      const animationItemsHeight = animationItemsIndex.offsetHeight;
      
      const animationItemOffset = offset(animationItemsIndex).top
      const animationStart = 4
      const animationStartEnd = 2
      let animationItemPoint = window.innerHeight - animationItemsHeight / animationStart
      animationStartEnd
      if( animationItemsHeight > window.innerHeight ){
        animationItemPoint = window.innerHeight - window.innerWidth /animationStart
        animationItemPointEnd = window.innerHeight - window.innerWidth /animationStartEnd
      }
      if((scrollY > animationItemOffset - animationItemPoint)&& scrollY < (animationItemOffset + animationItemsHeight)){
        animationItemsIndex.classList.add('--animation')
      }else{
        animationItemsIndex.classList.remove('--animation')
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  animationOnScroll()
}

let point  = document.querySelectorAll('.slider__point')

let imagesSlider = document.querySelectorAll('.images__block')

point[0].classList.add('--activeImage')
imagesSlider[0].classList.add('--activeImage')

let counter = 0;

for (let index = 0; index < point.length; index++) {
  point[index].addEventListener('click',()=>{
    for (let k = 0; k < imagesSlider.length; k++) {
      point[k].classList.remove('--activeImage')
      imagesSlider[k].classList.remove('--activeImage')
    }
    counter = index
    imagesSlider[counter].classList.add('--activeImage')
    point[counter].classList.add('--activeImage')
  })
}

let touchstartX = 0;
let touchendX = 0;

function checkDirection(){
  if(touchendX > touchstartX ){
    for (let k = 0; k < imagesSlider.length; k++) {
      point[k].classList.remove('--activeImage')
      imagesSlider[k].classList.remove('--activeImage')
    }
    if(counter === 0){
      counter = imagesSlider.length 
    }
    counter--
      imagesSlider[counter].classList.add('--activeImage')
  point[counter].classList.add('--activeImage')
  }else if(touchendX < touchstartX){
    for (let k = 0; k < imagesSlider.length; k++) {
      point[k].classList.remove('--activeImage')
      imagesSlider[k].classList.remove('--activeImage')
    }
    counter++
    if(counter>=imagesSlider.length){
      counter = 0
    }
    imagesSlider[counter].classList.add('--activeImage')
    point[counter].classList.add('--activeImage')
  }
}
const swipeSlider  = document.getElementsByClassName('slider__full')[0]




swipeSlider.addEventListener("touchstart",(e)=>{
    touchstartX = e.changedTouches[0].screenX
})
swipeSlider.addEventListener("touchend",(e)=>{
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})
setInterval(() => {
  for (let k = 0; k < imagesSlider.length; k++) {
    point[k].classList.remove('--activeImage')
    imagesSlider[k].classList.remove('--activeImage')
  }
  counter++
  if(counter>=imagesSlider.length){
    counter = 0
  }
  imagesSlider[counter].classList.add('--activeImage')
  point[counter].classList.add('--activeImage')
}, 5000);

let pointSlideAdaptive  = document.querySelectorAll('.slider--adaptive__point')
let imagesAdaptiveSlider = document.querySelectorAll('.slider--adaptive__block')

pointSlideAdaptive[0].classList.add('active')
imagesAdaptiveSlider[0].classList.add('active')
const swipeAdaptiveSlider  = document.getElementsByClassName('adaptive__img')[0]
let touchstartXAdaptiveSlider = 0;
let touchendXAdaptiveSlider = 0;

let counterAdaptiveSlider = 0;


for (let index = 0; index < pointSlideAdaptive.length; index++) {
  pointSlideAdaptive[index].addEventListener('click',()=>{
    for (let k = 0; k < imagesAdaptiveSlider.length; k++) {
      pointSlideAdaptive[k].classList.remove('active')
      imagesAdaptiveSlider[k].classList.remove('active')
    }
    counterAdaptiveSlider = index
    imagesAdaptiveSlider[counterAdaptiveSlider].classList.add('active')
    pointSlideAdaptive[counterAdaptiveSlider].classList.add('active')
  })
}

function checkDirectionAdaptiveSlide(){
  if(touchendXAdaptiveSlider > touchstartXAdaptiveSlider ){
    for (let k = 0; k < imagesAdaptiveSlider.length; k++) {
      pointSlideAdaptive[k].classList.remove('active')
      imagesAdaptiveSlider[k].classList.remove('active')
    }
    if(counterAdaptiveSlider === 0){
      counterAdaptiveSlider = imagesAdaptiveSlider.length 
    }
    counterAdaptiveSlider--
      imagesAdaptiveSlider[counterAdaptiveSlider].classList.add('active')
      pointSlideAdaptive[counterAdaptiveSlider].classList.add('active')
  }else if(touchendXAdaptiveSlider < touchstartXAdaptiveSlider){
    for (let k = 0; k < imagesAdaptiveSlider.length; k++) {
      pointSlideAdaptive[k].classList.remove('active')
      imagesAdaptiveSlider[k].classList.remove('active')
    }
    counterAdaptiveSlider++
    if(counterAdaptiveSlider >= imagesAdaptiveSlider.length){
      counterAdaptiveSlider = 0
    }
    imagesAdaptiveSlider[counterAdaptiveSlider].classList.add('active')
    pointSlideAdaptive[counterAdaptiveSlider].classList.add('active')
  }
}

swipeAdaptiveSlider.addEventListener("touchstart",(e)=>{
  touchstartXAdaptiveSlider= e.changedTouches[0].screenX
})

swipeAdaptiveSlider.addEventListener("touchend",(e)=>{
touchendXAdaptiveSlider= e.changedTouches[0].screenX
checkDirectionAdaptiveSlide()
})
