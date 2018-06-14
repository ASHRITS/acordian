$(document).ready(() => {
	$(".hiddenDiv").hide();

	$(".toggle").click(function() {

		$(".hiddenDiv").slideToggle('slow')
	});

	$(".hiddenDiv1").hide();
	$(".toggle1").click(function() {

		$(".hiddenDiv1").slideToggle('slow')
	});
});
