$(document).ready(function() {
  // Manejar clic en el botón del menú
  $('.menu-btn').click(function() {
    $('.sidebar').toggleClass('active');
    $('.main-content').toggleClass('active');
  });

  // Manejar clic en los enlaces de menú y submenú
  $('.menu > ul > li > a').click(function (e) {
    // Si el enlace tiene un `data-content`, muestra el contenido
    var contentId = $(this).data('content');
    if (contentId) {
      $('.content-section').removeClass('active');
      $('#' + contentId).addClass('active');
    }

    // Manejo de la visibilidad de los sub-menús
    $(this).parent().siblings().removeClass("active");
    $(this).parent().siblings().find("ul").slideUp(); // Oculta otros sub-menús
    $(this).parent().toggleClass("active");
    $(this).parent().find("ul").slideToggle(); // Muestra u oculta el sub-menú

    $(this).parent().siblings().find("ul").find("li").removeClass("active");
  });

  // Manejar el clic en los enlaces del navbar
  $('.navbar-links a').click(function (e) {
    // Quita el comportamiento por defecto
    // e.preventDefault(); // Eliminar esta línea para permitir navegación de enlaces

    // Si el enlace tiene un href con una id de contenido
    var contentId = $(this).attr('href').substring(1); // Quita el `#` para obtener el id
    if (contentId) {
      $('.content-section').removeClass('active');
      $('#' + contentId).addClass('active');

      // Manejo de la visibilidad de los sub-menús en el sidebar
      $('.menu > ul > li').removeClass('active');
      $('.menu .sub-menu').slideUp(); // Oculta todos los sub-menús
    }
  });

  // Mostrar el contenido de inicio por defecto
  $('#home').addClass('active');
});
