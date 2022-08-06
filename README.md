# Regrify

Play around with the model and make predictions using the [web app](https://regrify.herokuapp.com/) I made.

![regrify](/static/imgs/regrify.gif)

## Description

This tool predicts Spotify popularity on a scale of 0 to 100. The popularity of a track is algorithmically calculated, and is a combination of how many plays a track has and how recent those plays are.

The model was trained on [Spotify audio feautes dataset](https://www.kaggle.com/datasets/naoh1092/spotify-genre-audio-features), using an Elastic Net regression model. It has an RMSE of 11.21. This project was made over a 1-week span in August 2022.

## Feature Glossary

-   **Genre:** A category that identifies some pieces of music as belonging to a shared tradition or set of conventions.
-   **Duration:** This is the length of the song in seconds.
-   **Tempo:** This is the estimated speed of the song in beats per minute.
-   **Loudness:** The overall loudness of a song in dB on a scale of -20 to 0.
-   **Release Year:** A year on which a track is due to become available for the public to listen.
-   **Explicit:** Indicates whether a track has curse words or language or art that is sexual, violent, or offensive in nature.
-   **Danceability:** Measure of how danceable a song is from a scale of 0 to 1.
-   **Energy:** A perceptual measure of intensity and activity from a scale of 0 to 1.
-   **Speechiness:** Detects the presence of spoken words in a song on a scale of 0 to 1. A lower number (0-0.33) tends to indicate less speech, a moderate number (0.33-0.66) tends to indicate a mix of music and spoken word like rap, and a higher number (0.66-1) tends to indicate something like a poetry album.
-   **Acousticness:** A confidence measure on if the song is acoustic on a scale of 0 to 1.
-   **Instrumentalness:** A measure on a scale of 0 to 1 on whether a track has no vocals (excluding adlibs like ooh-ahh's). Values about 0.5 tend to indicate an instrumental track.
-   **Liveness:** Detects the presence of an audience in a recording on a scale of 0 to 1. A value of 0.8 or above indicates a strong chance that the song is a live recording.
-   **Valence:** A measure from 0 to 1 indicating the "musical positiveness" of a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).

## Issues

If any issues are found, they can be reported [here](https://github.com/hasan-alper/regrify/issues).

## License

This project is licensed under the [MIT](LICENSE) license.
