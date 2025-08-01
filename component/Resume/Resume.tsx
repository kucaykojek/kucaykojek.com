'use client'

import Image from 'next/image'
import { Fragment } from 'react'

import Loader, { useLoader } from '@/component/Loader'
import Logo from '@/component/Logo'
import { cn } from '@/lib/utils'

import Hex from '../Common/Hex'
import './Resume.css'

type TExperience = {
  years: number[]
  at: string[]
  roles: { name: string; years?: number[]; items: string[] }[]
}

export default function Resume() {
  const { initial } = useLoader()

  const experiences: TExperience[] = [
    {
      years: [2010],
      at: ['satugen.com / PT Indonesia Digital Koridor'],
      roles: [
        {
          name: 'Full Stack Engineer',
          items: [
            'Develop a website portal for education with authentic users (verified students, teachers, etc), Social media, news & information, etc.',
            'Develop an attendance system for schools with RFID technology.'
          ]
        }
      ]
    },
    {
      years: [2012, 2013],
      at: ['PT Maxima Integrasi Prima'],
      roles: [
        {
          name: 'Full Stack Engineer',
          items: [
            'Creates many websites for e-commerce, company/professional profile, and government. Using various programming languages and technology.',
            'Develop web-based applications, such as the non-core banking system, billing system, attendance system, and so on.',
            'Develop features of some products (desktop applications).',
            'Develop some Android applications, most of them using responsive WebView.'
          ]
        }
      ]
    },
    {
      years: [2013, 2016],
      at: ['PT Inzpire Technology', 'PT Perkakasku Multi Cemerlang'],
      roles: [
        {
          name: 'Full Stack Engineer',
          items: [
            'Develop a website for “all-in-one vacation” management. Transportation (Flight & Train booking system), reservation for accommodation, itinerary management, blogs/social interactions between users, etc.',
            'Develop B2B/White label for the OTA (Online Travel Agent) system.',
            'Develop revamp website e-commerce (perkakasku.com).',
            'Reorganize/Improve the development process.'
          ]
        }
      ]
    },
    {
      years: [2018, 2023],
      at: ['PT Bukalapak.com Tbk'],
      roles: [
        {
          name: 'UI Engineer',
          years: [2018],
          items: [
            "Creates high-fidelity UI layout/template for some of Bukalapak's products.",
            'Creates stylesheet as a service that helps to build UI.'
          ]
        },
        {
          name: 'UX Engineer',
          years: [2018, 2019],
          items: [
            'Creates desktop application for internal (Product Design Division).',
            'Creates many high-fidelity prototyping to allow Stakeholders feels the UX.',
            'Develop UI Design System.'
          ]
        },
        {
          name: 'Front End Engineer',
          years: [2019, 2023],
          items: [
            'Develop several Frontend micro-services for B2B Procurements, White Label Marketplace Portals, Games and Rewards Systems, Product Landing Websites, and so on.',
            'Leads Frontend team in the squad.'
          ]
        },
        {
          name: 'Full Stack Engineer',
          years: [2023],
          items: [
            'Contributes to rightsizing and optimizing the resources on GCP and Azure, Rotation on Secrets, Adjusting Alert monitoring, etc.',
            'Develop several Backend micro-services.'
          ]
        }
      ]
    }
  ]

  const lastYears = experiences[experiences.length - 1].years
  const lastYear = lastYears[lastYears.length - 1]

  const otherExperiences = [
    <>
      <span className="font-medium text-primary print:text-yellow-600">
        3rd place winner
      </span>{' '}
      SiCepat Pahlawan Hackathon 2021. Creates route planner for courier package
      delivery.
    </>,
    'Develop Web, iOS, Android application (Uqwah, Hadirin, and BJB MRC).',
    'Develop some web-based applications, such as pipeline loan system, on-desk call for credit collection, etc.',
    'Develop a web application for a party election command center, working with large data utilizing DB triggers, functions, and stored procedures.'
  ]

  const currentExperiences: TExperience = {
    years: [lastYear],
    at: ['Pixlr Pte. Ltd.'],
    roles: [
      {
        name: 'Front End Engineer',
        items: [
          'Develop several features/tools on the FE side, such as a text-to-image generator, copy generator, sketch/drawing to realistic image, and so on.',
          'Ads measurement and conversion tracking, SEO optimizing, so on.'
        ]
      }
    ]
  }

  return (
    <div>
      <Loader />
      <div
        className={cn(
          'space-y-8 lg:max-w-4xl resume container',
          initial && 'page-initializing'
        )}
      >
        <div className="resume-item">
          <div className="text-neutral-500 resume-item__title">Hi, I am</div>
          <div className="resume-item__content">
            <h1 className="font-bold text-3xl">
              ASEP <mark className="text-gradient-primary">FAJAR</mark> NUGRAHA
            </h1>
            <h2>
              Full Stack Engineer /{' '}
              <strong className="font-semibold">Front End</strong> Heavy
              Preferred
            </h2>
            <p className="mt-2 text-neutral-500 text-sm">
              As time went by, I ended up loving to work with pixels and all the
              visual/presentation layers. Also, the fact that a blank dark code
              editor can bring colors to the users, is so satisfying for me.
            </p>
          </div>
        </div>
        <div className="resume-item">
          <div className="text-gradient-primary resume-item__title">
            education
          </div>
          <div className="resume-item__content">
            <div className="relative text-neutral-500 text-sm">
              <span>2007 - 2010 at</span>{' '}
              <strong className="font-medium text-neutral-800">
                Politeknik Piksi Ganesha
              </strong>
              <span className="text-neutral-800">, Bandung, Indonesia</span>
            </div>
            <div className="text-lg">
              <span className="font-semibold">Diploma</span> of Informatics
              Management
            </div>
          </div>
        </div>
        <div className="resume-item">
          <div className="text-gradient-primary resume-item__title">
            experience
          </div>
          <div className="pl-6 resume-item__content">
            <div className="space-y-6 pl-12 border-l-4">
              {experiences.map((exp, expIdx) => (
                <div key={`exp-${expIdx}`} className="relative">
                  <Hex
                    id={`exp-${expIdx}`}
                    width={24}
                    height={40}
                    className="-top-2.5 -left-[3.875rem] absolute"
                  />
                  <div className="relative">
                    <div className="relative text-neutral-500 text-sm">
                      <span>{exp.years.join(' - ')} at</span>{' '}
                      {exp.at.map((at, atIdx) => (
                        <Fragment key={`exp-${expIdx}-at-${atIdx}`}>
                          <strong className="font-medium text-neutral-800">
                            {at}
                          </strong>
                          {atIdx === exp.at.length - 2
                            ? ' and '
                            : atIdx < exp.at.length - 2
                            ? ', '
                            : ''}
                        </Fragment>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {exp.roles.map((role, roleIdx) => (
                        <div key={`exp-${expIdx}-role-${roleIdx}`}>
                          <div className="font-semibold text-lg">
                            {role.name}
                            {(role?.years || []).length > 0 && (
                              <span className="ml-2 font-normal text-neutral-500 text-sm">
                                {(role?.years || []).join(' - ')}
                              </span>
                            )}
                          </div>
                          <ul className="space-y-1 pl-6 text-base list-disc">
                            {role.items.map((job, jobIdx) => (
                              <li
                                key={`exp-${expIdx}-role-${roleIdx}-job-${jobIdx}`}
                              >
                                {job}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="relative">
                <Hex
                  id="exp-others"
                  width={24}
                  height={40}
                  colorFrom="#e5e5e5"
                  colorTo="#e5e5e5"
                  className="-top-1.5 -left-[3.875rem] absolute"
                />
                <div className="relative">
                  <div className="font-semibold text-lg">Others</div>
                  <ul className="space-y-1 pl-6 text-base list-disc">
                    {otherExperiences.map((other, otherIdx) => (
                      <li key={`other-exp-${otherIdx}`}>{other}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="z-10 relative bg-white -ml-20 pl-20"
                id="highlight"
              >
                <div className="resume-logo">
                  <Logo />
                </div>
                <div className="pt-3.5">
                  <div className="relative text-neutral-500 text-sm">
                    <span>{currentExperiences.years.join(' - ')} - now at</span>{' '}
                    {currentExperiences.at.map((at, atIdx) => (
                      <Fragment key={`current-exp-${atIdx}`}>
                        <strong className="font-medium text-neutral-800">
                          {at}
                        </strong>
                        {atIdx === currentExperiences.at.length - 2
                          ? ' and '
                          : atIdx < currentExperiences.at.length - 2
                          ? ', '
                          : ''}
                      </Fragment>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {currentExperiences.roles.map((role, roleIdx) => (
                      <div key={`current-exp-role-${roleIdx}`}>
                        <div className="font-semibold text-lg">{role.name}</div>
                        <ul className="space-y-1 pl-6 text-base list-disc">
                          {role.items.map((job, jobIdx) => (
                            <li
                              key={`current-exp-role-${roleIdx}-job-${jobIdx}`}
                            >
                              {job}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-item">
          <div className="text-gradient-primary resume-item__title">stack</div>
          <div className="resume-item__content">
            <div className="md:flex -ml-4">
              <div className="flex flex-col space-y-1 text-sm grow">
                <div className="flex items-start space-x-6">
                  <span className="w-20 text-neutral-500 text-right shrink-0">
                    Languages
                  </span>
                  <div>
                    Programming (<strong>JS/TS</strong>, PHP, Go, Java, Kotlin,
                    Dart, <span className="text-neutral-400">and more</span>),
                    Other (<strong>HTML</strong>, CSS / <strong>SCSS</strong>).
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="w-20 text-neutral-500 text-right shrink-0">
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
                  <span className="w-20 text-neutral-500 text-right shrink-0">
                    Databases
                  </span>
                  <div>
                    Relational (MySQL, <strong>PostgreSQL</strong>), NoSQL
                    (MongoDB, Firestore, <strong>Redis</strong>).
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="w-20 text-neutral-500 text-right shrink-0">
                    Tools
                  </span>
                  <div>
                    Docker, Kubernetes, S3, Git, CI/CD, Figma/Sketch/Adobe XD,
                    etc.
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="w-20 text-neutral-500 text-right shrink-0">
                    Platforms
                  </span>
                  <div>DigitalOcean, GCP, Azure, AWS.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-item">
          <div className="text-gradient-primary resume-item__title">
            contact
          </div>
          <div className="resume-item__content">
            <div className="md:flex -ml-4">
              <div className="flex flex-col space-y-1 grow">
                <div className="flex items-center space-x-6">
                  <span className="w-20 text-neutral-500 text-sm text-right shrink-0">
                    Address
                  </span>
                  <div>Bandung, West Java, Indonesia</div>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="w-20 text-neutral-500 text-sm text-right shrink-0">
                    Mobile
                  </span>
                  <a href="https://wa.me/6285721145113" target="_blank">
                    +62 857 2114 5113
                  </a>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="w-20 text-neutral-500 text-sm text-right shrink-0">
                    Email
                  </span>
                  <a
                    href="mailto:kucaykojek@gmail.com"
                    target="_blank"
                    className="font-semibold"
                  >
                    kucaykojek@gmail.com
                  </a>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/kucaykojek"
                target="_blank"
                className="block mt-6 md:-mt-2 ml-24 md:ml-auto shrink-0"
              >
                <Image
                  src="/qr-linkedin.png"
                  alt="https://www.linkedin.com/in/kucaykojek"
                  width={240}
                  height={240}
                  className="w-28 md:w-20 h-28 md:h-20"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
