
//ハンバーガーメニュー
$('.p-header__link--hamburger').on('click',function(){
  $(this).toggleClass('active');
  $('.p-hamburger-menu').fadeToggle();
});
$('.p-hamburger-menu__close').on('click',function(){
  $('.p-header__link--hamburger').removeClass('active');
  $('.p-hamburger-menu').fadeOut();
});
$('.p-hamburger-menu__anchor-link a[href="#reform"]').on('click',function(){
  $('.p-header__link--hamburger').removeClass('active');
  $('.p-hamburger-menu').fadeOut();
});
$('.p-hamburger-menu__anchor-link a[href="#event"]').on('click',function(){
  $('.p-header__link--hamburger').removeClass('active');
  $('.p-hamburger-menu').fadeOut();
});
$('.p-hamburger-menu__anchor-link a[href="#present"]').on('click',function(){
  $('.p-header__link--hamburger').removeClass('active');
  $('.p-hamburger-menu').fadeOut();
});
$('.p-hamburger-menu__anchor-link a[href="#contact"]').on('click',function(){
  $('.p-header__link--hamburger').removeClass('active');
  $('.p-hamburger-menu').fadeOut();
});


// 画面をスクロールをしたら追従バナー表示
$(window).scroll(function (){
  var scroll = $(window).scrollTop();
  if (scroll >= 200){
    $('.p-bottomFix').fadeIn();
  }else{
    $('.p-bottomFix').fadeOut();
  }
});
