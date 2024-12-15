import Title from "@/components/common/Title"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Title />
      <div className="text-lg pb-4">
        <Link to="/about">{`about`}</Link>
      </div>
        
      <h2 className="font-bold">
        Some projects...
      </h2>
    </div>
  )
}
export default Home
