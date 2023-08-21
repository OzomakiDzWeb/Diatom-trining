import { Suspense } from "react"
import Header from "./Component/Header"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import HowItWork from "./pages/HowItWork"
import PrivacyPolice from "./pages/PrivacyPolice"
import WieWeexist from './pages/WieWeexist'
import Page404 from './pages/Page404'
import Footer from './Component/Footer'
import Demendemo from "./Component/Demendemo"

const App = () => {
   
  return (
    <div className="mt-[51px] py-[16px] sm:mx-[80px] px-[6px] sm:mt-6 relative">
      
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/howit-work" element={<HowItWork/>}/>
        <Route path="/privacy-police" element={<PrivacyPolice/>}/>
        <Route path="/wiewe-exist" element={<WieWeexist/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>     
      <Footer/>
      <Demendemo/>
    </div>
  )
}

export default App