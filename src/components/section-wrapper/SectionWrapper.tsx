import { ISectionWrapperProps } from "src/common/interfaces";
import CustomImage from "../custom/CustomImage";
import "./style/style.scss";

const SectionWrapper = ({ img, title, desc }: ISectionWrapperProps) => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 main-card">
        <div className="d-flex Justify-content-Space-lg-Around">
          <div className="flex-shrink-1 flex-sm-{grow|shrink}-0 p-2">
            <CustomImage
              src={img}
              alt={"kids"}
              className="w100"
              data-testid="backdrop_path"
            />
          </div>
          <div className="main-card-title flex-shrink-1 flex-sm-{grow|shrink}-0 ml-lg-5 p-lg-5 p-2">
            <h3 className="mb-3" data-testid="title">
              {title}
            </h3>
            <h5 data-testid="desc">{desc}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
