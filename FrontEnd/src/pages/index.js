import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const initialHeartRate = 80;
  const initialDailySteps = 0;
  const initialSystolic = 80;
  const initialDiastolic = 50;

  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("Female");
  const [bmiCategory, setBmiCategory] = useState("Normal");
  const [sleepDuration, setSleepDuration] = useState(8);
  const [qualityOfSleep, setQualityOfSleep] = useState(5);
  const [physicalActivityLevel, setPhysicalActivityLevel] = useState(50);
  const [stressLevel, setStressLevel] = useState(5);
  const [heartRate, setHeartRate] = useState(initialHeartRate);
  const [dailySteps, setDailySteps] = useState(initialDailySteps);
  const [systolic, setSystolic] = useState(initialSystolic);
  const [diastolic, setDiastolic] = useState(initialDiastolic);
  const [prediction, setPrediction] = useState("");
  const [lowBloodPressure, setLowBloodPressure] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [feedbackResponse, setFeedbackResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      age,
      gender,
      bmi_category: bmiCategory,
      sleep_duration: sleepDuration,
      quality_of_sleep: qualityOfSleep,
      physical_activity_level: physicalActivityLevel,
      stress_level: stressLevel,
      heart_rate: heartRate,
      daily_steps: dailySteps,
      systolic,
      diastolic,
    };

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setPrediction(result.prediction);
      setLowBloodPressure(result.low_blood_pressure);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const handleInputChange = (setter, min, max) => (e) => {
    const value = Number(e.target.value);
    if (value >= min && value <= max) {
      setter(value);
    }
  };

  const handleFeedback = async () => {
    try {
      const response = await fetch('http://localhost:5000/feedback', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setFeedbackResponse(result.message);
      setFeedbackSuccess(true);
      setFeedback('');
      setTimeout(() => setFeedbackSuccess(false), 3000);
    } catch (error) {
      console.error("There was an error sending the feedback:", error);
      setFeedbackResponse('Failed to send feedback');
      setFeedbackSuccess(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sleep Disorder Prediction</title>
      </Head>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center" style={{ backgroundImage: `url('/foto1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <header className="mt-10 mb-6 text-center">
          <h1 className="text-4xl font-extrabold mb-2">
            SLEEP DISORDER PREDICTION
          </h1>
          <p>Detecting Sleep Disorders for a Better Life.</p>
        </header>
        <form
          onSubmit={handleSubmit}
          className="bg-blue-900 p-6 rounded-lg shadow-md w-full max-w-4xl m-8 text-white"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Input Your Details</h2>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">Age</label>
              <input
                type="range"
                name="age"
                className="w-full"
                min="0"
                max="100"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
              />
              <p className="block text-lg font-medium mb-1">Age: {age} years</p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">Gender</label>
              <select
                name="gender"
                className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Female</option>
                <option>Male</option>
              </select>
              <p className="block text-lg font-medium mb-1">Gender: {gender}</p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">
                BMI Category
              </label>
              <select
                name="bmi_category"
                className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
                value={bmiCategory}
                onChange={(e) => setBmiCategory(e.target.value)}
              >
                <option>Normal</option>
                <option>Overweight</option>
                <option>Obese</option>
              </select>
              <p className="block text-lg font-medium mb-1">
                BMI Category: {bmiCategory}
              </p>
              <ul className="block text-lg font-medium mb-1">
                <li>Normal BMI ranges from 18.5 to 24.9.</li>
                <li>Overweight BMI ranges from 25 to 29.9.</li>
                <li>Obese BMI is 30 or higher.</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">
                Sleep Duration
              </label>
              <input
                type="range"
                name="sleep_duration"
                className="w-full"
                min="0"
                max="24"
                step="0.1"
                value={sleepDuration}
                onChange={(e) => setSleepDuration(Number(e.target.value))}
              />
              <p className="block text-lg font-medium mb-1">
                Sleep Duration: {sleepDuration} hours
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">
                Quality of Sleep
              </label>
              <input
                type="range"
                name="quality_of_sleep"
                className="w-full"
                min="0"
                max="10"
                value={qualityOfSleep}
                onChange={(e) => setQualityOfSleep(Number(e.target.value))}
              />
              <p className="block text-lg font-medium mb-1">
                Quality of Sleep: {qualityOfSleep}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">
                Physical Activity Level
              </label>
              <input
                type="range"
                name="physical_activity_level"
                className="w-full"
                min="0"
                max="100"
                value={physicalActivityLevel}
                onChange={(e) =>
                  setPhysicalActivityLevel(Number(e.target.value))
                }
              />
              <p className="block text-lg font-medium mb-1">
                Physical Activity Level: {physicalActivityLevel}
              </p>
              <ul className="block text-lg font-medium mb-1">
                <li>0-33: Low (Little or no physical activity)</li>
                <li>
                  34-66: Moderate (Some physical activity such as walking, light
                  exercise)
                </li>
                <li>
                  67-100: High (Regular or intense physical activity such as gym
                  workouts, running)
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">
                Stress Level
              </label>
              <input
                type="range"
                name="stress_level"
                className="w-full"
                min="0"
                max="10"
                value={stressLevel}
                onChange={(e) => setStressLevel(Number(e.target.value))}
              />
              <p className="block text-lg font-medium mb-1">
                Stress Level: {stressLevel}
              </p>
              <ul className="block text-lg font-medium mb-1">
                <li>0: No stress</li>
                <li>1-3: Low stress</li>
                <li>4-6: Moderate stress</li>
                <li>7-9: High stress</li>
                <li>10: Extremely high stress</li>
              </ul>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">
                Heart Rate
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-l-md text-white hover:bg-red-500"
                  onClick={() => setHeartRate((prev) => Math.max(80, prev - 1))}
                >
                  -
                </button>
                <input
                  name="heart_rate"
                  value={heartRate}
                  onChange={(e) => setHeartRate(Number(e.target.value))}
                  className="w-full px-3 py-2 text-center bg-gray-700 text-white"
                />
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-r-md text-white hover:bg-blue-500"
                  onClick={() => setHeartRate((prev) => Math.min(130, prev + 1))}
                >
                  +
                </button>
              </div>
              <p className="block text-lg font-medium mb-1">Heart Rate: Input Range 80-130</p>
              <p className="block text-lg font-medium mb-1">Heart Rate: {heartRate} bpm</p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">
                Daily Steps
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-l-md text-white hover:bg-red-500"
                  onClick={() => setDailySteps((prev) => Math.max(0, prev - 1))}
                >
                  -
                </button>
                <input
                  name="daily_steps"
                  value={dailySteps}
                  onChange={(e) => setDailySteps(Number(e.target.value))}
                  className="w-full px-3 py-2 text-center bg-gray-700 text-white"
                />
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-r-md text-white hover:bg-blue-500"
                  onClick={() => setDailySteps((prev) => Math.min(10000, prev + 1))}
                >
                  +
                </button>
              </div>
              <p className="block text-lg font-medium mb-1">Daily Steps: Input Range 0-10000</p>
              <p className="block text-lg font-medium mb-1">
                Daily Steps: {dailySteps} steps
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">Systolic</label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-l-md text-white hover:bg-red-500"
                  onClick={() => setSystolic((prev) => Math.max(80, prev - 1))}
                >
                  -
                </button>
                <input
                  name="systolic"
                  value={systolic}
                  onChange={(e) => setSystolic(Number(e.target.value))}
                  className="w-full px-3 py-2 text-center bg-gray-700 text-white"
                />
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-r-md text-white hover:bg-blue-500"
                  onClick={() => setSystolic((prev) => Math.min(200, prev + 1))}
                >
                  +
                </button>
              </div>
              <p className="block text-lg font-medium mb-1">Systolic: Input Range 80-200</p>
              <p className="block text-lg font-medium mb-1">Systolic: {systolic} mmHg</p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">
                Diastolic
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-l-md text-white hover:bg-red-500"
                  onClick={() => setDiastolic((prev) => Math.max(50, prev - 1))}
                >
                  -
                </button>
                <input
                  name="diastolic"
                  value={diastolic}
                  onChange={(e) => setDiastolic(Number(e.target.value))}
                  className="w-full px-3 py-2 text-center bg-gray-700 text-white"
                />
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-r-md text-white hover:bg-blue-500"
                  onClick={() => setDiastolic((prev) => Math.min(100, prev + 1))}
                >
                  +
                </button>
              </div>
              <p className="block text-lg font-medium mb-1">Diastolic: Input Range 50-100</p>
              <p className="block text-lg font-medium mb-1">Diastolic: {diastolic} mmHg</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Predict
            </button>
          </div>
          <div className="w-full max-w-4xl mx-auto p-6 rounded-md mt-4 mb-4">
            {prediction && (
              <div>
                <h2 className="text-xl text-center mb-4">Prediction Result:</h2>
                <p className="text-4xl font-bold text-white text-center mt-4 mb-4">
                  {prediction}
                </p>
              </div>
            )}

            {lowBloodPressure && (
              <div className="mx-auto w-64 bg-orange-200 text-center px-2 rounded-md mb-2">
                <p className="mt-2 text-orange-950 text-base">
                  ⚠️ Low Blood Pressure Detected
                </p>
              </div>
            )}
          </div>
        </form>
        <div className="w-full max-w-4xl mx-auto p-6 m-10 bg-blue-900 rounded-lg shadow-md text-white mt-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">Feedback</h2>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full px-3 py-2 mb-4 bg-gray-700 rounded-md text-white"
            rows="4"
            placeholder="Write your feedback here..."
          />
          <button
            onClick={handleFeedback}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            disabled={!feedback.trim()}
          >
            Submit Feedback
          </button>
          {feedbackResponse && feedbackSuccess && (
            <div className="mt-4 text-center px-4 py-2 rounded-md bg-green-200 text-green-900">
              {feedbackResponse}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
