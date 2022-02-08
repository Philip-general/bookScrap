import axios from 'axios'
import { useMutation } from 'react-query'
import { BASE_URL, LOGIN } from './urls/url'

type loginResult = {
  ok: boolean
  AccessToken?: string
  error?: string
}

type loginInfo = {
  email: string
  password: string
}

export const loginEmail = async ({
  email,
  password,
}: loginInfo): Promise<loginResult> => {
  console.log('loginEmail 실행')
  const { data } = await axios({
    method: 'post',
    baseURL: BASE_URL,
    url: LOGIN,
    data: {
      email,
      password,
    },
  })

  const loginResult = data
  console.log('로그인결과입니다.', loginResult)
  return loginResult
}

export const useLoginMutation = (email: string, password: string) => {
  return useMutation(loginEmail)
}
