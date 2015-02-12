// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$( document ).on('ready page:load', function() {
	$('.options').hide();
});

$(function(){
	$('.item').mouseenter(function(){
		$(this).children('.options').fadeIn('slow');
	});
	$('.item').mouseleave(function(){
		$(this).children('.options').fadeOut('slow');
	});
});
// $(function(){
// $('#container').masonry({
//   columnWidth: 50
// });
// });

// $(function(){ 
// 	 // $('.item').isotope({ sortby : 'movie'});
//   // });
//      $('#sort-by a').click(function(){
//   // get href attribute, minus the '#'
//      var sortName = $(this).attr('href').slice(1);
//      $('#container').isotope({ sortBy : sortName });
//      return false;
//     });








