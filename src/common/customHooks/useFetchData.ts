import { useEffect, useState } from "react";
import LocalSevice from "src/utils/api/LocalSevice";
import { iItem } from "src/common/interfaces";

const useFetchData = (type: string) =>  {
    const [filmsList, setFilmsList] = useState<iItem[]>([]);

  useEffect(() => {
    const data = async () => {
        let list = await LocalSevice.getDataFromLS(type);

        if (list) {
            setFilmsList(list);
        } else {
            setFilmsList([]);
        }
      };
  
      data();
  }, [type]);

  return filmsList;
};

export default useFetchData;
