import axios from 'axios'
import { useMutation } from 'react-query'
import { bookData, mutationResult } from '../../types/type'
import { BASE_URL, MAKE_SCRAPBOOK } from './urls/url'

const addScrapBookMutation = async (Props: bookData): Promise<mutationResult> => {
  const { data } = await axios({
    method: 'post',
    baseURL: BASE_URL,
    url: MAKE_SCRAPBOOK,
    data: {
      ...Props
    },
  })
  const mutationResult = data
  return mutationResult
}

export const useAddScrapMutation = () => {
  return useMutation(addScrapBookMutation)
}
