import { iItem } from "src/common/interfaces";

const LocalSevice = { 
  getFavouriteList: async () => {
    let res: iItem[] = JSON.parse(localStorage.getItem("favouriteList") || "[]");
    return res;
  },
  getWatchList: async () => {
    let res: iItem[] = JSON.parse(localStorage.getItem("watchList") || "[]");
    return res;
  
  }, getDataFromLS: async (type : string) => {
    if (type === "favourite"){
      return await LocalSevice.getFavouriteList();
    }else {
      return await LocalSevice.getWatchList();
    }
  },
  addToFavouriteList: async (item: iItem) => {
    let res: iItem[] = JSON.parse(localStorage.getItem("favouriteList") || "[]");
    res.push(item);
    localStorage.setItem("favouriteList", JSON.stringify(res));
  },
  addToWatchList: async (item: iItem) => {
    let res: iItem[] = JSON.parse(localStorage.getItem("watchList") || "[]");
    res.push(item);
    localStorage.setItem("watchList", JSON.stringify(res));
  },
  deleteFromFavouriteList: async (itemId: number) => {
    let res: iItem[] = JSON.parse(localStorage.getItem("favouriteList") || "[]");    
    localStorage.setItem("favouriteList", JSON.stringify([...res.filter(t => t.id !== itemId)]));
  },
  deleteFromWatchList: async (itemId: number) => {
    let res: iItem[] = JSON.parse(localStorage.getItem("watchList") || "[]");    
    localStorage.setItem("watchList", JSON.stringify([...res.filter(t => t.id !== itemId)]));
  }
};

export default LocalSevice;
