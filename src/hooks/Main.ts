import { useQuery } from "react-query";
import axios from "axios";
import { bookData } from "../../types/type";
import { BASE_URL, BOOK } from "./urls/url";
type books = Array<bookData>;
export const getScrapbook = async(userId:number)=>{
    const response = await axios({
        method:"get",
        url:`${BASE_URL}${userId}${BOOK}`
    })

    const book : books = response.data;
    return book
};
export const useScrapBooks = (userId:number) => {
    return useQuery<books,any>(
      ["searchedBooks", userId],
      () => getScrapbook(userId),
      {
        enabled: !!userId,
      }
    );
  };