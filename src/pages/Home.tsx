import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold">{'{zak-hynd}'}</h1>
        <p className="text-lg">PM/PO | Geo | Dev/QA?</p>
        
        <div className="flex justify-center items-center space-x-6 text-lg">
        <Link to="/about">{`about`}</Link>
        <a href="https://www.linkedin.com/in/zak-hynd" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  )
}
export default Home
