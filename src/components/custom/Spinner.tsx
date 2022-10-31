import Loading from "src/assets/images/Loading.gif";

const Spinner = () => {
  return (
    <div className="c-loader-container">
      <img className="c-imgLoading" src={Loading} loading="lazy" />
    </div>
  );
};

export default Spinner;
