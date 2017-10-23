console.log("file loading");

$(document).ready(function() {
	console.log ("load page")

});



$('#footer').hover(function() {
	$(this).animate({bottom: '0'}, 2000);
}, function() {
	$(this).animate({bottom: '-56'}, 2000);
});
