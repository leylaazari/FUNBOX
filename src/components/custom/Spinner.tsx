const Spinner = () => {
  return (
    <div className="d-flex justify-content-center spinner-container">
      <div
        className="spinner-border text-secondary"
        style={{ width: "7rem", height: "7rem" }}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
