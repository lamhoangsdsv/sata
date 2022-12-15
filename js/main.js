$(document).ready(function(){
    const audio = document.querySelector('audio');
    const playIconContainer = document.getElementById('play-icon');
    let playState = 'play'
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
        if(playState === 'play') {
            wavesurfer.play();
            $("#play-icon").attr('src',"./images/pause.png")
            playState = 'pause';
        } else {
            wavesurfer.pause();
            $("#play-icon").attr('src',"./images/play.png")
            playState = 'play';
        }

    });
    // Close Popup Music
    $("#closePopupMusic").click(function(){
        $("#popUpMusic").toggleClass('hide');
    });
    // Remove element have class is hide-sp
    console.log('window.innerWidth: ', window.innerWidth)
    if (window.innerWidth < 768) {
        $(".hide-sp").remove()
    }
    //Open question
    $("#startQuestion").click(function() {
        $(".question").slideToggle('slow');
        if ($(this).html() =='Đóng') {
            $(this).html('Mở câu hỏi');
        } else {
            $(this).html('Đóng');
        }
    });
    $("#startQuestionPC").click(function() {
        $(".question").slideToggle('slow');
        if ($(this).html() =='Đóng') {
            $(this).html('Mở câu hỏi');
        } else {
            $(this).html('Đóng');
        }
    });
    playIconContainer.addEventListener('click', () => {
        if(playState === 'play') {
            wavesurfer.play();
            playState = 'pause';
            $("#play-icon").attr('src',"./images/pause.png")
        } else {
            wavesurfer.pause();
            $("#play-icon").attr('src',"./images/play.png")
            playState = 'play';
        }
    });
    $("#btnHint").click(function() {
        $(".mess-hint").toggle();
    });
});
$(document).on('click', '#btnHintSp', function() {   $(".mess-hint").toggle(); });
