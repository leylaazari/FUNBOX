import BaseRequest from "./BaseRequest";
import { API_KEY } from "src/constants/configs";
import { PopularHeaderType } from "src/common/enums/PopularHeaderType";

const ThemoviedbAPIService = { 
  getHighestRatedMovies: async () => {
    const res = await BaseRequest("/discover/movie/" ,"GET" ,
    {
      sort_by:"popularity.desc",
      api_key: API_KEY
    });
    return res;
  },
  getHighestRatedChild: async () => {
    const res = await BaseRequest("/discover/movie/" ,"GET" ,
    {
      certification_country: "US",
      "certification.lte": "G",
      sort_by:"popularity.desc",
      api_key: API_KEY
    });
    return res;
  } , 
  getHighestRatedMovies2010: async () => {
    const res = await BaseRequest("/discover/movie/" ,"GET" ,
    {
      primary_release_year: "2010",
      sort_by:"vote_average.desc",
      api_key: API_KEY
    });
    return res;
  }, getHighestRated: async (type : PopularHeaderType) => {
    if (type === PopularHeaderType.movie){
      return await ThemoviedbAPIService.getHighestRatedMovies();
    }else if (type === PopularHeaderType.kids){
      return await ThemoviedbAPIService.getHighestRatedChild();
    }else {
      return await ThemoviedbAPIService.getHighestRatedMovies2010();
    }
    },    
    getSearchByName: async (name : string) => {
      const res = await BaseRequest("/search/movie/" ,"GET" ,
      {
        query: name,
        api_key: API_KEY
      });
      return res;
    }, 
};

export default ThemoviedbAPIService;
