import { CSSProperties } from "react";
import { ListType } from "../enums/ListType";

export interface IItem{
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

export interface IItemListProps{
  items: IItem[];
  type: ListType;
}

export interface IItemProps{
  items: IItem[];
  type: ListType;
  toggleFavourite: (action: boolean, item: IItem) => void;
  toggleWatchList: (action: boolean, item: IItem) => void;
}

export interface IRowItemProps {
  data: IItemProps;
  index: number;
  style?: CSSProperties;
}



