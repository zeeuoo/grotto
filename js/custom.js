$(document).ready(function() {

/*비주얼 스크롤 버튼*/
$('a.scroll').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$("#main").offset().top}, 400);
});

/*tooltip*/
$('.tooltip').delay(3000).fadeOut();  

/*chef swiper web*/
var swiper = new Swiper('.swiper1', {
    // Default parameters
    slidesPerView: 'auto',
    spaceBetween: 40,
    grabCursor: true,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        991: {
            spaceBetween: 40, 
        }
    }
});


/*chef profile load*/
$('#popupWrap').load('profile.html');

    
/*process toggle menu*/
$(".process .title").click(function(){
    $(this).next(".contents").slideToggle(100);
    $(this).toggleClass('active');
});


/*menu tab mobile*/
if($(window).width() <991) { 
    $('.tabs button:first').addClass('active');
    $('.tabcontent .option').hide();
    $('.tabcontent .option:first').show();

    $('.tabs button').on('click', function(e){
        e.preventDefault();
        //모든 컨텐츠 숨김 후 인덱스에 맞게 클래스 추가
        var idx = $('.tabs button').index(this); 
        $('.tabcontent .option').hide();
        $('.tabcontent .option').eq(idx).show();
        $('.tabs button').removeClass('active');
        $('.tabs button').eq(idx).addClass('active');
    });
}


/*mobile reservation*/
if($(window).width() <991) { 
    //버튼 위치 이동
    $('.reserv-button').appendTo($('.cont-wrap'));
    
    //scroll event
    $(window).scroll(function(){
        var currentHeight = $(this).scrollTop() + $(this).height(); //현재 컨텐츠의 총 높이(스크롤 값 포함)
        var fixBtn = $('.reserv-button.mobile').offset().top; //고정된 버튼의 top 값
        var floatBtn = $('.reserv-button.fix'); //떠있는 버튼

        if (currentHeight >= fixBtn){
         $(floatBtn).fadeOut('fast');
        } else {
        $(floatBtn).fadeIn('fast');
        }
    }); 
}                      


/*footer mobile*/
if($(window).width() <991) { 
    $('#footer .contact a.kakao span').html('카카오톡 <em><a href="http://pf.kakao.com/_xcxbiFK/chat">@그로토</a></em> 채널 추가하고 자세한 상담 받아보세요.');
}
   
/*cursor
$(window).mousemove(function(event){
    $(".cursor").css({ left: event.pageX - 40 , top: event.pageY -40 });
});*/

})