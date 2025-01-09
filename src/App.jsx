import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { useState } from "react";
import { generateWorkout } from "./utils/functions";

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("");

  const updateWorkout = () => {
    if (!poison || !muscles.length || !goals) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goal: goals });

    setWorkout(newWorkout);

    window.location.href = "#workout";
  };
  return (
    <main className="flex flex-col min-h-screen text-sm text-white bg-gradient-to-r from-slate-800 to-slate-950 sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goals={goals}
        setGoals={setGoals}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
