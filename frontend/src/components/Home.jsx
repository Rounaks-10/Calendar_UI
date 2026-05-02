import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleStart = () => {
    if (!email) return alert("Enter email first");
    setShowForm(true);
  };
  const [name, setName] = useState("");
const [branch, setBranch] = useState("");
const [year, setYear] = useState("");

const navigate = useNavigate();
const handleSubmit = async () => {
  try {
    // ✅ frontend validation
    if (!name || !email || !branch || !year) {
      alert("Please fill all fields");
      return;
    }

    const res = await axios.post(
      "http://localhost:5000/api/users/add",
      {
        name,
        email,
        branch,
        year,
      }
    );

    // ✅ axios gives data directly
    alert(res.data.message || "Follow the steps to setup, Thank You :)");

    navigate("/steps");

  } catch (error) {
    console.error(error);

    // ✅ better error handling
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Server not reachable");
    }
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white relative">
      {/* 🔝 Navbar */}
      <div className="flex items-center justify-between px-10 py-4">
        <h1 className="text-xl font-bold">Contest</h1>
      </div>

      {/* 🚀 Hero Section (hide after click) */}
      {!showForm && (
        <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
          <h1 className="text-5xl md:text-6xl font-semibold max-w-3xl">
            Never miss a coding contest again
          </h1>

          <p className="text-gray-400 mt-6 max-w-xl">
            Track coding contests from Codeforces, LeetCode — all in one place.
          </p>

          <p className="text-gray-400 mt-2 max-w-xl">
            Auto add contests to your calendar
          </p>

          {/* Input */}
          <div className="flex flex-col md:flex-row items-center gap-3 mt-8 w-full max-w-xl">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 w-full px-4 py-3 rounded bg-white text-black outline-none"
            />

            <button
              onClick={handleStart}
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded font-medium w-full md:w-auto"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* 💻 Code Snippet Form UI */}
      {showForm && (
        <div className="flex justify-center items-center mt-20 px-4">
          <div className="bg-[#161b22] border border-gray-700 rounded-lg w-full max-w-2xl shadow-lg">
            {/* Fake code header */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-700">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-gray-400 text-sm">userDetails.js</span>
            </div>

            {/* Code-style form */}
            <div className="p-6 font-mono text-sm text-green-400">
              <p>{`const user = {`}</p>

              <div className="ml-4 space-y-3">
                <div>
                  name:{" "}
                  <input
                    type="text"
                    placeholder='"Enter name"'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-transparent border-b border-gray-600 outline-none text-white"
                  />
                  ,
                </div>

                <div>
                  email:{" "}
                  <input
                    type="text"
                    value={email}
                    readOnly
                    className="bg-transparent border-b border-gray-600 text-gray-400"
                  />
                  ,
                </div>

                <div>
                  branch:{" "}
                  <input
                    type="text"
                    placeholder='"CSE"'
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="bg-transparent border-b border-gray-600 outline-none text-white"
                  />
                  ,
                </div>

                <div>
                  year:{" "}
                  <input
                    type="text"
                    placeholder='"1st Year"'
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="bg-transparent border-b border-gray-600 outline-none text-white"
                  />
                  ,
                </div>
              </div>

              <p className="mt-3">{`};`}</p>

              <button
                onClick={handleSubmit}
                className="mt-6 bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-700/30 to-transparent blur-2xl"></div>
    </div>
  );
};

export default Home;
