import React from 'react'
import { Outlet } from "react-router-dom"
import Header from '../src/components/common/Header'
import Footer from '../src/components/common/Footer'


const App = () => {
  return (
    <div className="bg-outerBackground">
      <div className="max-w-[1200px] mx-auto bg-background min-h-screen flex-grow">
	  	<Header />
			<div className="flex-center">
        <Outlet />
      </div>
      <Footer />
      </div>
    </div>
  )
}
export default App