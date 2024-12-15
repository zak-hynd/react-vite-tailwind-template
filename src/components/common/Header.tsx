import { Link } from 'react-router-dom'

export default function Header() {
  return (
      <header className="text-left p-2">
        <Link to="/" className="font-bold text-lg">
          {`{zh}`}
        </Link>
      </header>
  )
}