from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import warnings

app = Flask(__name__)
CORS(app)

# Load the trained model
model = joblib.load('sleep_disorder_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Konversi gender menjadi numerik
    gender_mapping = {'Male': 0, 'Female': 1, 'Other': 2}
    gender_numeric = gender_mapping[data['gender']]
    
    # Konversi bmi_category menjadi numerik
    bmi_mapping = {'Underweight': 0, 'Normal': 1, 'Overweight': 2, 'Obese': 3}
    bmi_numeric = bmi_mapping[data['bmi_category']]
    
    features = {
        'Gender': gender_numeric,
        'Age': data['age'],
        'Sleep Duration': data['sleep_duration'],
        'Quality of Sleep': data['quality_of_sleep'],
        'Physical Activity Level': data['physical_activity_level'],
        'Stress Level': data['stress_level'],
        'BMI Category': bmi_numeric,
        'Heart Rate': data['heart_rate'],
        'Daily Steps': data['daily_steps'],
        'Systolic': data['systolic'],
        'Diastolic': data['diastolic']
    }

    # Buat DataFrame untuk memastikan nama fitur cocok
    features_df = pd.DataFrame([features])
    
    prediction = model.predict(features_df)
    prediction_label = int(prediction[0])

    # Mapping nilai prediksi ke label yang lebih deskriptif
    if prediction_label == 0:
        prediction_text = "Healthy Sleep"
    elif prediction_label == 1:
        prediction_text = "Insomnia"
    elif prediction_label == -1:
        prediction_text = "Sleep Apnea"
    else:
        prediction_text = "Unknown"

    return jsonify({'prediction': prediction_text})

if __name__ == '__main__':
    app.run(debug=True)

