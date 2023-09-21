'use client'

import Image from 'next/image'

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

  const experiences: TPeriod[] = [
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

  const lastYears = experiences[experiences.length - 1].years
  const lastYear = lastYears[lastYears.length - 1]

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
          <div className="resume-item__title text-neutral-500">Hi, I am</div>
          <div className="resume-item__content">
            <h1 className="font-bold text-3xl">
              ASEP <span className="text-gradient-primary">FAJAR</span> NUGRAHA
            </h1>
            <p className="text-neutral-500">Full Stack Software Engineer</p>
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
              {experiences.map((experience, experienceIndex) => (
                <div
                  key={`experience-item-${experienceIndex}`}
                  className="relative"
                >
                  <Image
                    src="/logo-shape.svg"
                    alt=""
                    width={44}
                    height={52}
                    className={`rotate-180 absolute top-0 ${
                      experienceIndex > 0
                        ? 'w-[1.5rem] -left-[3.875rem]'
                        : 'w-[2.5rem] -left-[4.375rem]'
                    }`}
                  />
                  <div className={`${experienceIndex === 0 && 'pt-2'}`}>
                    <h3 className="text-lg font-bold">
                      {experience.years.join(' - ')}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {experience.summary}
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      {experience.items.map((item, itemIndex) => (
                        <li
                          key={`experience-item-${experienceIndex}-${itemIndex}`}
                        >
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
        <div className="resume-item !mt-16">
          <div className="resume-item__title text-gradient-primary">stack</div>
          <div className="resume-item__content">
            <div className="md:flex -ml-4">
              <div className="flex flex-col grow space-y-1 text-sm">
                <div className="flex items-start space-x-6">
                  <span className="w-20 shrink-0 text-neutral-500 text-right">
                    Languages
                  </span>
                  <div>
                    Programming (<strong>JS/TS</strong>, PHP, Go, Java, Kotlin,
                    Dart, <span className="text-neutral-400">and more</span>),
                    Other (<strong>HTML</strong>, CSS / <strong>SCSS</strong>).
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="w-20 shrink-0 text-neutral-500 text-right">
                    Frameworks
                  </span>
                  <div>
                    PHP (Laravel, CodeIgniter, Symfony), React (Next.js), Vue
                    (Nuxt.js), Flutter, Electron, <strong>Node</strong>{' '}
                    (Express.js, Fastify), Bun (Elysia),{' '}
                    <span className="text-neutral-400">and more</span>.
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="w-20 shrink-0 text-neutral-500 text-right">
                    Databases
                  </span>
                  <div>
                    Relational (MySQL, <strong>PostgreSQL</strong>), NoSQL
                    (MongoDB, Firestore, <strong>Redis</strong>).
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="w-20 shrink-0 text-neutral-500 text-right">
                    Tools
                  </span>
                  <div>
                    Docker, Kubernetes, S3, Git, CI/CD, Figma/Sketch/Adobe XD,
                    etc.
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="w-20 shrink-0 text-neutral-500 text-right">
                    Platforms
                  </span>
                  <div>DigitalOcean, GCP, Azure, AWS.</div>
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
            <div className="md:flex -ml-4">
              <div className="flex flex-col grow space-y-1">
                <div className="flex items-center space-x-6">
                  <span className="w-20 shrink-0 text-sm text-neutral-500 text-right">
                    Address
                  </span>
                  <div>Bandung, West Java, Indonesia</div>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="w-20 shrink-0 text-sm text-neutral-500 text-right">
                    Mobile
                  </span>
                  <a href="https://wa.me/6285721145113" target="_blank">
                    +62 857 2114 5113
                  </a>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="w-20 shrink-0 text-sm text-neutral-500 text-right">
                    Email
                  </span>
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
