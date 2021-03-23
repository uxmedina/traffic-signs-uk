//$(document).ready(function(){
//  $(".enlarge").click(function(){
//    $(".enlarged-sign").toggle();
//
//  });
//})



jQuery(document).ready(function(){

	$('.container-custom .col:first-child .card .card-img button').addClass('first-button');
	$('.container-custom .col:last .card .card-img button').addClass('last-button');
	
	var n = $( "#roadWorks .card" ).length;
	$( ".teste" ).text( "There are " + n + " divs.");

    jQuery('.enlarge').on('click', function(){
    var $this = $(this);

    var text = $this.parent('div').siblings('.card-body').find('p').text();
    var sign = $this.siblings().attr('src');

    $('.sign-intro').html(text);

  	$('.sign-image').attr('src', sign);
  	$('.sign-image').attr('alt', text);    

   


    });
});
