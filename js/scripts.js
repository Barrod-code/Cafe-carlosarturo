$(document).ready(function () {

    $('.navbar a').each(function (index,element) {
        $(this).css({
            top:'-200px'
        });
        $(this).animate({
            top:'0'
        },2000+(index*500));        
    });

    if ($(window).width()>800) {
        $('.name-container').css({
            opacity:0,
            paddingTop:'100px'        
        });
    
        $('.name-container').animate({
            opacity:1,
            paddingTop:'0px'
        },1500);
    }    

    function scrollTo(section) {
        $(`#btn-${section}`).on('click',function(e){
            e.preventDefault();
            $('html,body').animate({
               scrollTop: $(`#${section}`).offset().top
           },500);
        });
    }

    let retval = []
    $('.navbar a').each(function(){
        retval.push($(this).attr('id').substring(4));
        return retval
    }) 
   
    $.each(retval,function (index,value){
        scrollTo(value);
    });
 
});