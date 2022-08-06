let last_result = 0;

function update_dashboard(result) {
	if (result > 100) result = 100;
	if (result < 0) result = 0;

	printResult(last_result, result);

	last_result = result;
}

function fetchdata() {
	$.getJSON({
		type: "GET",
		url: api_url,
		data: {
			duration: $("#duration").val() * 1000,
			tempo: $("#tempo").val(),
			danceability: $("#danceability").val(),
			energy: $("#energy").val(),
			loudness: $("#loudness").val(),
			speechiness: $("#speechiness").val(),
			acousticness: $("#acousticness").val(),
			instrumentalness: $("#instrumentalness").val(),
			liveness: $("#liveness").val(),
			valence: $("#valence").val(),
			genre: $("input[name='genre']:checked").val(),
			explicit: $("input[name='explicit']").is(":checked") ? 1 : 0,
			release_date: $("#release_date").val(),
		},
		success: function (data) {
			update_dashboard(parseInt(data.prediction));
		},
	});
}

function print_values() {
	$("#genre-value").html($("input[name='genre']:checked").val()[0].toUpperCase() + $("input[name='genre']:checked").val().substring(1));
	$("#duration-value").html($("#duration").val());
	$("#tempo-value").html($("#tempo").val());
	$("#explicit-value").html($("input[name='explicit']").is(":checked") ? "Yes" : "No");
	$("#danceability-value").html($("#danceability").val());
	$("#energy-value").html($("#energy").val());
	$("#loudness-value").html($("#loudness").val());
	$("#speechiness-value").html($("#speechiness").val());
	$("#acousticness-value").html($("#acousticness").val());
	$("#instrumentalness-value").html($("#instrumentalness").val());
	$("#liveness-value").html($("#liveness").val());
	$("#valence-value").html($("#valence").val());
	$("#release_date-value").html($("#release_date").val());
}

$(document).on("change", function () {
	fetchdata();
});

$(document).on("input", function () {
	print_values();
});

print_values();
fetchdata();

function printResult(start, end) {
	if (start === end) return;
	var range = end - start;
	var current = start;
	var increment = end > start ? 1 : -1;
	var stepTime = Math.abs(Math.floor(200 / range));
	var timer = setInterval(function () {
		let hue = (current / 100) * 120 + 1;
		current += increment;
		$("#prediction").html(current.toString() + "%");
		if (current == end) {
			clearInterval(timer);
		}

		$("#prediction").css("text-shadow", `2px 2px 1px rgba(0, 0, 0, 0.4), 0 0 20px hsla(${hue}, 60%, 50%, 0.5), 0 0 40px hsla(${hue}, 60%, 50%, 0.4), 0 0 50px hsla(${hue}, 60%, 50%, 0.3)`);
	}, stepTime);
}
