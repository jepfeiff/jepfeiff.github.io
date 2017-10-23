console.log("file loading");

$(document).ready(function() {
	console.log ("load page")

});



$(document).ready(function(){
	$("footer").hover(function(){
		$("div").animate({bottom:'0'}, 500);
	});
});

$(document).ready(function(){
	$("#dropdown-menu").hover(function(){
		$("div").animate({bottom:'0'}, 500);
	});
});