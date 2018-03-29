(function(document){
    //Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
         $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 57
    });

    // Collapse Navbar
    const navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    //logo changes color
    $(window).scroll(function() {
        let logo = $('a.navbar-brand > div');
        let scroll = $(this).scrollTop();

        if (scroll > 100) {
                logo.addClass('logo-color').fadeIn('slow');

        } else {
                logo.removeClass('logo-color').fadeIn('slow');
        }
    });

    //skill bar progress
    const _bars = [].slice.call(document.querySelectorAll('.progress-bar'));

    _bars.map(function (bar, index) {
        //animate the progress bar
        setTimeout(function () {
            bar.style.width = bar.dataset.percent;
            //cascadian progress
        }, index * 1000);
    });

})(document);


