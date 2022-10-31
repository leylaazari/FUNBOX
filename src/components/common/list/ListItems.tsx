import {
  Heart,
  HeartFill,
  BookmarkPlus,
  BookmarkPlusFill,
} from "react-bootstrap-icons";
import { iItemProps } from "src/common/interfaces";
import CustomImageFromApi from "../../custom/CustomImageFromApi";
import { ListType } from "src/common/enums/ListType";

const ListItems = ({
  item,
  toggleFavourite,
  toggleWatchList,
  type,
}: iItemProps) => {
  return type === ListType.Search ||
    (type === ListType.Favourite && item.isFavourite) ||
    (type === ListType.Watch && item.isWatchLater) ? (
    <div className="row mt-5 w-100">
      <div className="col-xs-12">
        <li data-testid="item-list">
          <a href="#" data-type="movies" data-id={item.id}>
            <div className="d-flex flex-sm-column flex-lg-row flex-xl-row  flex-xs-column item-list">
              <div className="left-side flex-lg-{grow|shrink}-1 ">
                <CustomImageFromApi
                  data-testid="backdrop_path"
                  src={item.backdrop_path}
                  alt={item.original_title}
                  className="w100"
                />
              </div>
              <div className=" right-side">
                <div className="d-flex">
                  <div className="w-100">
                    <h2 className="movie-title" data-testid="original_title">
                      {item.original_title}
                    </h2>
                  </div>
                  <div className="flex-shrink-2 p-2">
                    <div className="d-flex">
                      {type === ListType.Search ||
                      type === ListType.Favourite ? (
                        !item.isFavourite ? (
                          <Heart
                            className="heart"
                            data-testid="heart"
                            color="gray"
                            size={30}
                            title="add to favourite"
                            onClick={() => toggleFavourite(true, item)}
                          />
                        ) : (
                          <HeartFill
                            className="heart"
                            data-testid="heart"
                            color="rgb(161, 7, 7)"
                            size={30}
                            title="delete from favourite"
                            onClick={() => toggleFavourite(false, item)}
                          />
                        )
                      ) : (
                        <></>
                      )}
                      {type === ListType.Search || type === ListType.Watch ? (
                        !item.isWatchLater ? (
                          <BookmarkPlus
                            className="watch"
                            data-testid="watch"
                            color="gray"
                            size={30}
                            title="add to watch later"
                            onClick={() => toggleWatchList(true, item)}
                          />
                        ) : (
                          <BookmarkPlusFill
                            className="watch"
                            data-testid="watch"
                            color="rgb(55, 129, 55)"
                            size={30}
                            title="delete from watch later"
                            onClick={() => toggleWatchList(false, item)}
                          />
                        )
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
                <div className="movie-details" data-testid="release_date">
                  {item.release_date}
                </div>
                <div className="movie-details" data-testid="popularity">
                  popularity : {item.popularity}
                </div>
                <div className="movie-details" data-testid="vote_average">
                  vote_average : {item.vote_average}
                </div>
                <div className="movie-description" data-testid="overview">
                  {item.overview}
                </div>
              </div>
            </div>
          </a>
        </li>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ListItems;
