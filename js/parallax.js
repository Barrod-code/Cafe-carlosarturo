//$(document).ready(function (){
    let windowWidth = $(window).width();
    let windowHeight = $(window).height();
        $(window).resize(function(){
            windowWidth = $(window).width();
            windowHeight = $(window).height();
            if(windowWidth<=800){
                $('.about article, .name-container .cont').css(
                    {transform: `translate(0px, 0px)`}
                )
            }
        });
        $(window).scroll(function(){
            if(windowWidth>800){            
                let scroll = $(window).scrollTop();              
                $('.about article').css(
                    {transform: `translate(0px, ${-scroll/4}%)`}
                );
                $('.name-container .cont').css(
                    {transform: `translate(0px, ${scroll/3}%)`}
                );
            }
        });
//});