import React from "react";
import { areEqual } from "react-window";
import {
  Heart,
  HeartFill,
  BookmarkPlus,
  BookmarkPlusFill,
} from "react-bootstrap-icons";
import { IRowItemProps } from "src/common/interfaces";
import CustomImageFromApi from "../../custom/CustomImageFromApi";
import { ListType } from "src/common/enums/ListType";

const ListItems = (props: IRowItemProps) => {
  const { data, index, style } = props;
  const { items, toggleFavourite, toggleWatchList, type } = data || {};

  return type === ListType.Search ||
    (type === ListType.Favourite && items[index].isFavourite) ||
    (type === ListType.Watch && items[index].isWatchLater) ? (
    <li data-testid="item-list" style={style} key={items[index].id}>
      <a href="#" data-type="movies" data-id={items[index].id}>
        <div className="d-flex flex-sm-column flex-lg-row flex-xl-row  flex-xs-column item-list">
          <div className="left-side flex-lg-{grow|shrink}-1 ">
            <CustomImageFromApi
              data-testid="backdrop_path"
              src={items[index].backdrop_path}
              alt={items[index].original_title}
              className="w100"
            />
          </div>
          <div className=" right-side">
            <div className="d-flex">
              <div className="w-100">
                <h2 className="movie-title" data-testid="original_title">
                  {items[index].original_title}
                </h2>
              </div>
              <div className="flex-shrink-2 p-2">
                <div className="d-flex">
                  {type === ListType.Search || type === ListType.Favourite ? (
                    !items[index].isFavourite ? (
                      <Heart
                        className="heart"
                        data-testid="heart"
                        color="gray"
                        size={30}
                        title="add to favourite"
                        onClick={() => toggleFavourite(true, items[index])}
                      />
                    ) : (
                      <HeartFill
                        className="heart"
                        data-testid="heart"
                        color="rgb(161, 7, 7)"
                        size={30}
                        title="delete from favourite"
                        onClick={() => toggleFavourite(false, items[index])}
                      />
                    )
                  ) : (
                    <></>
                  )}
                  {type === ListType.Search || type === ListType.Watch ? (
                    !items[index].isWatchLater ? (
                      <BookmarkPlus
                        className="watch"
                        data-testid="watch"
                        color="gray"
                        size={30}
                        title="add to watch later"
                        onClick={() => toggleWatchList(true, items[index])}
                      />
                    ) : (
                      <BookmarkPlusFill
                        className="watch"
                        data-testid="watch"
                        color="rgb(55, 129, 55)"
                        size={30}
                        title="delete from watch later"
                        onClick={() => toggleWatchList(false, items[index])}
                      />
                    )
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="movie-details" data-testid="release_date">
              {items[index].release_date}
            </div>
            <div className="movie-details" data-testid="popularity">
              popularity : {items[index].popularity}
            </div>
            <div className="movie-details" data-testid="vote_average">
              vote_average : {items[index].vote_average}
            </div>
            <div className="movie-description" data-testid="overview">
              {items[index].overview}
            </div>
          </div>
        </div>
      </a>
    </li>
  ) : (
    <></>
  );
};

export default React.memo(ListItems, areEqual);
