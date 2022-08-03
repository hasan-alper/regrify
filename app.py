from flask import Flask, render_template, request
from joblib import load
import pandas as pd

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def predict():
    if request.method == "GET":
        return render_template("app.html")
    else:
        return render_template("app.html", prediction=make_prediction())


def make_prediction():
    input = pd.DataFrame(request.form.to_dict(flat=False))
    model = load("model_assets/model.joblib")
    prediction = model.predict(input)
    return prediction


if __name__ == "__main__":
    app.run(debug=True)

