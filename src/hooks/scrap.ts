import { useQuery } from "react-query";
import axios from "axios";
import { ScrapbookData  } from "../../types/type";
import { BASE_URL, MAKE_SCRAPBOOK } from "./urls/url";

const limit=10
const offset=1
//Scrap한거 불러오는 거
export const getScrap = async(scrapbookId:number)=>{
  const response = await axios({
      method:"get",
      baseURL: BASE_URL,
      url:MAKE_SCRAPBOOK+`/${scrapbookId}`,
      params:{
        limit,
        offset,
      },
  })
  return response.data
};

export const useGetScrap = (scrapbookId:number) =>{
    return useQuery(
        ["searchedBooks",],
        () => getScrap(scrapbookId),
        {}
    );
}