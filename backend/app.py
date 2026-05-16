from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend Running"

@app.route("/grade", methods=["POST"])
def grade():
    data = request.json

    name = data["name"]
    score = int(data["score"])

    if score >= 90:
        grade = "A"
        remark = "Excellent"
    elif score >= 75:
        grade = "B"
        remark = "Very Good"
    elif score >= 60:
        grade = "C"
        remark = "Good"
    elif score >= 40:
        grade = "D"
        remark = "Average"
    else:
        grade = "F"
        remark = "Needs Improvement"

    return jsonify({
        "name": name,
        "score": score,
        "grade": grade,
        "remark": remark
    })

if __name__ == "__main__":
    app.run(debug=True)