from flask import Flask, render_template, request
from joblib import load
import pandas as pd

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def predict():
    if request.method == "GET":
        return render_template("app.html")
    else:
        model = load("model_assets/model.joblib")
        prediction = model.predict(get_user_inputs())
        print(prediction)
        return render_template("app.html", prediction=prediction)


def get_user_inputs():
    input = pd.DataFrame(request.form.to_dict(flat=False))
    temp_input = input.drop(labels="genre", axis=1)
    temp_input = temp_input.astype(float)
    genres = pd.DataFrame({"genre_hiphop": [0], "genre_latin": [0], "genre_pop": [0], "genre_r&b": [0], "genre_rap": [0], "genre_rock": [0]})
    if input["genre"][0] != "genre_edm":
      genres[input["genre"]] = [1]
    final_input = pd.concat([temp_input, genres], axis=1)
    return final_input


if __name__ == "__main__":
    app.run(debug=True)

