'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { MenuTop } from '@/component/Menu'
import logoCodeigniter from '@/public/stack/codeigniter.svg'
import logoExpress from '@/public/stack/express.svg'
import logoFlutter from '@/public/stack/flutter.svg'
import logoGo from '@/public/stack/go.svg'
import logoJava from '@/public/stack/java.svg'
import logoMagento from '@/public/stack/magento.svg'
import logoNextjs from '@/public/stack/nextjs.svg'
import logoNuxtjs from '@/public/stack/nuxtjs.svg'
import logoPhp from '@/public/stack/php.svg'
import logoReact from '@/public/stack/react.svg'
import logoVue from '@/public/stack/vue.svg'

import './Portofolio.css'

type TStack = {
  name: String
  image: any
  url: String
}

type TPortofolio = {
  title: string
  screenshot: String
  description: String
  colors: String[]
  stacks: TStack[]
}

export default function Portofolio() {
  const [_, setCurrentSlide] = useState(0)

  const slideSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 2000,
    slidesToShow: 5,
    initialSlide: 0,
    centerMode: true,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  const portofolios: TPortofolio[] = [
    {
      title: 'BukaPengadaan',
      screenshot: '/scrot/bukapengadaan.png',
      description:
        'Lorem ipsum dolor sit amet, enim adipisicing Lorem aliquip fugiat minim dolore. Cillum ea occaecat ad exercitation exercitation fugiat do quis adipisicing laborum aute officia sunt enim nulla tempor deserunt. Et cupidatat qui consectetur.',
      colors: ['#170109', '#5B162B', '#D43A57'],
      stacks: [
        { name: 'vue', image: logoVue, url: 'https://vuejs.org/' },
        { name: 'nuxtjs', image: logoNuxtjs, url: 'https://nuxt.com/' },
        { name: 'go', image: logoGo, url: 'https://go.dev/' }
      ]
    },
    {
      title: 'KingKong',
      screenshot: '/scrot/kingkong.png',
      description:
        'Lorem ipsum dolor sit amet, enim adipisicing Lorem aliquip fugiat minim dolore. Cillum ea occaecat ad exercitation exercitation fugiat do quis adipisicing laborum aute officia sunt enim nulla tempor deserunt. Et cupidatat qui consectetur.',
      colors: ['#EDF853', '#1D1D1D'],
      stacks: [
        { name: 'vue', image: logoVue, url: 'https://vuejs.org/' },
        { name: 'nuxtjs', image: logoNuxtjs, url: 'https://nuxt.com/' }
      ]
    },
    {
      title: 'Allofresh',
      screenshot: '/scrot/allofresh.png',
      description:
        'Lorem ipsum dolor sit amet, enim adipisicing Lorem aliquip fugiat minim dolore. Cillum ea occaecat ad exercitation exercitation fugiat do quis adipisicing laborum aute officia sunt enim nulla tempor deserunt. Et cupidatat qui consectetur.',
      colors: ['#3D584D', '#6DB34B', '#EFB043'],
      stacks: [
        { name: 'php', image: logoPhp, url: 'https://www.php.net/' },
        {
          name: 'magento',
          image: logoMagento,
          url: 'https://about.magento.com/Magento-Commerce.html'
        },
        { name: 'go', image: logoGo, url: 'https://go.dev/' }
      ]
    },
    {
      title: 'Hadirin',
      screenshot: '/scrot/hadirin.png',
      description:
        'Lorem ipsum dolor sit amet, enim adipisicing Lorem aliquip fugiat minim dolore. Cillum ea occaecat ad exercitation exercitation fugiat do quis adipisicing laborum aute officia sunt enim nulla tempor deserunt. Et cupidatat qui consectetur.',
      colors: ['#F9451B', '#FFD08E', '#6F5939'],
      stacks: [
        { name: 'flutter', image: logoFlutter, url: 'https://flutter.dev/' },
        { name: 'react', image: logoReact, url: 'https://react.dev/' },
        { name: 'nextjs', image: logoNextjs, url: 'https://nextjs.org/' },
        { name: 'express', image: logoExpress, url: 'https://expressjs.com/' }
      ]
    },
    {
      title: 'MySuzuki',
      screenshot: '/scrot/mysuzuki.png',
      description:
        'Lorem ipsum dolor sit amet, enim adipisicing Lorem aliquip fugiat minim dolore. Cillum ea occaecat ad exercitation exercitation fugiat do quis adipisicing laborum aute officia sunt enim nulla tempor deserunt. Et cupidatat qui consectetur.',
      colors: ['#292E6D', '#2A5BA5', '#D93934'],
      stacks: [
        { name: 'php', image: logoPhp, url: 'https://www.php.net/' },
        {
          name: 'codeigniter',
          image: logoCodeigniter,
          url: 'https://codeigniter.com/'
        }
      ]
    },
    {
      title: 'Bank bjb Pipeline',
      screenshot: '/scrot/bjb-pipeline.png',
      description:
        'Lorem ipsum dolor sit amet, enim adipisicing Lorem aliquip fugiat minim dolore. Cillum ea occaecat ad exercitation exercitation fugiat do quis adipisicing laborum aute officia sunt enim nulla tempor deserunt. Et cupidatat qui consectetur.',
      colors: ['#3C73B0', '#E9AC42', '#EEEEEE'],
      stacks: [
        { name: 'php', image: logoPhp, url: 'https://www.php.net/' },
        {
          name: 'codeigniter',
          image: logoCodeigniter,
          url: 'https://codeigniter.com/'
        },
        { name: 'java', image: logoJava, url: 'https://www.java.com/en/' }
      ]
    },
    {
      title: 'And more...',
      screenshot: '/scrot/placeholder.png',
      description: 'Will be updated soon...',
      colors: ['#CCC', '#DDD', '#EEE'],
      stacks: []
    }
  ]

  function copyClipboard(value: any) {
    navigator.clipboard.writeText(value)
  }

  return (
    <>
      <MenuTop />
      <div className="lg:pt-44">
        <ul className="portofolio">
          <Slider {...slideSettings}>
            {portofolios.map((portofolio, portofolioIndex) => (
              <li key={`portofolio-item-${portofolioIndex}`}>
                <div className="portofolio-content">
                  <Image
                    src={`${portofolio.screenshot}`}
                    alt=""
                    width={386}
                    height={300}
                    className="portofolio-content__image"
                  />

                  <div className="portofolio-content__head">
                    <div className="portofolio-content__number">
                      #{portofolioIndex + 1}
                    </div>
                    <h1 className="portofolio-content__title">
                      {portofolio.title}
                    </h1>
                    <div className="portofolio-content__color-palette">
                      {portofolio.colors.map((color, colorIndex) => (
                        <span
                          key={`color-item-${portofolioIndex}-${colorIndex}`}
                          style={{ backgroundColor: `${color}` }}
                          title={`${color.toUpperCase()}: Tap to copy`}
                          onClick={() => copyClipboard(color.toUpperCase())}
                        ></span>
                      ))}
                    </div>
                  </div>

                  <div className="portofolio-content__body">
                    {portofolio.description}
                  </div>

                  <div className="portofolio-content__foot">
                    <div className="portofolio-content__stacks">
                      {portofolio.stacks.map((stack, stackIndex) => (
                        <a
                          key={`stack-item-${portofolioIndex}-${stackIndex}`}
                          href={`${stack.url}`}
                          target="_blank"
                        >
                          <Image src={stack.image} alt={`${stack.name}`} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </>
  )
}
