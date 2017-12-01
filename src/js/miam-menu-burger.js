$(".burger-menu").on("click", function(){
  var animation = $(this).data("menu-animation");
  if (!animation) {
    animation = 'transition-basic';
  }
  $(this).stop().toggleClass(animation);
});
