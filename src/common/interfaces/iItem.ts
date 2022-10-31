import { ListType } from "../enums/ListType";

export interface iItem{
  adult: boolean,
  backdrop_path: string,
  id: number,
  original_language:string,
  original_title:string,
  overview:string,
  popularity:number,
  poster_path:string,
  release_date:string,
  title:string,
  video: boolean,
  vote_average:number,
  vote_count:number,
  isFavourite:boolean,
  isWatchLater:boolean
}

export interface iItemListProps{
  items: iItem[];
  type: ListType;
}

export interface iItemProps{
  item: iItem; 
  type: ListType;
  toggleFavourite: (action: boolean, item: iItem) => void,
  toggleWatchList: (action: boolean, item: iItem) => void
}



