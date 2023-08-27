'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export default function Home() {
  const [initial, setInitial] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setInitial(false)
    }, 2000)
  }, [])

  return (
    <>
      <div className={cn('loader', initial && 'loader--initial')}>
        <div className="loader-logo">
          <Image
            src="/logo.png"
            alt="nug/kuc"
            priority
            width={80}
            height={90}
            className="loader-logo__image"
          />
          <Image
            src="/logo-shape.svg"
            alt=""
            width={80}
            height={90}
            className="loader-logo__shape"
          />
        </div>
      </div>
      <div
        className={cn(
          'landing container lg:max-w-4xl space-y-12',
          initial && 'landing--initial'
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="text-neutral-600 text-xl mb-2">Hi, I am</div>
          <div className="md:col-span-3">
            <h1 className="font-bold text-3xl">
              ASEP <span className="text-gradient-primary">FAJAR</span> NUGRAHA
            </h1>
            <p className="text-neutral-600">Full Stack Software Engineer</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="text-neutral-600 text-xl text-gradient-primary mb-2">
            foreword
          </div>
          <div className="md:col-span-3">
            <p>
              For a few recent years, I have had a full-time job at Bukalapak as
              a Frontend Engineer and then later as a Full Stack Engineer.
              Besides that, I have experience in the Backend, Apps (Flutter),
              and UI Design.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="text-neutral-600 text-xl text-gradient-primary mb-2">
            experience
          </div>
          <div className="md:col-span-3 pl-6">
            <div className="border-l-4 pl-12 space-y-6">
              <div className="relative">
                <Image
                  src="/logo-shape.svg"
                  alt=""
                  width={44}
                  height={52}
                  className="rotate-180 w-[2.5rem] absolute top-0 -left-[4.375rem]"
                />
                <div>
                  <h3 className="text-lg font-bold">2010</h3>
                  <p className="text-sm text-neutral-600">
                    The year in which I started to plunge into the world of
                    software engineering professionally, right after I graduated
                    with an information technology diploma.
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      Creates a website portal for education as a Full Stack
                      using PHP.
                    </li>
                    <li>Creates an attendance system using RFID and C#.</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/logo-shape.svg"
                  alt=""
                  width={44}
                  height={52}
                  className="rotate-180 w-[1.5rem] absolute top-0 -left-[3.875rem]"
                />
                <div>
                  <h3 className="text-lg font-bold">2011 - 2018</h3>
                  <p className="text-sm text-neutral-600">
                    The period that I have worked for several companies, and
                    also several projects as a freelancer.
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      Creates many websites for e-commerce, company profiles,
                      and government. With using various programming languages
                      and technologies. Next.js, Flutter, Express.js, Spring,
                      Laravel, etc.
                    </li>
                    <li>
                      Creates web-based information systems, such as banking
                      systems, billing/subscription systems, attendance systems,
                      and so on.
                    </li>
                    <li>
                      Creates some Android applications with native Java,
                      Flutter, and Responsive Webview.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/logo-shape.svg"
                  alt=""
                  width={44}
                  height={52}
                  className="rotate-180 w-[1.5rem] absolute top-0 -left-[3.875rem]"
                />
                <div>
                  <h3 className="text-lg font-bold">2018 - 2023</h3>
                  <p className="text-sm text-neutral-600">
                    Joined Bukalapak, the period in which I have got so much
                    experience.
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      Creates high-fidelity prototyping and ready-to-integrate
                      UI using Vue.js and Rails erb.
                    </li>
                    <li>
                      Creates desktop application for internal using Electron.
                    </li>
                    <li>
                      Develops UI Design System together with the Product Design
                      team.
                    </li>
                    <li>
                      Develops several Frontend microservices for B2B
                      Procurements, Whitelabel Marketplace Portals, Games and
                      rewards Systems, Product Landing Websites, and so on.
                    </li>
                    <li>
                      Contributes to rightsizing and optimizing the resources on
                      GCP and Azure, Rotation on Secrets, Adjusting Alert
                      monitoring, and some other infra pieces of stuff.
                    </li>
                    <li>
                      Develops several Backend microservices using PHP, Go, and
                      Ruby on Rails.
                    </li>
                    <li>Leads Frontend team in the squad.</li>
                  </ul>
                </div>
              </div>
              <div className="relative" id="highlight">
                <div className="landing-logo">
                  <Image
                    src="/logo.png"
                    alt="nug/kuc"
                    priority
                    width={80}
                    height={90}
                    className="landing-logo__image absolute z-10 w-[4rem]"
                  />
                  <Image
                    src="/logo-shape.svg"
                    alt=""
                    width={80}
                    height={90}
                    className="landing-logo__shape animate-logo-spin w-[4rem]"
                  />
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold">2023 - 20xx</h3>
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
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="text-neutral-600 text-xl text-gradient-primary mb-2">
            contact
          </div>
          <div className="md:col-span-3">
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
    </>
  )
}
