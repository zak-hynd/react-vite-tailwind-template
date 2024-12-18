import Title from "@/components/common/Title"
import Porjects from "@/components/Porjects"
import GameOfLife from "@/components/projects/conways/GameOfLife"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Title />
      <div className="text-lg pb-4">
        <Link to="/about">{`about`}</Link>
      </div>
        
      <GameOfLife />
      
    </div>
  )
}
export default Home
