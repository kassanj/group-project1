// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$( document ).on('ready page:load', function() {
  $('.options').hide();
});

// $(function(){  
//   $('li').each(function(event){
//   	$(this).mouseenter(function(){
//   		$('.options').fadeIn('slow'); 
//   	});

//   	$(this).mouseleave(function(){
//   		$('.options').fadeOut('slow');
//   	});
//   });
// });

$(function(){
	$('li').mouseenter(function(){
		console.log("sdfgsdfgsdf");
		$(this).siblings().children('.options').fadeIn('slow');
	});
	$('li').mouseleave(function(){
		console.log("sdfgsdfgsdf");
		$(this).siblings().children('.options').fadeOut('slow');
	});
});

// $(function(){  
//   $('li').each(function(event){
//   	$(this).mouseleave(function(){
//   		$('.options').fadeOut('slow');
//   	});
//   });
 //  	console.log('ghello');
	// 	$(this).fadeIn('slow'); 
	// });

	// }); 

// 	// $('.options').mouseleave(function(){
// 	// 	$(this).fadeOut('slow');
// // 	}); 
// });


// $(document).ready(function(
// 	$('options')
// 	console.log("Hello World");
// )};

// var container = document.querySelector('#container');
// var msnry = new Masonry( container, {
//   // options...
//   itemSelector: '.item',
//   columnWidth: 200
// });


