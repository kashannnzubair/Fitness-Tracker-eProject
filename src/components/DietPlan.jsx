import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Search, Flame, Plus, Trash2 } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const DietPlan = () => {
  const [totalCals, setTotalCals] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [foundCalories, setFoundCalories] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [mealType, setMealType] = useState("Breakfast");
  const [meals, setMeals] = useState([]);

  const dailyGoal = 2000;

  const chartData = [
    {
      name: "Breakfast",
      value: meals
        .filter(m => m.type === "Breakfast")
        .reduce((a, b) => a + b.calories, 0),
    },
    {
      name: "Lunch",
      value: meals
        .filter(m => m.type === "Lunch")
        .reduce((a, b) => a + b.calories, 0),
    },
    {
      name: "Dinner",
      value: meals
        .filter(m => m.type === "Dinner")
        .reduce((a, b) => a + b.calories, 0),
    },
    {
      name: "Snacks",
      value: meals
        .filter(m => m.type === "Snacks")
        .reduce((a, b) => a + b.calories, 0),
    },
  ];

  // Fake DB
  const foodDatabase = {
    banana: 105,
    egg: 78,
    "chicken breast": 165,
    rice: 205,
    biryani: 450,
    apple: 95,
    roti: 120,
    milk: 150,
    oats: 150,
  };

  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();
    if (foodDatabase[query]) {
      setFoundCalories(foodDatabase[query]);
    } else {
      setFoundCalories(0);
    }
  }, [searchQuery]);

  // Add Meal
  const handleAddMeal = () => {
    if (foundCalories > 0) {
      const newMeal = {
        id: Date.now(),
        name: searchQuery,
        calories: foundCalories * quantity,
        quantity: quantity,
        type: mealType,
        time: new Date().toLocaleTimeString(),
      };

      setMeals([...meals, newMeal]);
      setTotalCals(prev => prev + newMeal.calories);

      setSearchQuery("");
      setFoundCalories(0);
      setQuantity(1);
    }
  };

  // Delete Meal
  const handleDelete = (id, calories) => {
    setMeals(meals.filter(meal => meal.id !== id));
    setTotalCals(prev => prev - calories);
  };

  const progress = (totalCals / dailyGoal) * 100;

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />

      <main className="pt-28 px-4 md:px-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-black italic uppercase">
              SMART <span className="text-[#00F2FF]">DIET</span>
            </h1>
            <p className="text-gray-500 text-xs uppercase mt-2 tracking-widest">
              Track your daily calories smartly
            </p>
          </div>

          <div className="bg-[#111] p-5 rounded-2xl border border-[#00F2FF]/20 w-full md:w-64">
            <p className="text-xs text-gray-500 uppercase">Total Intake</p>
            <h2 className="text-2xl font-bold text-[#00F2FF]">
              {totalCals} KCAL
            </h2>

            {/* Progress Bar */}
            <div className="mt-3 w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-[#00F2FF] h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <p className="text-xs text-gray-500 mt-1">
              Goal: {dailyGoal} kcal
            </p>
          </div>
        </div>

        {/* INPUT CARD */}
        <div className="bg-[#111] p-6 md:p-10 rounded-3xl mb-10">

          <div className="flex flex-col gap-4">

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black border border-white/10 p-4 pl-12 rounded-xl outline-none"
              />
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-3">

              {/* Quantity */}
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="bg-black border border-white/10 p-3 rounded-xl w-full md:w-24"
              />

              {/* Meal Type */}
              <select
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
                className="bg-black border border-white/10 p-3 rounded-xl w-full md:w-40"
              >
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snacks</option>
              </select>

              {/* Add Button */}
              <button
                onClick={handleAddMeal}
                disabled={foundCalories === 0}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold
                  ${foundCalories > 0
                    ? "bg-[#00F2FF] text-black"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
              >
                <Plus size={18} /> Add
              </button>
            </div>

            {/* Calories Preview */}
            {searchQuery && (
              <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                <p className="text-sm text-gray-400">
                  Calories:{" "}
                  <span className="text-white font-bold">
                    {foundCalories > 0
                      ? foundCalories * quantity
                      : "Not Found"}
                  </span>
                </p>
                <Flame className="text-[#00F2FF]" />
              </div>
            )}

          </div>
        </div>

        {/* MEAL LIST */}
        <div>
          <h2 className="text-xl font-bold mb-4">Today's Meals</h2>

          {meals.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No meals added yet 🍽️
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {meals.map(meal => (
                <div
                  key={meal.id}
                  className="bg-[#111] p-4 rounded-xl flex justify-between items-center"
                >
                  <div>
                    <p className="font-bold capitalize">
                      {meal.name}
                      <span className="text-sm text-gray-400 ml-2">
                        × {meal.quantity}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">
                      {meal.type} • {meal.time}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-[#00F2FF] font-bold">
                      {meal.calories} kcal
                    </span>

                    <button
                      onClick={() =>
                        handleDelete(meal.id, meal.calories)
                      }
                      className="text-red-500 hover:scale-110"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>
    </div>
  );
};

export default DietPlan;