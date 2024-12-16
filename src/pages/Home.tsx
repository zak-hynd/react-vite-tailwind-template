import Title from "@/components/common/Title"
import Porjects from "@/components/Porjects"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Title />
      <div className="text-lg pb-4">
        <Link to="/about">{`about`}</Link>
      </div>
        
      <Porjects />
      
    </div>
  )
}
export default Home
