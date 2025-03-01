import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { useState } from "react";
import { generateWorkout } from "./utils/functions";
import * as motion from "motion/react-client";
import Test from "./components/Test";

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("");

  const updateWorkout = async () => {
    if (!poison || !muscles.length || !goals) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goal: goals });

    await setWorkout(newWorkout);

    if (workout) {
      window.location.href = "#workout";
    }
  };
  return (
    <motion.main className="flex flex-col min-h-screen text-sm text-white sm:text-base bg-slate-950">
      <Hero />
      <Test />
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
      <div className="h-20" />
    </motion.main>
  );
}

export default App;
