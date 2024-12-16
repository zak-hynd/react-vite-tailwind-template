import { Outlet } from "react-router-dom"
import Header from '../src/components/common/Header'
import Footer from '../src/components/common/Footer'


const App = () => {
  return (
    <div className="bg-dark2">
      <div className="max-w-[1000px] mx-auto bg-dark1 min-h-screen flex-grow">
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