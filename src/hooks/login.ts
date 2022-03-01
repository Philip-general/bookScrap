import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { useMutation } from 'react-query';
import { BASE_URL, LOGIN, REFRESH } from './urls/url';

type loginResult = {
  ok: boolean;
  accessToken?: string;
  exp?: string;
  error?: string;
};

type loginInfo = {
  email: string;
  password: string;
};

export const loginEmail = async ({
  email,
  password,
}: loginInfo): Promise<loginResult> => {
  const { data: loginResult }: { data: loginResult } = await axios({
    method: 'post',
    baseURL: BASE_URL,
    url: LOGIN,
    data: {
      email,
      password,
    },
  });
  if (loginResult.ok) {
    console.log('onLoginSuccess 실행');
    onLoginSuccess(loginResult);
  }

  return loginResult;
};

const onSilentRefresh = async () => {
  const { data } = await axios({
    method: 'post',
    baseURL: BASE_URL,
    url: REFRESH,
  });
};

const onLoginSuccess = async (response: loginResult) => {
  const { accessToken, exp } = response;

  // accessToken 설정
  axios.defaults.headers.common['accessToken'] = `${accessToken}`;

  // accessToken 만료하기 1분 전에 로그인 연장
  const JWT_EXPIRY_TIME = Number(exp) * 60 * 1000;
  const ONE_MINUTE = 1 * 60 * 1000;
  const timer = setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - ONE_MINUTE);

  // 설정된 timer는 JWT만료시간이 되면 clearTimeout으로 해제된다.
  setTimeout(() => {
    clearTimeout(timer);
  }, JWT_EXPIRY_TIME);
};

export const useLoginMutation = () => {
  return useMutation(loginEmail);
};
