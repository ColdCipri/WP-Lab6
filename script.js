$(document).ready(function()
{
	$('#Next').click(function() {
	if ($('.Page1').css('margin-left') == "0px"){

		$('.Page1').animate({"margin-left": '+100%'}, "slow");
		$('.Page2').css({"margin-left": '-100%'}, "slow");
		$('.Page3').css({"margin-left": '-200%'}, "slow");
		$('.Page4').animate({"margin-left": '0px'}, "slow");
		
		 
	} else if ($('.Page2').css('margin-left') == "0px") {
		

		$('.Page2').animate({"margin-left": '+100%'}, "slow");
		$('.Page3').css({"margin-left": '-100%'}, "slow");
		$('.Page4').css({"margin-left": '-200%'}, "slow");
		$('.Page1').animate({"margin-left": '0px'}, "slow");
		
		
	} else if ($('.Page3').css('margin-left') == "0px") {
		

		$('.Page3').animate({"margin-left": '+100%'}, "slow");
		$('.Page4').css({"margin-left": '-100%'}, "slow");
		$('.Page1').css({"margin-left": '-200%'}, "slow");
		$('.Page2').animate({"margin-left": '0px'}, "slow");
		
		
	} else if ($('.Page4').css('margin-left') == "0px") {
		

		$('.Page4').animate({"margin-left": '+100%'}, "slow");
		$('.Page1').css({"margin-left": '-100%'}, "slow");
		$('.Page2').css({"margin-left": '-200%'}, "slow");
		$('.Page3').animate({"margin-left": '0px'}, "slow");
		
		
	}
	
	
	if ($('.Page1').css('margin-left') == '100%')
	{
		$('.Page1').css('margin-left', '-300%');
	} 
	else if ($('.Page2').css('margin-left') == '100%')
	{
		$('.Page2').css('margin-left', '-300%');
	} 
	else if ($('.Page3').css('margin-left') == '100%')
	{
		$('.Page3').css('margin-left', '-300%');
	} 
	else if ($('.Page4').css('margin-left') == '100%')
	{
		$('.Page4').css('margin-left', '-300%');
	}
  });   
});    