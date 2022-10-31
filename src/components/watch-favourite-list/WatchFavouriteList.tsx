import { Suspense } from "react";
import List from "src/components/common/list/List";
import Spinner from "src/components/custom/Spinner";
import useFetchData from "src/common/customHooks/useFetchData";
import { iStringProps } from "src/common/interfaces";
import Header from "./Header";
import "./style/style.scss";
import { ListType } from "src/common/enums/ListType";

const WatchFavouriteList = ({ title }: iStringProps) => {
  let filmsList = useFetchData(title);

  return (
    <>
      <Header title={title} />
      <Suspense fallback={<Spinner />}>
        {filmsList && (
          <List
            items={filmsList}
            type={title === "favourite" ? ListType.Favourite : ListType.Watch}
          />
        )}
      </Suspense>
    </>
  );
};

export default WatchFavouriteList;
