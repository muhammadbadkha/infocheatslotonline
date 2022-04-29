function adjustMainBgHeight() {
    var imgWidth = 1200;
    var imgHeight = 620;
    var img = $('.tm-main-bg');
    var currentWidth = img.width();
    var currentHeight = (currentWidth * imgHeight) / imgWidth;
    
    img.css('height', currentHeight);
}

$(document).ready(function(){
    adjustMainBgHeight();
    
    $(window).resize(function() {
        adjustMainBgHeight();
    });
    
    // Mobile menu
    $('.tm-mobile-menu').click(function() {
      $('.tm-nav').toggleClass('show');
    });
});