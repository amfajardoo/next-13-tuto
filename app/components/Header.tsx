import Link from "next/link"

export default function Header() {

  const links = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' }
  ]

  return <header>
    <ul>
      {
        links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>
              {label}
            </Link>
          </li>
        ))
      }
    </ul>
  </header>
}