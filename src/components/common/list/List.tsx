import { useEffect, useState, useCallback, useMemo } from "react";
import {
  IItemListProps,
  IItem,
  ISizeForAutoSizer,
} from "src/common/interfaces";
import ListItems from "./ListItems";
import LocalSevice from "src/utils/api/LocalSevice";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import "../style/Style.scss";

const List = (props: IItemListProps) => {
  const [filmsList, setFilmsList] = useState<IItem[]>([]);
  const { items, type } = props;

  useEffect(() => {
    setFilmsList(items);
  }, [items]);

  const toggleFavourite = useCallback(
    (action: boolean, item: IItem) => {
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
    },
    [filmsList]
  );

  const toggleWatchList = useCallback(
    (action: boolean, item: IItem) => {
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
    },
    [filmsList]
  );

  const itemData = useMemo(
    () => ({
      items,
      type,
      toggleFavourite,
      toggleWatchList,
    }),
    [items, type, toggleFavourite, toggleWatchList]
  );

  return items && items?.length > 0 ? (
    <div className="row">
      <div className="col-12">
        <div style={{ height: "100vh", width: "100vw" }}>
          <AutoSizer>
            {({ height, width }: ISizeForAutoSizer) => (
              <FixedSizeList
                itemData={itemData}
                innerElementType="ul"
                itemCount={items.length}
                itemSize={250}
                height={height}
                width={width}
                className="header-search-result-wrapper"
              >
                {(props) => <ListItems  {...props} />}
              </FixedSizeList>
            )}
          </AutoSizer>
        </div>
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
