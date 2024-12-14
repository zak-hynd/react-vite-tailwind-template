import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-background text-textPrimary p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-2xl font-bold">
          {`{zh}`}
        </Link>
      </div>
    </header>
  )
}

export default Header