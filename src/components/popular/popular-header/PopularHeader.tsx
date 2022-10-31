import { iStringProps } from "src/common/interfaces";

const PopularHeader = ({ title }: iStringProps) => {
  return (
    <div className="d-flex Justify-content-flex-start mt-5 mb-4">
      <div className="popular-header" data-testid="popular-header-title">
        {title}
      </div>
    </div>
  );
};

export default PopularHeader;
