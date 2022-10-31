import { iItem } from "./iItem";
import { PopularHeaderType } from "src/common/enums/PopularHeaderType";

export interface iPopularContainerprops {
    type: PopularHeaderType
}

export interface iStringProps {
    title: string
}

export interface iItemPopularProps{
    item: iItem;
  }
  