import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";
import PropTypes from "prop-types";

const Workout = ({ workout }) => {
  return (
    <SectionWrapper
      id="workout"
      header={"Generate your workout"}
      title={["THE", "DANGER", `ZONE`]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} i={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

Workout.propTypes = {
  workout: PropTypes.array,
};

export default Workout;
