import "./style/intro.scss";
import Spinner from "src/components/custom/Spinner";

const Intro = () => {
  return (
    <>
      <div className="section-wrapper wrappper-intro">
        <div data-testid="imageContainer" className="imageContainer"></div>
      </div>
    </>
  );
};

export default Intro;
