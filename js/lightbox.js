//$(document).ready(function(){
//  $(".enlarge").click(function(){
//    $(".enlarged-sign").toggle();
//
//  });
//})



jQuery(document).ready(function(){

	$('.container-custom .col:first-child').addClass('first-card');
	$('.container-custom .col:last').addClass('last-card');
	
    jQuery('.enlarge').on('click', function(){
	    var $this = $(this);

	    var text = $this.parent('div').siblings('.card-body').find('p').text();
	    var title = $this.parents('.container').find('header h2').text();
	    var sign = $this.siblings().attr('src');

	    //var OrderTitle = $("#orders header h2").text();
	    //var WarningTitle = $("#warnings header h2").text();
	    //var DirectionsTitle = $("#directions header h2").text();
	    //var InformationTitle = $("#information header h2").text();
	    //var RoadWorksTitle = $("#roadWorks header h2").text();

		$('.modal-title').text(title);
		$('.sign-intro').html(text);
		$('.sign-image').attr('src', sign);
		$('.sign-image').attr('alt', text);
    });
});
