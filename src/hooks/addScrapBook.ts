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

  const loginResult = data
  // console.log('로그인결과입니다.', loginResult)
  return loginResult
}

export const useAddScrapMutation = () => {
  return useMutation(addScrapBookMutation)
}
