import { useQuery } from "react-query";
import axios from "axios";
import { ScrapbookData  } from "../../types/type";
import { BASE_URL, SCRAPBOOKS } from "./urls/url";
type books = Array<ScrapbookData >;
export const getScrapbook = async()=>{
    const response = await axios({
        method:"get",
        baseURL: BASE_URL,
        url:SCRAPBOOKS,
    })

    const book : books = response.data;
    return book
};
export const useScrapBooks = () => {
    return useQuery<books,any>(
      ["searchedBooks",],
      () => getScrapbook(),
      {}
    );
};

export const useDeleteScrapBooks = async(scrapbookId:number) => {
  const reponse = await axios({
    method:"DELETE",
    url:`${BASE_URL}${SCRAPBOOKS}/${scrapbookId}`
  })
};