$(document).ready(function() {

/*sgv color*/
$(".st0").css("fill", "#fff");

/*tooltip*/
$('.tooltip').delay(4000).fadeOut(); 

/*main slide*/
var swiper = new Swiper('.visual', {
    spaceBetween: 30,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 3000,
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

/*footer load*/
$('#footer').load('footer.html');


/*cusor*/
    
//defalt
$(window).mousemove(function(e){
    gsap.to(".cursor", {duration: 0.4, left: e.pageX -40, top: e.pageY -40});            
});
    
    
//link hover
$(".reserv, .scroll").hover(function(){
        $(".cursor").addClass('link');    
    }, function(){
        $(".cursor").removeClass('link');
});   
    
//text
$("h1, .slogan, .story, .faq, .instagram, .tel, h2.title, #popupWrap, #popup_wine1, #popup_wine2, .kakao, #popup_reserv, #footer").hover(function(){
        $(".cursor").addClass('text');    
    }, function(){
        $(".cursor").removeClass('text');
});  
    
    
//drag
$(".swiper1").hover(function(){
        $(".cursor").addClass('drag');    
        $(".cursorDrag").addClass('on');    
    }, function(){
        $(".cursor").removeClass('drag');
        $(".cursorDrag").removeClass('on');
});  

$(".swiper1 button").hover(function(){
        $(".cursor").addClass('text');    
        $(".cursor").removeClass('drag');
        $(".cursorDrag").removeClass('on');
    }, function(){
        $(".cursor").removeClass('text');
        $(".cursor").addClass('drag');
        $(".cursorDrag").addClass('on');
}); 

//click
$(".wine .contents .option.promotion").hover(function(){
        $(".cursor").addClass('click');    
        $(".cursorClick").addClass('on');    
    }, function(){
        $(".cursor").removeClass('click');
        $(".cursorClick").removeClass('on');
});          
    
})
