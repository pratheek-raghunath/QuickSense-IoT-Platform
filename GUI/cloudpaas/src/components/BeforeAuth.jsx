import NavLanding from "../NavLanding"
import Footer from "../Footer"
import { Outlet } from "react-router-dom"

const BeforeAuth = () => {
    //navigate to dashboard automatically if auth token is present in local storage
    
    return (
      <div>
        <NavLanding/>
        <Outlet />
        <Footer/>
      </div>
    )
  }

export default BeforeAuth