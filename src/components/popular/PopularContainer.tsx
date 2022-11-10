import { useEffect, useState, Suspense } from "react";
import ThemoviedbAPIService from "src/utils/api/ThemoviedbAPIService";
import Popular from "./Popular";
import PopularHeader from "./popular-header/PopularHeader";
import { IItem, IPopularContainerprops } from "src/common/interfaces";
import Spinner from "src/components/custom/Spinner";
import "./style/Popular.scss";

const PopularContainer = ({ type }: IPopularContainerprops) => {
  const [filmsList, setFilmsList] = useState<IItem[]>([]);

  useEffect(() => {
    const data = async () => {
      let list = await ThemoviedbAPIService.getHighestRated(type);

      if (list) {
        setFilmsList(
          list?.results
            .filter((t: IItem) => t.backdrop_path != null)
            .slice(0, 6)
        );
      } else {
        setFilmsList([]);
      }
    };

    data();
  }, []);

  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
        <div className="best_top-list d-flex flex-column justify-content-between align-items-start">
          <PopularHeader title={type} />
          <Suspense fallback={<Spinner />}>
            <div>
              <ul className="d-flex d-inline-flex justify-content-between align-items-center">
                {filmsList &&
                  filmsList.map((item: IItem) => (
                    <Popular key={item?.id} item={item} />
                  ))}
              </ul>
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default PopularContainer;
