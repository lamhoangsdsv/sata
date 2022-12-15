$(document).ready(function(){
    if (localStorage.getItem("color-scheme")) {
        let storage = localStorage.getItem("color-scheme") || null;
        $('html').attr('data-user-color-scheme', storage);
        $('#top').removeClass().addClass('home-template-'+ storage);
    }
    // Change color background
    $(".bulb__image").click(function(){
        let color = localStorage.getItem("color-scheme")
        if (color === 'dark') {
            $('html').attr('data-user-color-scheme', 'light');
            $('#top').removeClass().addClass('home-template-light');
            localStorage.removeItem("color-scheme");
            localStorage.setItem("color-scheme", "light");
        } else {
            $('html').attr('data-user-color-scheme', 'dark');
            $('#top').removeClass().addClass('home-template-dark');
            localStorage.removeItem("color-scheme");
            localStorage.setItem("color-scheme", "dark");
        }
    });
    // Open Popup Music
    $(".button-music #btnMusic").click(function(){
        if ( $(this).parent().is(".show") ) {
            $("#popUpMusic").toggleClass('show');
          } else {
            $("#popUpMusic").toggleClass('hide');
          }

    });
    // Close Popup Music
    $("#closePopupMusic").click(function(){
        $("#popUpMusic").toggleClass('hide');
    });
});
