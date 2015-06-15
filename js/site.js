$(document).ready(function() {
	$('a.go-gameday').live('click', function() {
		$('body').attr('id', 'gameday');
		$('a.go-gameday').text('Standard Mode').removeClass('go-gameday').addClass('go-standard');
		return false;
	});
	
	$('a.go-standard').live('click', function() {
		$('body').attr('id', 'standard');
		$('a.go-standard').text('Game Day Mode').removeClass('go-standard').addClass('go-gameday');
		return false;
	});

	$('h2').widont();

	$('#content').fitVids();

});

