// load page
$(document).ready(function(){

//When user clicks submit button:
	$('#input').submit(function(event){
	//Prevent default behavior of submit
		event.preventDefault(); 
	
	//store users input in var & immediately clear from textarea, hide any validation msg
		var item = $('#userEntry').val(); 
		$('#userEntry').val(''); 
		$('p.feedback').hide();	

	//validate - make sure some input was entered
		if( item == ''){
			$('p.feedback').show(); 
			return false; 
		}	 

	//Add item to list
		var cHeight = $('#container').innerHeight();
		var liHeight = $('li.retro').innerHeight(); 			
		$('#container').animate({ 
						height: (cHeight + liHeight),  
					}, 200 ); 
		$('#list').append('<li class="retro"><img src="images/star.png" class="retro" />' + item + '!</li>');
	
	
	}); 


//When user single-clicks <li> item, cross it off: 

	$('#list').on("click", 'li.retro', function(){		
		$(this).toggleClass("strike"); 		
	}); 

//When user double-clicks <li> item, remove it from the list: 
	
	$('#list').on("dblclick", 'li.retro', function(){
		var listLength = $('li.retro').length; 		
		var cHeight = $('#container').innerHeight();
		var liHeight = $('li.retro').innerHeight() + 80; 
		var h = cHeight - liHeight; 
		if( listLength == 1 ) {
			$('#container').animate({
						height: h+40, 
					}, 200); 		
			$(this).remove();			
		} else {
			$('#container').animate({
						height: h, 
					}, 200); 		
			$(this).remove(); 
		}; 		
	}); 


//When user hovers over shopping-cart icon, make it jiggle: 
	$('#icon').mouseenter(function(){
		$("#icon").animate({ 
            left: "48px" 
        }, 150).animate({ 
            left: "52px" 
        }, 100).animate({ 
            left: "50px",              
        }, 150); 
      }); 


}); //end


