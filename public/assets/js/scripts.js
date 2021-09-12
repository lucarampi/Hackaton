//Start function Jquery scroll 400px 

    $(window).scroll((function(){
    
        if ($(window).scrollTop() > 400) {
            $('.scroll-to-top').show();
        } else {
            $('.scroll-to-top').hide();
        }

        if ($(window).scrollTop() > 700) {
            console.log($("#firula")[0])
            $("#firula")[0].style.backgroundColor="white";
        } else {
            $("#firula")[0].style.backgroundColor="transparent";
        }

}));

//End function Jquery scroll 400px 






