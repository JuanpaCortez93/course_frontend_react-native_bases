import useUsers from "../hooks/useUsers"
import UserRow from "./UserRow"


const UsersPage = () => {

    const {users, nextPage, prevPage} = useUsers();

    console.log(users);

  return (
    <>
        <table className="w-[500] bg-black rounded-xl text-white">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(u => (
                        <UserRow key={u.id} fname={u.first_name} lname={u.last_name} email={u.email}></UserRow>
                    ))
                }
            </tbody>
        </table>
        <div className="flex justify-between w-[500]">
            <button className="p-2 bg-blue-500 text-white rounded-[5px]" onClick={() => nextPage()}>Anterior</button>
            <button className="p-2 bg-blue-500 text-white rounded-[5px]" onClick={() => prevPage()}>Siguiente</button>
        </div>
    </>
  )
}

export default UsersPage
