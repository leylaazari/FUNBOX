import { useEffect, useState } from "react";
import LocalSevice from "src/utils/api/LocalSevice";
import { IItem } from "src/common/interfaces";

const useFetchData = (type: string) =>  {
    const [filmsList, setFilmsList] = useState<IItem[]>([]);

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
