import NavBar from './navbar';
import Home from './home';
function LandingPage(){
    return(
       <div className="flex flex-col w-screen h-screen">
        <NavBar/>
        <Home/>
       </div>
    )
}
export default LandingPage;