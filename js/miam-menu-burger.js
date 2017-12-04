/*$(".burger-menu").on("click", function(){
  var animation = $(this).data("menu-animation");
  if (!animation) {
    animation = 'transition-basic';
  }
  $(this).stop().toggleClass(animation);
});*/

document.querySelectorAll(".burger-menu").forEach(function(e){
  e.addEventListener('click', function() {
    var animation = this.getAttribute('data-menu-animation');
    if (!animation) {
      animation = 'transition-basic';
    }
    this.classList.toggle(animation);
  });
});
