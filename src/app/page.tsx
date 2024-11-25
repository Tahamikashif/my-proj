import React from 'react'
import Header from './Components/Header'
import Header1 from './Components/Header1'
import Header2 from "./Components/Header2"
import Logo from "./Components/Logo"
import Courses from './Components/Courses'
import Achivement from './Components/Achivement'
import OurAchivement from './Components/OurAchivement'
import Courses1 from './Components/Courses1'
import AboutUs from './Components/AboutUs'
import Testimonal from './Components/Testimonal'
import Footer from './Components/Footer'
const page = () => {
  return (
    <div>
        <Header />
        <Header1 />
        <Header2 />
        <Logo />
        <Courses />
        <Achivement />
        <OurAchivement />
        <Courses1 />
        <AboutUs />
        <Testimonal />
        <Footer />
    </div>
  )
}

export default page

