$('body').scrollspy({ target: '#navbar-menu' })

$(document).ready(function() {
      $(".nav-link").on('click', function(event) {
            if (this.hash !== "") {
                  event.preventDefault();
                  var hash = this.hash;

                  $('html, body').animate({
                        scrollTop: $(hash).offset().top
                  }, 300, function(){
                        window.location.hash = hash;
                  });
            }
      });
});
