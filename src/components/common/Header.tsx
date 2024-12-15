import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="p-2 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">
        {`{zh}`}
      </Link>
      <div className="flex space-x-4 text-lg">
        <a
          href="https://www.linkedin.com/in/zak-hynd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/zak-hynd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </header>
      // <header className="p-2">

      //   <Link to="/" className="font-bold text-lg text-left">
      //     {`{zh}`}
      //   </Link>

      //   <div className="space-x-6">	
      //     <a href="https://www.linkedin.com/in/zak-hynd" target="_blank" 
      //       rel="noopener noreferrer" className="flex items-center">
      //       <i className="fab fa-linkedin"></i>
      //     </a>

      //     <a 
      //       href="https://github.com/zak-hynd" target="_blank" 
      //       rel="noopener noreferrer" className="flex items-center">
      //       <i className="fab fa-github"></i>
      //     </a>
      //   </div>
        
      // </header>
  )
}