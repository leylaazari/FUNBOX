import { Suspense, useState } from "react";
import SearchBox from "./SearchBox";
import List from "src/components/common/list/List";
import ThemoviedbAPIService from "src/utils/api/ThemoviedbAPIService";
import { IItem } from "src/common/interfaces";
import { SearchType } from "src/common/types";
import Spinner from "src/components/custom/Spinner";
import { ListType } from "src/common/enums/ListType";
import SetFavouriteAndWatchStatus from "src/common/functions/SetFavouriteAndWatchStatus";

const SearchContainer = () => {
  const [filmsList, setFilmsList] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmitForm = async (data: SearchType) => {
    setIsLoading(true);
    let list = await ThemoviedbAPIService.getSearchByName(data.searchText);

    if (list) {
      let result = list?.results.filter((t: IItem) => t.backdrop_path != null);
      setFilmsList(await SetFavouriteAndWatchStatus(result));
    } else {
      setFilmsList([]);
    }
    setIsLoading(false);
  };

  return (
    <>
      <SearchBox handleSubmitForm={handleSubmitForm} />
      {isLoading && <Spinner />}
      {filmsList && !isLoading && (
        <Suspense fallback={<Spinner />}>
          <List items={filmsList} type={ListType.Search} />
        </Suspense>
      )}
    </>
  );
};

export default SearchContainer;
