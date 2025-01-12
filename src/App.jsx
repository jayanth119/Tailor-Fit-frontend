import './App.css'
import StartPage from './pages/authentication/startpage'
import SetPasswordScreen from './pages/authentication/setpassword'
import SuccessScreenPass from './pages/authentication/success-screen-password'
import ProfileScreen from './pages/profile/profile-screen'
function App() {
  return (
    <div className='bg-radient-colour w-screen h-screen'>
       {/* <StartPage/> */}
        {/* <SuccessScreenPass/> */}
        <ProfileScreen/>
     </div>
    // <SetPasswordScreen/>

  )
}

export default App
