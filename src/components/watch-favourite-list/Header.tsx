import { IStringProps } from "src/common/interfaces";
import "./style/style.scss";

const Header = ({ title }: IStringProps) => {
  return (
    <div className="row ">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="list-wrapper">
          <div className="list-gradient d-flex flex-column justify-content-center align-items-center">
            <h2 data-testid="header-title">{title} list</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
