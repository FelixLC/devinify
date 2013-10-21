$(document).ready(function(){
 $(window).scroll(function(){
  var y = $(window).scrollTop();
  if( y = 0 ){
      $("#top-shadow").css({'display':'block', 'opacity':y/20});
  } else {
      $("#top-shadow").css({'display':'block', 'opacity':y/20});
  }
 });
})