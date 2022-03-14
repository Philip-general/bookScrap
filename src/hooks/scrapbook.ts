import { useQuery } from "react-query";
import axios from "axios";
import { ScrapbookData  } from "../../types/type";
import { BASE_URL, MAKE_SCRAPBOOK, SCRAPBOOKS, STAR } from "./urls/url";

const limit=5
const offset=0
export const getScrapbook = async()=>{
  const response = await axios({
      method:"get",
      baseURL: BASE_URL,
      url:SCRAPBOOKS,
      params:{
        limit,
        offset,
      },
  })
  return response.data
};    
    
export const useGetScrapBooks = () => {
    return useQuery(
      ["searchedBooks",],
      () => getScrapbook(),
      {}
    );
};

export const deleteScrapBooks = async(scrapbookId:number) => {
  const response = await axios({
    method:"DELETE",
    baseURL:BASE_URL,
    url: MAKE_SCRAPBOOK+`/${scrapbookId}`
  })
};

export const getStarScrapBooks = async(scrapbookId:number)=>{
  const response = await axios({
    method:"POST",
    baseURL: BASE_URL,
    url:MAKE_SCRAPBOOK+`/${scrapbookId}`+STAR
  })
  console.log(response)
}

export const deleteStarScrapBooks = async(scrapbookId:number)=>{
  const response = await axios({
    method:"DELETE",
    baseURL: BASE_URL,
    url:MAKE_SCRAPBOOK+`/${scrapbookId}`+STAR
  })
  console.log(response)
}
