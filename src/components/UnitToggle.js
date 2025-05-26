const UnitToggle = ({ unit, onToggle }) => {
  return (
    <button onClick={onToggle}>
      Switch to {unit === "metric" ? "°F" : "°C"}
    </button>
  );
};

export default UnitToggle;
