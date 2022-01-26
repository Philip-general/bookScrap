import axios from "axios";
import { bookSearchForm } from "../../types/type";
import config from "../constants/config";

export const useGetBooks = async (bookName: string): Promise<any> => {
  // console.log(bookName);
  const res = await axios({
    method: "get",
    url: `https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=5&query=${bookName}`,
    headers: {
      Authorization: `KakaoAK ${config.KAKAO_BOOK_SEARCH_API_KEY}`,
    },
  });
  // console.log("useGetBooks 실행");
  const books: [] = res.data.documents;

  return books;
};
