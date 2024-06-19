import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [heartRate, setHeartRate] = useState(70);
  const [dailySteps, setDailySteps] = useState(5000);
  const [systolic, setSystolic] = useState(120);
  const [diastolic, setDiastolic] = useState(80);

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value - 1);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <Head>
        <title>Sleep Disorder Detection App</title>
      </Head>
      <header className="mt-10 mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">🌙 Sleep Disorder Detection App</h1>
        <p>This app detects sleep disorders based on input features.</p>
      </header>
      <form className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Input Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">📋 Input Details</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Age</label>
              <input type="range" className="w-full" min="0" max="100" />
              <p className="mt-1 text-xs text-gray-400">Age: The age of the individual in years.</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select className="w-full px-3 py-2 rounded-md bg-gray-700 text-white">
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
              <p className="mt-1 text-xs text-gray-400">Gender: The gender of the individual.</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">BMI Category</label>
              <select className="w-full px-3 py-2 rounded-md bg-gray-700 text-white">
                <option>Normal</option>
                <option>Underweight</option>
                <option>Overweight</option>
                <option>Obese</option>
              </select>
              <p className="mt-1 text-xs text-gray-400">BMI Category: The BMI classification of the individual.</p>
            </div>
          </div>

          {/* Sleep Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">💤 Sleep Details</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Sleep Duration</label>
              <input type="range" className="w-full" min="0" max="24" step="0.1" />
              <p className="mt-1 text-xs text-gray-400">Sleep Duration: The number of hours the individual sleeps per night.</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Quality of Sleep</label>
              <input type="range" className="w-full" min="0" max="10" />
              <p className="mt-1 text-xs text-gray-400">Quality of Sleep: A self-assessed rating of sleep quality on a scale of 0 to 10.</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Physical Activity Level</label>
              <input type="range" className="w-full" min="0" max="100" />
              <p className="mt-1 text-xs text-gray-400">Physical Activity Level:</p>
              <ul className="text-xs text-gray-400 list-disc pl-4">
                <li>0-33: Low (Little or no physical activity)</li>
                <li>34-66: Moderate (Some physical activity such as walking, light exercise)</li>
                <li>67-100: High (Regular or intense physical activity such as gym workouts, running)</li>
              </ul>
            </div>
          </div>

          {/* Health Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">❤️ Health Details</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Stress Level</label>
              <input type="range" className="w-full" min="0" max="10" />
              <p className="mt-1 text-xs text-gray-400">Stress Level:</p>
              <ul className="text-xs text-gray-400 list-disc pl-4">
                <li>0: No stress</li>
                <li>1-3: Low stress</li>
                <li>4-6: Moderate stress</li>
                <li>7-9: High stress</li>
                <li>10: Extremely high stress</li>
              </ul>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Heart Rate</label>
              <div className="flex items-center">
                <input
                  value={heartRate}
                  onChange={(e) => setHeartRate(Number(e.target.value))}
                  className="w-full px-3 py-2 text-center bg-gray-700 text-white"
                />
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-l-md text-white"
                  onClick={() => decrement(setHeartRate, heartRate)}
                >
                  -
                </button>
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-r-md text-white"
                  onClick={() => increment(setHeartRate, heartRate)}
                >
                  +
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-400">Heart Rate: The resting heart rate of the individual in beats per minute.</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Daily Steps</label>
              <div className="flex items-center">
                <input
                  value={dailySteps}
                  onChange={(e) => setDailySteps(Number(e.target.value))}
                  className="w-full px-3 py-2 text-center bg-gray-700 text-white"
                />
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-l-md text-white"
                  onClick={() => decrement(setDailySteps, dailySteps)}
                >
                  -
                </button>
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-r-md text-white"
                  onClick={() => increment(setDailySteps, dailySteps)}
                >
                  +
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-400">Daily Steps: The average number of steps the individual takes per day.</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Systolic</label>
              <div className="flex items-center">
                <input
                  value={systolic}
                  onChange={(e) => setSystolic(Number(e.target.value))}
                  className="w-full px-3 py-2 text-center bg-gray-700 text-white"
                />
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-l-md text-white"
                  onClick={() => decrement(setSystolic, systolic)}
                >
                  -
                </button>
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-r-md text-white"
                  onClick={() => increment(setSystolic, systolic)}
                >
                  +
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-400">Systolic: The systolic blood pressure of the individual in mmHg.</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Diastolic</label>
              <div className="flex items-center">
                <input
                  value={diastolic}
                  onChange={(e) => setDiastolic(Number(e.target.value))}
                  className="w-full px-3 py-2 text-center bg-gray-700 text-white"
                />
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-l-md text-white"
                  onClick={() => decrement(setDiastolic, diastolic)}
                >
                  -
                </button>
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-700 rounded-r-md text-white"
                  onClick={() => increment(setDiastolic, diastolic)}
                >
                  +
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-400">Diastolic: The diastolic blood pressure of the individual in mmHg.</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Predict</button>
        </div>
      </form>
    </div>
  );
}
