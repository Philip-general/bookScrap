import axios from "axios";
import { useMutation } from "react-query";
import {signUpInfo} from "../../types/type";

export const postSignup = async(data:signUpInfo) =>{
  const response = await axios({
    method:"post",
    url:`/signUp`,
    data,
    headers: { 'Content-Type': 'application/json'}
  })
  return response
}
