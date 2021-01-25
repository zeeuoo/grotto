$(document).ready(function() {

//sgv color
$(".st0").css("fill", "#fff");


/*main slide*/
var swiper = new Swiper('.visual', {
    spaceBetween: 30,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    }, 
});


/*visual scroll*/
$('a.scroll').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$("#main").offset().top}, 400);
});


/*chef swiper*/
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


/*wine popup html*/
for(i=0; i<2; i++){
    var defultContTxt = $(".wine .contents .wine-wrap .option").eq(i).children("div.txt").html();
    var dataNum = $(".popup_wine").attr("data-num");
    var j = i+1;
    
    if(dataNum == j){
       $("#popup_wine"+j+" .txt").html(defultContTxt);
       }
}

/*wine list popup*/
    $(".option.list").on("click", function(){
    alert ("상담시 와인리스트를 요청해주세요!");
});


/*web reservation popup html*/
if($(window).width() > 991) { 
    var reservMCont = $('.reservation .contents p');
    var reservWPop = $('#popup_reserv p.web');
    reservWPop.html(reservMCont);    
} 


/*mobile menu tab*/
if($(window).width() <991) { 
    $('.tabs button:first').addClass('active');
    $('.tabcontent .option').hide();
    $('.tabcontent .option:first').show();
    //add selector css
    var activeItem = $('.tabs .active');
    $('.tabs .selector').css({
        "left": activeItem.position.left + "%", 
    });

    $('.tabs button').on('click', function(e){
        e.preventDefault();
        //모든 컨텐츠 숨김 후 인덱스에 맞게 클래스 추가
        var idx = $('.tabs button').index(this); 
        $('.tabcontent .option').hide();
        $('.tabcontent .option').eq(idx).show();
        $('.tabs button').removeClass('active');
        $(this).addClass('active');
        //add selector css
        var itemPos = $('.tabs .active').position();
        $('.tabs .selector').css({"left": itemPos.left + "px"});
});
}


/*mobile reservation*/
if($(window).width() <991) { 
    //버튼 위치 이동
    $('.reserv-button').appendTo($('.cont-wrap'));
    
    //scroll event
    $(window).scroll(function(){
        var currentHeight = $(this).scrollTop() + $(this).height(); //현재 컨텐츠의 총 높이(스크롤 값 포함)
        var fixBtn = $('.reserv-button.mobile').offset().top ; //고정된 버튼의 top 값
        var floatBtn = $('.reserv-button.fix'); //떠있는 버튼

        if (currentHeight >= fixBtn){
         $(floatBtn).fadeOut('fast');
        } else {
        $(floatBtn).fadeIn('fast');
        }
    }); 
}   


/*footer mobile*/
if($(window).width() < 991) { 
    $('#footer .contact a.kakao span').html('카카오톡 <em><a href="http://pf.kakao.com/_xcxbiFK/chat">@그로토</a></em> 채널 추가하고 자세한 상담 받아보세요.');
}

    
})