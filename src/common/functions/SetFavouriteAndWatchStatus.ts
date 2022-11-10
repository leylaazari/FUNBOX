import LocalSevice from "src/utils/api/LocalSevice";
import { IItem } from "../interfaces";

 const setFavouriteAndWatchStatus = async (data: IItem[]) => {
    let favourite = await LocalSevice.getFavouriteList();
    let watchList = await LocalSevice.getWatchList();

    const myNextList = [...data];

    if (favourite) {
      const favouriteArrayFiltered = data.filter((el: IItem) => {
        return favourite.some((f: IItem) => {
          return f.id === el.id;
        });
      });

      favouriteArrayFiltered.forEach((element: IItem) => {
        const itemSearch = myNextList.find((t: IItem) => t.id === element.id);
        if (itemSearch) {
          itemSearch.isFavourite = true;
        }
      });
    }

    if (watchList) {
      const watchArrayFiltered = data.filter((el: IItem) => {
        return watchList.some((f: IItem) => {
          return f.id === el.id;
        });
      });

      watchArrayFiltered.forEach((element: IItem) => {
        const itemSearch = myNextList.find((t: IItem) => t.id === element.id);
        if (itemSearch) {
          itemSearch.isWatchLater = true;
        }
      });
    }

    return myNextList;
  };

  export default setFavouriteAndWatchStatus;