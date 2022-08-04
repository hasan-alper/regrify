function update_dashboard(result) {
	$("#prediction").html(result);
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
			explicit: $("input[name='explicit']:checked").val(),
			release_date: $("#release_date").val(),
		},
		success: function (data) {
			update_dashboard(data.prediction);
		},
	});
}

function print_values() {
	$("#duration-value").html($("#duration").val());
	$("#tempo-value").html($("#tempo").val());
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
