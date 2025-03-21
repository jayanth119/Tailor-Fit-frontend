import NavBar from './navbar';
import Home from './home';
import Cart from './cart';
function LandingPage(){
    return(
       <div className="flex flex-col w-screen h-screen">
        <NavBar/>
        {/* <Home/> */}
        <Cart/>
       </div>
    )
}
export default LandingPage;