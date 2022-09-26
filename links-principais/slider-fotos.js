$(function(){
  $(".your-class1").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('#prev-l-l'),
    nextArrow: $('#prev-l-h')
  })

  $(".your-class2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('#prev-l-l2'),
    nextArrow: $('#prev-l-h2')
  })
})