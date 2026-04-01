import axios from "axios"
import type { IRequest } from "../interfaces/request.interface";

export const loadUsersAction = async (page:number) => {
    try {
        const {data} = await axios.get<IRequest>(`https://reqres.in/api/users`, {
                params: {
                    page
                },
                headers: {
                    'x-api-key': 'pro_bb8df14456337247ebd96260f4f9d43d45bb45cbe5bef755cd6bd0e49a591744'
                }
            }
        )

        return data.data;
    }catch(error){
        console.log(error);
        return [];
    }
}