import './App.css'
import UsersPage from './components/UsersPage'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>

      <AuthProvider>
        <div className="flex justify-center items-center">
          {/* <h1 className='text-4xl mb-5'>Hello world!</h1>    */}
          {/* <BasicTypes></BasicTypes> */}
          {/* <ObjectLiteral/> */}
          {/* <BasicFunctions/> */}
          {/* <Counter/> */}
          {/* <LoginPage></LoginPage> */}
          <UsersPage/>
        </div>
      </AuthProvider>



    </>
  )
}

export default App
