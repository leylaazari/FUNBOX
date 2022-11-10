import { IItem } from "./IListItems";
import { PopularHeaderType } from "src/common/enums/PopularHeaderType";

export interface IPopularContainerprops {
    type: PopularHeaderType
}

export interface IStringProps {
    title: string
}

export interface IItemPopularProps{
    item: IItem;
  }
  