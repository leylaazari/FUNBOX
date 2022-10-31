import LocalSevice from "src/utils/api/LocalSevice";
import { iItem } from "../interfaces";

 const setFavouriteAndWatchStatus = async (data: iItem[]) => {
    let favourite = await LocalSevice.getFavouriteList();
    let watchList = await LocalSevice.getWatchList();

    const myNextList = [...data];

    if (favourite) {
      const favouriteArrayFiltered = data.filter((el: iItem) => {
        return favourite.some((f: iItem) => {
          return f.id === el.id;
        });
      });

      favouriteArrayFiltered.forEach((element: iItem) => {
        const itemSearch = myNextList.find((t: iItem) => t.id === element.id);
        if (itemSearch) {
          itemSearch.isFavourite = true;
        }
      });
    }

    if (watchList) {
      const watchArrayFiltered = data.filter((el: iItem) => {
        return watchList.some((f: iItem) => {
          return f.id === el.id;
        });
      });

      watchArrayFiltered.forEach((element: iItem) => {
        const itemSearch = myNextList.find((t: iItem) => t.id === element.id);
        if (itemSearch) {
          itemSearch.isWatchLater = true;
        }
      });
    }

    return myNextList;
  };

  export default setFavouriteAndWatchStatus;