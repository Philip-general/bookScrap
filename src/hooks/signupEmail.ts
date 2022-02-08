import axios from "axios";
import { useMutation } from "react-query";
import { EmailLoginData } from "../../types/type";

export const signupEmail = async ({ email, password }: EmailLoginData) => {
  const { data } = await axios({
    method: "post",
    url: `https://bookScrap/signup`,
    params: {
      email,
      password,
    },
  });
  return data;
};

export const useSignUpEmail = ({ email, password }: EmailLoginData) => {
  return useMutation(signupEmail, {});
};
