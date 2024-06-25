from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the trained model
model_info = joblib.load('models/sleep_disorder_model.pkl')
model = model_info['model']
scaler = model_info['scaler']
feature_names = model_info['feature_names']

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Ensure all required keys are present in the input data
    required_keys = ['gender', 'age', 'sleep_duration', 'quality_of_sleep', 'physical_activity_level',
                     'stress_level', 'bmi_category', 'heart_rate', 'daily_steps', 'systolic', 'diastolic']
    
    for key in required_keys:
        if key not in data:
            return jsonify({'error': f'Missing required key: {key}'}), 400

    # Convert gender to numeric
    gender_mapping = {'Male': 1, 'Female': 0}
    gender_numeric = gender_mapping.get(data['gender'], 0)  # Default to Female (0) if gender not found
    
    # Convert BMI category to numeric
    bmi_mapping = {'Normal': 0, 'Overweight': 2, 'Obese': 1}
    bmi_numeric = bmi_mapping.get(data['bmi_category'], 0)  # Default to Normal (0) if BMI category not found
    
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

    # Create DataFrame to ensure feature names match
    features_df = pd.DataFrame([features], columns=feature_names)
    
    # Scale the features
    features_scaled = scaler.transform(features_df)
    
    # Predict using the model
    prediction = model.predict(features_scaled)
    prediction_label = int(prediction[0])

    # Map prediction value to descriptive label
    prediction_mapping = {0: "Healthy Sleep", 1: "Insomnia", 2: "Sleep Apnea"}
    prediction_text = prediction_mapping.get(prediction_label, "Unknown")
    
    # Check for low blood pressure condition
    low_blood_pressure = data['systolic'] < 90 and data['diastolic'] <= 60

    return jsonify({'prediction': prediction_text, 'low_blood_pressure': low_blood_pressure})

@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.get_json(force=True)
    feedback_message = data.get('feedback')
    
    # Save feedback to file (feedback.txt)
    with open('feedback.txt', 'a') as f:
        f.write(feedback_message + '\n')
    
    return jsonify({'message': 'Feedback received'})

if __name__ == '__main__':
    app.run(debug=True)
