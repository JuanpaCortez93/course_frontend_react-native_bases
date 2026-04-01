import { useEffect, useRef, useState } from "react"
import type { Datum, IRequest } from "../interfaces/request.interface";
import { loadUsersAction } from "../actions/loadUsers.action";

const useUsers = () => {

  const [users, setUsers] = useState<Datum[]>([]);
  const currentPageRef = useRef(1);

    useEffect(() => {
        loadUsersAction(1).then(setUsers)
    }, [])

    const nextPage = async() => {
      currentPageRef.current++;
      const users = await loadUsersAction(currentPageRef.current);

      if(users.length > 0) {
        setUsers(users);
      }else{
        currentPageRef.current--;
      }
    }

    const prevPage = async() => {
      if(currentPageRef.current < 1) return;
      currentPageRef.current --;

      const users = await loadUsersAction(currentPageRef.current);
      setUsers(users);
    }

  return {
    users,
    nextPage,
    prevPage,
  }
}

export default useUsers
