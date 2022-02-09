import axios from "axios";
import {signUpInfo} from "../../types/type";
import { useMutation } from "react-query";
import {BASE_URL,SIGNUP} from "../hooks/urls/url"
export const postSignup = async(data:signUpInfo) =>{
  const response = await axios({
    method:"post",
    url:`${BASE_URL}${SIGNUP}`,
    data
  })
  return response
}
export const useSignupMutation =()=>{
  return useMutation(postSignup)
} 