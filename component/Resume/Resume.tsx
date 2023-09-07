'use client'

import Image from 'next/image'
import { useMemo } from 'react'

import Loader, { useLoader } from '@/component/Loader'
import Logo from '@/component/Logo'
import { cn } from '@/lib/utils'

import './Resume.css'

type TPeriod = {
  years: number[]
  summary: String
  items: String[]
}

export default function Resume() {
  const { initial } = useLoader()

  const periods: TPeriod[] = [
    {
      years: [2010],
      summary:
        'The year in which I started to plunge into the world of software engineering professionally, right after I graduated with an information technology diploma.',
      items: [
        'Creates a website portal for education as a Full Stack using PHP.',
        'Creates an attendance system using RFID and C#.'
      ]
    },
    {
      years: [2011, 2018],
      summary:
        'The period that I have worked for several companies, and also several projects as a freelancer.',
      items: [
        'Creates many websites for e-commerce, company profiles, and government. With using various programming languages and technologies. Next.js, Flutter, Express.js, Spring, Laravel, etc.',
        'Creates web-based information systems, such as banking systems, billing/subscription systems, attendance systems, and so on.',
        'Creates some Android applications with native Java, Flutter, and Responsive Webview.'
      ]
    },
    {
      years: [2018, 2023],
      summary:
        'Joined Bukalapak, the period in which I have got so much experience.',
      items: [
        'Creates high-fidelity prototyping and ready-to-integrate UI using Vue.js and Rails erb.',
        'Creates desktop application for internal using Electron.',
        'Develops UI Design System together with the Product Design team.',
        'Develops several Frontend microservices for B2B Procurements, Whitelabel Marketplace Portals, Games and rewards Systems, Product Landing Websites, and so on.',
        'Contributes to rightsizing and optimizing the resources on GCP and Azure, Rotation on Secrets, Adjusting Alert monitoring, and some other infra pieces of stuff.',
        'Develops several Backend microservices using PHP, Go, and Ruby on Rails.',
        'Leads Frontend team in the squad.'
      ]
    }
  ]

  const lastYear: number = useMemo(() => {
    const lastYears = periods[periods.length - 1].years
    return lastYears[lastYears.length - 1]
  }, [periods])

  return (
    <div>
      <Loader />
      <div
        className={cn(
          'resume container lg:max-w-4xl space-y-12',
          initial && 'page-initializing'
        )}
      >
        <div className="resume-item">
          <div className="resume-item__title text-neutral-600">Hi, I am</div>
          <div className="resume-item__content">
            <h1 className="font-bold text-3xl">
              ASEP <span className="text-gradient-primary">FAJAR</span> NUGRAHA
            </h1>
            <p className="text-neutral-600">Full Stack Software Engineer</p>
          </div>
        </div>
        <div className="resume-item">
          <div className="resume-item__title text-gradient-primary">
            foreword
          </div>
          <div className="resume-item__content">
            <p>
              For a few recent years, I have had a full-time job at Bukalapak as
              a Frontend Engineer and then later as a Full Stack Engineer.
              Besides that, I have experience in the Backend, Apps (Flutter),
              and UI Design.
            </p>
          </div>
        </div>
        <div className="resume-item">
          <div className="resume-item__title text-gradient-primary">
            experience
          </div>
          <div className="resume-item__content pl-6">
            <div className="border-l-4 pl-12 space-y-6">
              {periods.map((period, periodIndex) => (
                <div key={`period-item-${periodIndex}`} className="relative">
                  <Image
                    src="/logo-shape.svg"
                    alt=""
                    width={44}
                    height={52}
                    className={`rotate-180 absolute top-0 ${
                      periodIndex > 0
                        ? 'w-[1.5rem] -left-[3.875rem]'
                        : 'w-[2.5rem] -left-[4.375rem]'
                    }`}
                  />
                  <div className={`${periodIndex === 0 && 'pt-2'}`}>
                    <h3 className="text-lg font-bold">
                      {period.years.join(' - ')}
                    </h3>
                    <p className="text-sm text-neutral-600">{period.summary}</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      {period.items.map((item, itemIndex) => (
                        <li key={`period-item-${periodIndex}-${itemIndex}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="relative" id="highlight">
                <div className="resume-logo">
                  <Logo />
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold">{lastYear} - 20xx</h3>
                  <p className="text-xl">
                    Let&apos;s{' '}
                    <span className="text-gradient-primary font-bold">
                      Handshakes
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-item">
          <div className="resume-item__title text-gradient-primary">
            contact
          </div>
          <div className="resume-item__content">
            <div className="md:flex">
              <div className="flex flex-col grow">
                <div className="flex">
                  <span className="w-24 shrink-0">Address</span> Bandung, West
                  Java, Indonesia
                </div>
                <div className="flex">
                  <span className="w-24 shrink-0">Mobile</span>
                  <a href="https://wa.me/6285721145113" target="_blank">
                    +62 857 2114 5113
                  </a>
                </div>
                <div className="flex">
                  <span className="w-24 shrink-0">Email</span>
                  <a
                    href="mailto:delve_brain@hotmail.com"
                    target="_blank"
                    className="font-semibold"
                  >
                    delve_brain@hotmail.com
                  </a>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/kucaykojek"
                target="_blank"
                className="block shrink-0 ml-24 md:ml-auto mt-6 md:-mt-2"
              >
                <Image
                  src="/qr-linkedin.png"
                  alt="https://www.linkedin.com/in/kucaykojek"
                  width={240}
                  height={240}
                  className="w-28 h-28 md:w-20 md:h-20"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
