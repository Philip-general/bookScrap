import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { useMutation } from 'react-query';
import { BASE_URL, LOGIN, REFRESH } from './urls/url';

type loginResult = {
  ok: boolean;
  refreshToken: string;
  accessToken?: string;
  exp?: string;
  error?: string;
};

type loginInfo = {
  email: string;
  password: string;
};

const REFRESH_TOKEN = 'refreshToken';
const ACCESS_TOKEN = 'accessToken';

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

// refresh가 성공 혹은 만료된 상태이면 어떻게 응답이 오는지 정의 필요
export const onSilentRefresh = async () => {
  const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN);
  axios.defaults.headers.common[REFRESH_TOKEN] = `${refreshToken}`;

  axios({
    method: 'post',
    baseURL: BASE_URL,
    url: REFRESH,
  }).then(onLoginSuccess);
};

const onLoginSuccess = async (response: loginResult) => {
  const { accessToken, exp, refreshToken } = response;

  await AsyncStorage.setItem(REFRESH_TOKEN, refreshToken);

  // accessToken 설정
  axios.defaults.headers.common[ACCESS_TOKEN] = `${accessToken}`;
  axios.defaults.headers.common[REFRESH_TOKEN] = `${refreshToken}`;

  // accessToken 만료하기 1분 전에 로그인 연장
  const JWT_EXPIRY_TIME = Number(exp) * 60 * 1000;
  const ONE_MINUTE = 1 * 60 * 1000;
  const timer = setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - ONE_MINUTE);
};

export const useLoginMutation = () => {
  return useMutation(loginEmail);
};
