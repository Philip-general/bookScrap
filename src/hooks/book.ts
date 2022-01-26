import axios from "axios";
import { bookSearchForm } from "../../types/type";
import config from "../constants/config";

export const useGetBooks = async (bookName: string): Promise<any> => {
  console.log(bookName);
  const res = await axios({
    method: "get",
    // url: '/v3/search/book',
    url: `https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&query=${bookName}`,
    headers: {
      Authorization: `KakaoAK ${config.KAKAO_BOOK_SEARCH_API_KEY}`,
    },
  });
  console.log("useGetBooks 실행");
  const books = res.data.documents;
  // books.forEach((book: { title: string; authors: []; thumbnail: string }) => {
  //   console.log(book.title, book.authors, book.thumbnail);
  // });
  return books;
};
