import { useQuery } from "react-query";
import axios from "axios";
import config from "../constants/config";
import { bookData } from "../../types/type";
import { BASE_URL, SEARCH_BOOK } from './urls/url';

type books = Array<bookData>;

export const getBooks = async (bookName: string): Promise<books> => {
  const { data } = await axios({
    method: "get",
    baseURL: BASE_URL,
    url: SEARCH_BOOK,
    params:{
      name: bookName
    }
  });
  console.log("getbooks실행", data); 

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
