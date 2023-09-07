import { HomeIcon } from 'lucide-react'
import Link from 'next/link'

import Logo from '@/component/Logo'

import './MenuTop.css'

function MenuTop() {
  return (
    <div className="menu-top">
      <nav className="menu-top__wrapper">
        <Link href="/" className="menu-top__logo">
          <Logo />
        </Link>

        <ul className="menu-top__nav">
          <li className="home">
            <Link href="/" className="text-primary text-sm">
              <HomeIcon className="w-5 h-5" />
            </Link>
          </li>
          <li className="">Portofolio</li>
        </ul>
      </nav>
    </div>
  )
}

export default MenuTop
