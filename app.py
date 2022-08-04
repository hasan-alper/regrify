from flask import Flask, render_template, request, jsonify
from joblib import load
import pandas as pd

app = Flask(__name__)

@app.route("/")
def predict():
    return render_template("home.html")

@app.route("/background_process")
def background_process():
    input = pd.DataFrame([request.args])
    return make_prediction(input)



def make_prediction(input):
    model = load("model_assets/model.joblib")
    prediction = model.predict(input)
    return jsonify({"prediction":prediction[0]})


if __name__ == "__main__":
    app.run(debug=True)

