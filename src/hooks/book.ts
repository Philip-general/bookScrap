import { useQuery } from "react-query";
import axios from "axios";
import config from "../constants/config";
import { bookData } from "../../types/type";

type books = Array<bookData>;

const getBooks = async (bookName: string): Promise<books> => {
  const { data } = await axios({
    method: "get",
    url: `https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=5&query=${bookName}`,
    headers: {
      Authorization: `KakaoAK ${config.KAKAO_BOOK_SEARCH_API_KEY}`,
    },
  });

  const books: books = data.documents;

  return books;
};

export const useGetBooks = (bookName: string) => {
  const { data, isLoading, isError, refetch } = useQuery<books, any>(
    ["searchedBooks", bookName],
    () => getBooks(bookName)
  );
  return { data, isLoading, isError, refetch };
};
