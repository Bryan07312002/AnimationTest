const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const left = document.querySelector('.carousel_button--left');
const right = document.querySelector('.carousel_button--right');
const dotNav = document.querySelector('.carousel_nav');
const dot = Array.from(dotNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;


//Set slides next to one another
slides.forEach((slide, index) => {
    slide.style.left = slideWidth*index + 'px';
});

//Next slide
right.addEventListener('click',e =>{
    let currentSlide = track.querySelector('.current-slide')
    let nextSlide = currentSlide.nextElementSibling
    if(!currentSlide.nextElementSibling) nextSlide = slides[0] // check if is the last slide avaliable

    moveToSlide(nextSlide)
})

//Previous slide
left.addEventListener('click',e=>{
    let currentSlide = track.querySelector('.current-slide')
    let prevSlide = currentSlide.previousElementSibling
    
    if(slides.findIndex(slide => slide === prevSlide) === -1) prevSlide = slides[slides.length -1]
    moveToSlide(prevSlide)
})

//Target by dot
dotNav.addEventListener('click', e => {
    if(!e.target.closest('button')) return

    let dotIndex = dot.findIndex(dot => dot === e.target.closest('button'))
    
    moveToSlide(slides[dotIndex])
})

//Moves to slide target
function moveToSlide(targetSlide){
    let currentSlide = track.querySelector('.current-slide')
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')

    dotNav.querySelector('.current-slide').classList.remove('current-slide')
    dot[slides.findIndex(slide => slide === targetSlide)].classList.add('current-slide')
}


