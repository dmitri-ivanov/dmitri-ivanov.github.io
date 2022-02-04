$(document).ready(function(){
    $('.main_button a').click((event)=>{
        event.preventDefault();
    });  
    let myCarousel = document.querySelector('#carouselExampleCaptions');
    let carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000
    })
})
