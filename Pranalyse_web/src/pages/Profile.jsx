// Profile.jsx
import React, { useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { User } from "lucide-react";


const userData = {
  name: "User123",
  level: "Beginner",
  profilePic: <User className="w-32 h-32 rounded-full border-4 border-violet-500 shadow-lg p-3"/>,
  leaderboard: 12,
  badges: ["Consistency", "Yoga Master", "Hydration Hero"],
  achievements: ["Completed 30 days streak", "First 5K Walk"],
  metrics: [
    { title: "Calories Burned", value: 1200, unit: "kcal" },
    { title: "Steps Walked", value: 8500, unit: "steps" },
    { title: "Water Intake", value: 2.1, unit: "L" },
    { title: "Workout Sessions", value: 15, unit: "sessions" },
  ],
  weeklyProgress: [
    { day: "Mon", calories: 180, steps: 1200 },
    { day: "Tue", calories: 250, steps: 1500 },
    { day: "Wed", calories: 200, steps: 1400 },
    { day: "Thu", calories: 300, steps: 1600 },
    { day: "Fri", calories: 220, steps: 1300 },
    { day: "Sat", calories: 400, steps: 2000 },
    { day: "Sun", calories: 350, steps: 1800 },
  ],
};

function Profile() {
  const profileRef = useRef();

  const downloadReport = () => {
    if (!profileRef.current) return;
    html2canvas(profileRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("profile-report.pdf");
    });
  };

  return (
    <section
      ref={profileRef}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6 py-12"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-6">
          {userData.profilePic}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{userData.name}</h1>
            <p className="text-lg text-gray-300">Level: {userData.level}</p>
            <p className="text-gray-400">Leaderboard: #{userData.leaderboard}</p>
          </div>
        </div>
        <button
          onClick={downloadReport}
          className="mt-6 md:mt-0 bg-violet-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
        >
          Download Report
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {userData.metrics.map((metric, i) => (
          <div
            key={i}
            className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:scale-105 transition transform"
          >
            <h3 className="text-lg font-medium text-gray-300 mb-2">{metric.title}</h3>
            <p className="text-2xl font-bold text-white">{metric.value} {metric.unit}</p>
          </div>
        ))}
      </div>

      {/* Badges & Achievements */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 mb-12">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Badges</h2>
          <div className="flex flex-wrap gap-3">
            {userData.badges.map((badge, i) => (
              <div
                key={i}
                className="bg-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-md"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {userData.achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Progress Graph */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6">Weekly Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userData.weeklyProgress}>
            <XAxis dataKey="day" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="calories" fill="#7c3aed" name="Calories Burned" />
            <Bar dataKey="steps" fill="#4c1d95" name="Steps Walked" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default Profile;
