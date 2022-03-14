import axios from 'axios'
import { useMutation } from 'react-query'
import { bookData, mutationResult } from '../../types/type'
import { BASE_URL, MAKE_SCRAPBOOK } from './urls/url'

const addScrapBookMutation = async (
  Props: bookData
): Promise<mutationResult> => {
  const { title, authors, publisher, contents, thumbnail, url } = Props;
  const authorsToString = authors.join(', ');
  const { data } = await axios({
    method: 'post',
    baseURL: BASE_URL,
    url: MAKE_SCRAPBOOK,
    data: {
      title,
      authors: authorsToString,
      publisher,
      contents,
      thumbnail,
      url,
    },
  });
  const mutationResult = data;
  return mutationResult;
};

export const useAddScrapMutation = () => {
  return useMutation(addScrapBookMutation)
}
