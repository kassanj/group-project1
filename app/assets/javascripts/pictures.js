// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
	$('img').mouseenter(function(evt){
		$(evt.target).siblings('.action-overlay').fadeIn('slow'); 
     });
	$('img').mouseleave(function(evt){
		$(evt.target).siblings('.action-overlay').fadeOut('slow'); 
	});
});
