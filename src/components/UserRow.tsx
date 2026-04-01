interface IProps {
  fname:string;
  lname:string;
  email:string;
}

const UserRow = ({fname,lname,email}:IProps) => {
  return (
    <tr className="p-2">
        <td>{fname} {lname}</td>
        <td>{email}</td>
    </tr>
  )
}

export default UserRow
