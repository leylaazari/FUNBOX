import { IItemPopularProps } from "src/common/interfaces";
import CustomImageFromApi from "src/components/custom/CustomImageFromApi";

const Popular = ({ item }: IItemPopularProps) => {
  return (
    <div
      data-testid="item-list"
      role="button"
      className="d-flex flex-column justify-content-between align-items-start item-movie pointer"
    >
      <div className="w-100">
        <a href="/">
          <CustomImageFromApi
            data-testid="backdrop_path"
            src={item.backdrop_path}
            alt={item.original_title}
            className="flex-shrink-1 flex-sm-{grow|shrink}-0 "
          />
        </a>
      </div>
      <div className="flex-shrink-1 flex-sm-{grow|shrink}-0 ">
        <span data-testid="original_title">{item.original_title}</span>
        <p data-testid="release_date">{item.release_date}</p>
      </div>
    </div>
  );
};

export default Popular;
