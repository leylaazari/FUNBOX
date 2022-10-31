import { Suspense, useState } from "react";
import SearchBox from "./SearchBox";
import List from "src/components/common/list/List";
import ThemoviedbAPIService from "src/utils/api/ThemoviedbAPIService";
import { iItem } from "src/common/interfaces";
import { SearchType } from "src/common/types";
import Spinner from "src/components/custom/Spinner";
import { ListType } from "src/common/enums/ListType";
import SetFavouriteAndWatchStatus from "src/common/functions/SetFavouriteAndWatchStatus";

const SearchContainer = () => {
  const [filmsList, setFilmsList] = useState<iItem[]>([]);

  const handleSubmitForm = async (data: SearchType) => {
    let list = await ThemoviedbAPIService.getSearchByName(data.searchText);

    if (list) {
      let result = list?.results.filter((t: iItem) => t.backdrop_path != null);
      setFilmsList(await SetFavouriteAndWatchStatus(result));
    } else {
      setFilmsList([]);
    }
  };

  return (
    <>
      <SearchBox handleSubmitForm={handleSubmitForm} />
      <Suspense fallback={<Spinner />}>
        {filmsList && <List items={filmsList} type={ListType.Search} />}
      </Suspense>
    </>
  );
};

export default SearchContainer;
