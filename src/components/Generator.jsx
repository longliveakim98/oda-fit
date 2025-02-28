import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";
import SectionWrapper from "./SectionWrapper";
import PropTypes from "prop-types";
import { useState } from "react";

const Header = ({ index, title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl font-semibold sm:text-4xl md:text-5xl text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="mx-auto text-sm sm:text-base">{description}</p>
    </div>
  );
};

Header.propTypes = {
  index: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

const Generator = ({
  poison,
  setPoison,
  muscles,
  setMuscles,
  goals,
  setGoals,
  updateWorkout,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const updateMuscles = (muscle) => {
    if (muscles.includes(muscle)) {
      setMuscles(muscles.filter((m) => m !== muscle));
      return;
    }
    if (muscles.length > 2) {
      return;
    }
    if (poison !== "individual") {
      setMuscles([muscle]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscle]);

    if (muscles.length === 2) {
      setShowModal(false);
    }
  };
  return (
    <SectionWrapper
      header={"Generate your workout"}
      title={[`It's`, "Huge", `o'clock`]}
      id={"generate"}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure"}
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 ">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              className={
                "py-3 px-4 duration-200 border border-blue-400 rounded-lg bg-slate-950 hover:bg-blue-400 hover:text-slate-950" +
                (type === poison ? "  text-blue-400" : "")
              }
              key={typeIndex}
              onClick={() => {
                setPoison(type);
                setMuscles([]);
              }}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation"}
      />
      <div className="flex flex-col border border-blue-400 border-solid rounded-lg bg-slate-950">
        <button
          className="relative flex items-center justify-center p-3"
          onClick={() => toggleModal()}
        >
          <p className="capitalize ">
            {muscles.length > 0 ? muscles.join(", ") : "Select muscle group"}
          </p>
          <i className="absolute -translate-y-1/2 fa-solid fa-caret-down right-3 top-1/2 "></i>
        </button>
        {showModal && (
          <>
            {!poison ? (
              <div className="p-3 mx-auto">Choose your poison first</div>
            ) : (
              <div className="flex flex-col gap-4 p-3">
                {poison === "individual"
                  ? WORKOUTS.individual.map((muscle, muscleIndex) => {
                      return (
                        <button
                          className={
                            "py-3 duration-200 rounded-lg bg-slate-950 hover:bg-blue-400 hover:text-slate-950" +
                            (muscles.includes(muscle) ? "  text-blue-400" : "")
                          }
                          key={muscleIndex}
                          onClick={() => updateMuscles(muscle)}
                        >
                          <p className="capitalize">{muscle}</p>
                        </button>
                      );
                    })
                  : Object.keys(WORKOUTS[poison]).map(
                      (muscleGroup, muscleGroupIndex) => {
                        return (
                          <button
                            className={
                              "py-3 duration-200 rounded-lg bg-slate-950 hover:bg-blue-400 hover:text-slate-950" +
                              (muscles.includes(muscleGroup)
                                ? " text-blue-400"
                                : "")
                            }
                            key={muscleGroupIndex}
                            onClick={() => updateMuscles(muscleGroup)}
                          >
                            <p className="capitalize">{muscleGroup}</p>
                          </button>
                        );
                      }
                    )}
              </div>
            )}
          </>
        )}
      </div>

      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              className={
                "py-3 px-4 duration-200 border border-blue-400 rounded-lg bg-slate-950 hover:bg-blue-400 hover:text-slate-950" +
                (scheme === goals ? " text-blue-400" : "")
              }
              key={schemeIndex}
              onClick={() => setGoals(scheme)}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout}>Formulate</Button>
    </SectionWrapper>
  );
};

Generator.propTypes = {
  poison: PropTypes.string,
  setPoison: PropTypes.func,
  muscles: PropTypes.array,
  setMuscles: PropTypes.func,
  goals: PropTypes.string,
  setGoals: PropTypes.func,
  updateWorkout: PropTypes.func,
};
export default Generator;
