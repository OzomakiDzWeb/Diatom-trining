
import Header from "./Component/Header"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import {AppContext} from './context/AppContext'
import HowItWork from "./pages/HowItWork"
import PrivacyPolice from "./pages/PrivacyPolice"
import WieWeexist from './pages/WieWeexist'
import Page404 from './pages/Page404'
import Footer from './Component/Footer'
import Demendemo from "./Component/Demendemo"
import NavMobil from "./Component/NavMobil"

const App = () => {
   
  return (
    <AppContext>

    <div>

    <div className="mt-[40px] sm:mt-0   relative">
      
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/howit-work" element={<HowItWork/>}/>
        <Route path="/privacy-police" element={<PrivacyPolice/>}/>
        <Route path="/wiewe-exist" element={<WieWeexist/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>     
      <Footer/>
    
    </div>
      <Demendemo/>
      <NavMobil/>
    </div>
    </AppContext>
  )
}

export default App