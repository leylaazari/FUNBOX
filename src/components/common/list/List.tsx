import { useEffect, useState } from "react";
import { iItemListProps, iItem } from "src/common/interfaces";
import ListItems from "./ListItems";
import LocalSevice from "src/utils/api/LocalSevice";
import "../style/Style.scss";

const List = ({ items, type }: iItemListProps) => {
  const [filmsList, setFilmsList] = useState<iItem[]>([]);

  useEffect(() => {
    setFilmsList(items);
  }, [items]);

  const toggleFavourite = (action: boolean, item: iItem) => {
    const myNextList = [...filmsList];
    const itemSearch = myNextList.find((t) => t.id === item.id);
    if (itemSearch) {
      itemSearch.isFavourite = action;
      setFilmsList(myNextList);

      if (action) {
        LocalSevice.addToFavouriteList(item);
      } else {
        LocalSevice.deleteFromFavouriteList(item.id);
      }
    }
  };

  const toggleWatchList = (action: boolean, item: iItem) => {
    const myNextList = [...filmsList];
    const itemSearch = myNextList.find((t) => t.id === item.id);
    if (itemSearch) {
      itemSearch.isWatchLater = action;
      setFilmsList(myNextList);

      if (action) {
        LocalSevice.addToWatchList(item);
      } else {
        LocalSevice.deleteFromWatchList(item.id);
      }
    }
  };

  return items && items?.length > 0 ? (
    <div className="row mt-5">
      <div className="col-xs-12">
        <ul
          className="d-flex flex-column justify-content-between align-items-center header-search-result-wrapper"
          data-testid="ul-list"
        >
          {items.map((item: iItem) => (
            <ListItems
              key={item?.id}
              item={item}
              type={type}
              toggleFavourite={toggleFavourite}
              toggleWatchList={toggleWatchList}
            />
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className="list-is-empty-container">
      <div className="list-is-empty">
        <span data-testid="empty-list">List is empty.</span>
      </div>
    </div>
  );
};

export default List;
