import axios from "axios"
import type { IRequest } from "../interfaces/request.interface";

export const loadUsersAction = async (page:number) => {
    try {
        const {data} = await axios.get<IRequest>(`https://reqres.in/api/users`, {
                params: {
                    page
                },
                headers: {
                    'x-api-key': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                }
            }
        )

        return data.data;
    }catch(error){
        console.log(error);
        return [];
    }
}