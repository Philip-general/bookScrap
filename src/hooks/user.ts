import { BASE_URL, ME } from "./urls/url";
import { useQuery } from "react-query";
import axios from "axios";

export const getMe = async()=>{
    const response = await axios({
        method:"get",
        baseURL:BASE_URL,
        url:ME,
    })

    return response.data;
}

export const useGetMe = () =>{
    return useQuery(
    ["user"],
    ()=>getMe(),
    );
}

