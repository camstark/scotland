var main = function() {

  $('.item').hover(function() {
	$(this).toggleClass('itemHover');
	});
	
  $('.area').hover(function() {
	$(this).toggleClass('areaHover');
	//$(this).removeClass('funderstand').addClass('funderstandHover');
	//$(this).toggleClass('funderstandHover');
	});


 // $('.article').click(function() {
 //   $('.article').removeClass('current');
//
    //$(this).addClass('current');
//    $(this).children('.description').toggle(500);
    //$(this).children('.item').toggleClass('chosen');	
//  });
 
    $('.item').children('.context').click(function() {
	  //$(this).css('background-color','red');
      $(this).parent().parent().children('.description').toggle(500);
      $(this).parent().parent().children('.description').ready(chartholes);

    //$(this).children('.item').toggleClass('chosen');	
  });
  
  
  $('.area').click(function() {
		$(this).children('.spacer').toggle(1000);
		$(this).children('.actions').toggle(1000);
		
		$(this).next().toggle(1000);
		$(this).next().next().toggle(1000);
	});
	
  $('.actions').click(function() {
	  $('.spacer').hide();
	  $('.actions').hide();
	  $(this).show();
	  $(this).parent().children('.spacer').show();
	  var width = $(this).width();
	  $(this).css('width', width * 2);
  
  });
  

};
  
$(document).ready(main);

