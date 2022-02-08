import { useQuery } from "react-query";
import axios from "axios";
import config from "../constants/config";
import { bookData } from "../../types/type";

type books = Array<bookData>;

export const getBooks = async (bookName: string): Promise<books> => {
  console.log("getbooks실행");
  const { data } = await axios({
    method: "get",
    // 실제 연결시에는 url ``으로 변경 필요
    url: "https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=5&query=${bookName}",
    headers: {
      Authorization: `KakaoAK ${config.KAKAO_BOOK_SEARCH_API_KEY}`,
    },
  });

  const books: books = data.documents;

  return books;
};

export const useGetBooks = (bookName: string) => {
  return useQuery<books, any>(
    ["searchedBooks", bookName],
    () => getBooks(bookName),
    {
      enabled: Boolean(bookName),
    }
  );
};
