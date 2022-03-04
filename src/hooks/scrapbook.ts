import { useQuery } from "react-query";
import axios from "axios";
import { ScrapbookData  } from "../../types/type";
import { BASE_URL, MAKE_SCRAPBOOK, SCRAPBOOKS } from "./urls/url";
type books = Array<ScrapbookData>;
export const getScrapbook = async()=>{
    const response = await axios({
        method:"get",
        baseURL: BASE_URL,
        url:SCRAPBOOKS,
    })

    const book : books = response.data;
    return book
};
export const useGetScrapBooks = () => {
    return useQuery<books,any>(
      ["searchedBooks",],
      () => getScrapbook(),
      {}
    );
};

export const deleteScrapBooks = async(scrapbookId:number) => {
  const reponse = await axios({
    method:"DELETE",
    baseURL:BASE_URL,
    url: MAKE_SCRAPBOOK+`/${scrapbookId}`
  })
};

export const updateScrapBooks = async(scrapbookId:number)=>{
  const response = await axios({
    method:"PATCH",
    baseURL: BASE_URL,
    url:MAKE_SCRAPBOOK+`/${scrapbookId}`
  })
}