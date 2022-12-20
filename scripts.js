$(function(){

      $('.menu-hamburguer').on('click', function() {
        $('.nav-celular').slideToggle();
      });
      
    $('.nav-celular').click(function() {
         $(this).hide();
      });
})

alert('Site feito por Pedro Hiroshi Yoshida, para portifólio')