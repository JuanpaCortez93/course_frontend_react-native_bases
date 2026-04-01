import './App.css'
import FormsPage from './components/FormsPage'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>

      <AuthProvider>
        <div className="flex">
          {/* <h1 className='text-4xl mb-5'>Hello world!</h1>    */}
          {/* <BasicTypes></BasicTypes> */}
          {/* <ObjectLiteral/> */}
          {/* <BasicFunctions/> */}
          {/* <Counter/> */}
          {/* <LoginPage></LoginPage> */}
          {/* <UsersPage/> */}
          <FormsPage></FormsPage>
        </div>
      </AuthProvider>



    </>
  )
}

export default App
