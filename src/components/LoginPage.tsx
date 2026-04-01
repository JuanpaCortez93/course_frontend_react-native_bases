import { useAuthContext } from "../context/AuthContext"

const LoginPage = () => {
  
    const {isAuth, loginWithEmailPassword, user,logout} = useAuthContext();
       console.log(user);
  return (
    <>
      {
        isAuth ? (
            <>
                <h3>Bienvenido</h3>
                <pre>{JSON.stringify(user, null, 2)}</pre>
                <button className="bg-blue-500 p-2 text-white rounded-xl mt-2" onClick={() => logout()}>Salir</button>
            </>
        ) : (
            <>
                <h3>Ingresar</h3>
                <button className="bg-blue-500 p-2 text-white rounded-xl mt-2" onClick={() => loginWithEmailPassword('juanpa@test.com','123')}>Ingresar</button>
            </>
        )
      }
    </>
  )
}

export default LoginPage
