'use client'

import { FileDownIcon, HomeIcon, Menu as MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import './MenuSide.css'

export default function Menu() {
  const [active, setActive] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    setActive(false)
  }, [pathname])

  return (
    <nav className="menu-side">
      <a className="menu-side-toggle" onClick={() => setActive(!active)}>
        <MenuIcon />
      </a>
      <ul className={`menu-side-items ${active && 'active'}`}>
        {pathname === '/' && (
          <li>
            <a
              href="https://cloud.kucaykojek.com/resume-ASEP-FAJAR-NUGRAHA.pdf"
              target="_blank"
              download
            >
              <FileDownIcon className="menu-side-item__icon" />
              Download
            </a>
          </li>
        )}
        {pathname !== '/' && (
          <li>
            <Link href="/">
              <HomeIcon className="menu-side-item__icon" />
              Home
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
