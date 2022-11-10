import { IStringProps } from "src/common/interfaces";

const PopularHeader = ({ title }: IStringProps) => {
  return (
    <div className="d-flex Justify-content-flex-start mt-5 mb-4">
      <div className="popular-header" data-testid="popular-header-title">
        {title}
      </div>
    </div>
  );
};

export default PopularHeader;
