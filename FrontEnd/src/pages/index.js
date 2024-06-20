import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("Female");
  const [bmiCategory, setBmiCategory] = useState("Normal");
  const [sleepDuration, setSleepDuration] = useState(8);
  const [qualityOfSleep, setQualityOfSleep] = useState(5);
  const [physicalActivityLevel, setPhysicalActivityLevel] = useState(50);
  const [stressLevel, setStressLevel] = useState(5);
  const [heartRate, setHeartRate] = useState(70);
  const [dailySteps, setDailySteps] = useState(5000);
  const [systolic, setSystolic] = useState(120);
  const [diastolic, setDiastolic] = useState(80);
  const [prediction, setPrediction] = useState("");
  const [lowBloodPressure, setLowBloodPressure] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <Head>
        <title>Sleep Disorder Prediction</title>
      </Head>
      <header className="mt-10 mb-6 text-center">
        <h1 className="text-4xl font-extrabold mb-2">
          SLEEP DISORDER PREDICTION
        </h1>
        <p>Detecting Sleep Disorders for a Better Life.</p>
      </header>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl"
      >
        
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Input Yout Details</h2>
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
              <p className="mt-1 text-gray-400">Age: {age} years</p>
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
                <option>Other</option>
              </select>
              <p className="mt-1 text-gray-400">Gender: {gender}</p>
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
                <option>Underweight</option>
                <option>Overweight</option>
                <option>Obese</option>
              </select>
              <p className="mt-1 text-gray-400">
                BMI Category: {bmiCategory}
              </p>
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
              <p className="mt-1 text-gray-400">
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
              <p className="mt-1 text-gray-400">
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
              <p className="mt-1 text-gray-400">
                Physical Activity Level: {physicalActivityLevel}
              </p>
              <ul className="text-gray-400 list-disc pl-4">
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
              <p className="mt-1 text-gray-400">
                Stress Level: {stressLevel}
              </p>
              <ul className="text-gray-400 list-disc pl-4">
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
                  className="px-3 py-2 bg-gray-700 rounded-l-md text-white"
                  onClick={() => setHeartRate((prev) => Math.max(0, prev - 1))}
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
                  className="px-3 py-2 bg-gray-700 rounded-r-md text-white"
                  onClick={() => setHeartRate((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <p className="mt-1 text-gray-400">
                Heart Rate: {heartRate} bpm
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">
                Daily Steps
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-l-md text-white"
                  onClick={() =>
                    setDailySteps((prev) => Math.max(0, prev - 100))
                  }
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
                  className="px-3 py-2 bg-gray-700 rounded-r-md text-white"
                  onClick={() => setDailySteps((prev) => prev + 100)}
                >
                  +
                </button>
              </div>
              <p className="mt-1 text-gray-400">
                Daily Steps: {dailySteps} steps
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">Systolic</label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-l-md text-white"
                  onClick={() => setSystolic((prev) => Math.max(0, prev - 1))}
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
                  className="px-3 py-2 bg-gray-700 rounded-r-md text-white"
                  onClick={() => setSystolic((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <p className="mt-1 text-gray-400">
                Systolic: {systolic} mmHg
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">
                Diastolic
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-l-md text-white"
                  onClick={() => setDiastolic((prev) => Math.max(0, prev - 1))}
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
                  className="px-3 py-2 bg-gray-700 rounded-r-md text-white"
                  onClick={() => setDiastolic((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <p className="mt-1 text-gray-400">
                Diastolic: {diastolic} mmHg
              </p>
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
      </form>
      <div className="w-full max-w-4xl mx-auto p-6 rounded-md mt-4 mb-4">
        {prediction && (
          <div>
            <h2 className="text-xl text-center mb-4">Prediction Result:</h2>
            <p className="text-4xl font-bold text-white text-center mt-4 mb-4">{prediction}</p>
          </div>
        )}
        
        {lowBloodPressure && (
            <div className="mx-auto w-64 bg-orange-200 text-center px-2 rounded-md mb-2">
              <p className="mt-2 text-orange-950 text-base">⚠️ Low Blood Pressure Detected</p>
            </div>
        )}
      </div>
    </div>
  );
}
