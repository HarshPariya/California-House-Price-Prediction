# pyrefly: ignore [missing-import]x
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import os

app = Flask(__name__)
# Enable CORS for all routes, allowing requests from any origin
CORS(app)

# Load the model
model_path = os.path.join(os.path.dirname(__file__), "house_price_model.pkl")
model = pickle.load(open(model_path, "rb"))

@app.route("/api/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        
        # Extract features in the correct order
        features = [
            float(data.get("MedInc", 0)),
            float(data.get("HouseAge", 0)),
            float(data.get("AveRooms", 0)),
            float(data.get("AveBedrms", 0)),
            float(data.get("Population", 0)),
            float(data.get("AveOccup", 0)),
            float(data.get("Latitude", 0)),
            float(data.get("Longitude", 0))
        ]
        
        # Make prediction
        prediction = model.predict([features])[0]
        
        # Return as JSON
        return jsonify({
            "status": "success",
            "prediction": float(prediction)
        })
        
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 400

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "healthy"})

if __name__ == "__main__":
    # Use port 5000 or the port specified by the environment
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)