import React, { useState, useEffect } from "react";
import { Play, Clock, Flame, Zap } from "lucide-react";
import Navbar from "./Navbar";

const Workouts = () => {

  const exerciseOptions = [
    { name: "Running", base: 100 },
    { name: "Push-ups", base: 80 },
    { name: "Cycling", base: 90 },
    { name: "Jump Rope", base: 120 },
    { name: "Squats", base: 85 },
  ];

  const timeOptions = [10, 15, 20, 30];

  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState("Running");
  const [time, setTime] = useState(10);
  const [level, setLevel] = useState("Easy");

  // 🔥 SESSION STATES
  const [activeWorkout, setActiveWorkout] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // 🔹 Calories calc
  const getCalories = () => {
    const ex = exerciseOptions.find(e => e.name === selectedExercise);
    if (!ex) return 0;
    return (ex.base / 10) * time;
  };

  // 🔹 Add exercise
  const handleAddExercise = () => {
    const newExercise = {
      title: selectedExercise,
      time: time.toString(),
      burn: getCalories(),
      level,
    };
    setExercises([...exercises, newExercise]);
  };

  // ▶ START
  const handleStart = (exercise) => {
    setActiveWorkout(exercise);
    setTimeElapsed(0);
    setCaloriesBurned(0);
    setIsRunning(true);
  };

  // ⏸ PAUSE
  const handlePause = () => {
    setIsRunning(false);
  };

  // ▶ RESUME
  const handleResume = () => {
    setIsRunning(true);
  };

  // ⏱ TIMER
  useEffect(() => {
    let interval;

    if (isRunning && activeWorkout) {
      interval = setInterval(() => {
        setTimeElapsed(prev => {
          const newTime = prev + 1;

          const totalSeconds = parseInt(activeWorkout.time) * 60;
          const calPerSec = activeWorkout.burn / totalSeconds;

          setCaloriesBurned(prevCal => prevCal + calPerSec);

          if (newTime >= totalSeconds) {
            clearInterval(interval);
            setIsRunning(false);
          }

          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, activeWorkout]);

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />

      <main className="pt-28 px-4 md:px-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black italic uppercase">
            EXPLOSIVE <span className="text-[#00F2FF]">WORKOUTS</span>
          </h1>
        </header>

        {/* INPUT */}
        <div className="bg-[#111] p-6 rounded-2xl mb-10">
          <div className="grid md:grid-cols-4 gap-3">

            <select
              value={selectedExercise}
              onChange={(e) => setSelectedExercise(e.target.value)}
              className="p-3 rounded-xl bg-black border border-white/10"
            >
              {exerciseOptions.map((ex, i) => (
                <option key={i}>{ex.name}</option>
              ))}
            </select>

            <select
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              className="p-3 rounded-xl bg-black border border-white/10"
            >
              {timeOptions.map((t, i) => (
                <option key={i} value={t}>{t} min</option>
              ))}
            </select>

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="p-3 rounded-xl bg-black border border-white/10"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

            <div className="flex items-center justify-center bg-black border border-white/10 rounded-xl">
              🔥 {getCalories()} kcal
            </div>

          </div>

          <button
            onClick={handleAddExercise}
            className="mt-4 bg-[#00F2FF] text-black py-3 w-full rounded-xl font-bold"
          >
            Add Exercise
          </button>
        </div>

        {/* 🔥 LIVE SESSION */}
        {activeWorkout && (
          <div className="bg-[#111] p-6 rounded-2xl mb-10 relative">

            {/* ❌ CLOSE */}
            <button
              onClick={() => {
                setIsRunning(false);
                setActiveWorkout(null);
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✖
            </button>

            <h2 className="text-xl font-bold mb-2">
              {activeWorkout.title} 🔥
            </h2>

            <p className="text-gray-400">
              {Math.floor(timeElapsed / 60)}:
              {String(timeElapsed % 60).padStart(2, "0")}
            </p>

            <p className="text-[#00F2FF] text-2xl font-bold mt-2">
              {Math.floor(caloriesBurned)} kcal burned
            </p>

            {/* PROGRESS */}
            <div className="mt-4 bg-gray-800 h-2 rounded-full">
              <div
                className="bg-[#00F2FF] h-2 rounded-full"
                style={{
                  width: `${
                    (timeElapsed /
                      (parseInt(activeWorkout.time) * 60)) *
                    100
                  }%`,
                }}
              ></div>
            </div>

            {/* ⏯ CONTROLS */}
            <div className="mt-4 flex gap-3">
              {isRunning ? (
                <button
                  onClick={handlePause}
                  className="bg-yellow-500 px-4 py-2 rounded-xl"
                >
                  Pause
                </button>
              ) : (
                <button
                  onClick={handleResume}
                  className="bg-green-500 px-4 py-2 rounded-xl"
                >
                  Resume
                </button>
              )}
            </div>

          </div>
        )}

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exercises.map((ex, index) => (
            <div key={index} className="bg-[#111] group rounded-[2.5rem] p-8 border border-white/5 hover:border-[#00F2FF]/30 transition-all relative overflow-hidden">

              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100">
                <Zap className="text-[#00F2FF]" size={40} />
              </div>

              <h3 className="text-2xl font-black uppercase italic mb-6">
                {ex.title}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock size={16} /> {ex.time} min
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Flame size={16} /> {ex.burn} KCAL
                </div>
              </div>

              <button
                onClick={() => handleStart(ex)}
                className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#00F2FF]"
              >
                <Play size={18} fill="black" /> Start Session
              </button>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Workouts;