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

    scrollTo('about');
    scrollTo('menu');
    scrollTo('gallery');
    scrollTo('location');
    scrollTo('social-cancer');

    let test0 = $('.navbar a');
    let test = $('.navbar a').map(element=>element.id);
    console.log(test0[0].id,test0[1].id)
    //let test2 = test.map(element=>element.id);
    console.log(test0);
    console.log(Object.values(test));
    console.log(test);
    let test2 = test.each(element => {
        element.substring(10);
    });
    console.log(test2);

    let retval = []
    $('.navbar a').each(function(){
        retval.push($(this).attr('id'))
    })
    return retval
    console.log(retval);

});