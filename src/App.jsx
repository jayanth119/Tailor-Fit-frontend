import './App.css'
import HomePage from './pages/homePage'
import SetPasswordScreen from './pages/authentication/setpassword'
import SuccessScreenPass from './pages/authentication/success-screen-password'
function App() {

  return (
    <div className='bg-radient-colour w-screen h-screen'>
    {/* //   <HomePage/> */}
        <SuccessScreenPass/>
     </div>
    // <SetPasswordScreen/>

  )
}

export default App
