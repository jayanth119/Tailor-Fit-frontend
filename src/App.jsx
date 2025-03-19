import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/MainRoute';
import LandingPage from './components/ui/LandingPage';
function App() {
  return (
    <>
    {/* // <RouterProvider router={router} /> */}
    <LandingPage/>
    </>
  )
}

export default App;
