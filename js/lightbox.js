//$(document).ready(function(){
//  $(".enlarge").click(function(){
//    $(".enlarged-sign").toggle();
//
//  });
//})



jQuery(document).ready(function(){
    jQuery('.enlarge').on('click', function(){
    var $this = $(this);

    var text = $this.parent('div').siblings('.card-body').find('p').text();
    var sign = $this.siblings().attr('src');

    $('.sign-intro').html(text);

  	$('.sign-image').attr('src', sign);
  	$('.sign-image').attr('alt', text);    

   


    });
});