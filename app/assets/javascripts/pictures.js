// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
	$('.item').hover(function(evt){
		$(evt.target).closest('img.action-overlay') 
		 $('.action-overlay').fadeIn('slow');
	});
});

//