var navheight = $("#navigation").height()
console.log(navheight)
$(window).scroll(function() {
    if ($(this).scrollTop() > navheight){  
        $('body').addClass("sticky");
    }
    else{
        $('body').removeClass("sticky");
    }
});