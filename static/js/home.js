function update_dashboard(result) {
	$("#prediction").html(result);
}
function fetchdata() {
	$.getJSON({
		type: "GET",
		url: api_url,
		data: {
			duration: $("#duration").val(),
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

$(document).on("change", function () {
	fetchdata();
});
