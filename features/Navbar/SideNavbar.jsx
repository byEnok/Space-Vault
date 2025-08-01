'use client'
import Link from 'next/link'
import Image from 'next/image'
import { DotLottieReact, DotLottie } from '@lottiefiles/dotlottie-react'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'
import NavCard from './NavCard'
import SidebarOpened from '@/public/NavbarIcons/Sidebar/sidebarLeft.svg'
import SidebarClosed from '@/public/NavbarIcons/Sidebar/sidebarRight.svg'

function SideNavbar() {
  const [sideBarVisible, setSideBarVisible] = useState(false)

  const [homeHover, setHomeHover] = useState()
  const [aboutHover, setAboutHover] = useState()
  const [submitHover, setSubmitHover] = useState()

  // SIDEBAR ICON SIZE
  // const iconWidth = 32
  const iconWidth = 42
  // const iconHeight = 32
  const iconHeight = 42

  // LOTTIE ANIMATION SIZES
  const lottieWidthMd = 14
  const lottieHeightMd = 14

  // const navbarContainerClasses = ''

  const homeStatic = '/NavbarIcons/Home/earthStaticWithBG.jpg'
  const submitStatic = '/NavbarIcons/Submit/rocketStaticWithBG.jpg'
  const aboutStatic = '/NavbarIcons/About/astronautStaticWithBG.jpg'
  const staticImageSize = 56

  function ActivateAnimation(iconName) {
    // console.log('ON')

    switch (iconName) {
      case 'Home':
        setHomeHover(true)
        break
      case 'About':
        setAboutHover(true)
        break
      case 'Submit':
        setSubmitHover(true)
        break
      // default:
      // setHomeHover(false)
      // setAboutHover(false)
      // setSubmitHover(false)
    }
  }
  function DisableAnimation(iconName) {
    // console.log('OFF')

    switch (iconName) {
      case 'Home':
        setHomeHover(false)
        break
      case 'About':
        setAboutHover(false)
        break
      case 'Submit':
        setSubmitHover(false)
        break
      // default:
      //   setHomeHover(false)
      //   setAboutHover(false)
      //   setSubmitHover(false)
    }
  }

  useEffect(() => {
    if (window === undefined) return

    setHomeHover(false)
    setAboutHover(false)
    setSubmitHover(false)
  }, [])

  return (
    <main className='fixed top-12 left-0'>
      {/* <motion.div className={cn('flex flex-col justify-evenly items-center w-full rounded-md bg-opacity-100 mt-5 opacity-100 translate-x-0', { 'bg-opacity-0 h-fit': !sideBarVisible, 'p-1 bg-background': sideBarVisible })}> */}
      <motion.div className={cn('flex flex-col justify-evenly items-center w-full bg-background rounded-r-md bg-opacity-100  opacity-100', {})}>
        {/* ------------------- NAVBAR ICON ------------------- */}
        <SidebarOpened
          className={cn(`cursor-pointer transition-all duration-500 ease-in-out text-gray-400 rounded-r-md bg-background hover:-translate-x-[0.3rem]`, { 'hover:translate-x-[0.2rem] ': !sideBarVisible })}
          onClick={() => setSideBarVisible(!sideBarVisible)}
          fill='currentColor'
          width={iconWidth}
          height={iconHeight}
        />

        <AnimatePresence>
          {sideBarVisible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', scale: 1, opacity: 1 }}
              exit={{ height: 0, opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className={cn('flex flex-col justify-evenly items-center h-fit', {})}
            >
              {/*  ------------------- HOME ICON ------------------- */}
              <Link href='/' onMouseEnter={() => ActivateAnimation('Home')} onMouseLeave={() => DisableAnimation('Home')} className='relative transition-all duration-500 ease-in-out'>
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }} exit={{ y: -20, opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}>
                  {/* Show gif with conditional on useState */}
                  <Image className={cn('object-cover md:w-14 md:h-14 z-30', { hidden: homeHover })} src='/NavbarIcons/Home/earthStaticWithBG.jpg' width={staticImageSize} height={staticImageSize} alt='Home Icon' />
                  <DotLottieReact
                    className={cn(`h-12 w-12 md:h-${lottieHeightMd} md:w-${lottieWidthMd} transition-transform duration-500 ease-in-out z-30`, { hidden: !homeHover })}
                    autoplay
                    loop
                    src={homeHover ? 'https://lottie.host/27527025-6775-47bf-ad2f-79a46c7629c2/9bj1S8FNeP.lottie' : homeStatic}
                  />
                  <NavCard text={'Home'} hoverValue={homeHover} rightOffset={'-right-10'} hiddenTranslateX={'-translate-x-11'} showTranslateX={'sm'} />
                </motion.div>
              </Link>

              {/* ------------------- Submit Icon -  ADD NEW IMAGE TO DATABASE ------------------- */}
              <Link href='/Submit' onMouseEnter={() => ActivateAnimation('Submit')} onMouseLeave={() => DisableAnimation('Submit')} className='relative  transition-all duration-500 ease-in-out'>
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }} exit={{ y: -50, opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}>
                  {/* Show gif with conditinoal on useState */}
                  <Image className={cn('object-cover md:w-14 md:h-14 z-30', { hidden: submitHover })} src='/NavbarIcons/Submit/rocketStaticWithBG.jpg' width={staticImageSize} height={staticImageSize} alt='Submit Icon' />

                  {/* Shows animation after hover and stops animation off hover */}
                  <DotLottieReact
                    className={cn(`h-12 w-12 md:h-${lottieHeightMd} md:w-${lottieWidthMd} transition-transform duration-500 ease-in-out z-30`, { hidden: !submitHover })}
                    // autoplay={submitHover ? true : false}
                    autoplay
                    loop
                    src={submitHover ? 'https://lottie.host/2427bc21-d7b1-4be8-a368-c99b3ee32a4e/kEKxpvL9GP.lottie' : submitStatic}
                  />
                  {/* <DotLottieReact className='h-12 w-12 md:h-20 md:w-20 transition-transform duration-500 ease-in-out -rotate-45 hover:rotate-12' autoplay loop src={submitHover ? 'https://lottie.host/2427bc21-d7b1-4be8-a368-c99b3ee32a4e/kEKxpvL9GP.lottie' : submitStatic} /> */}
                  <NavCard text={'Submit'} hoverValue={submitHover} rightOffset={'-right-11'} hiddenTranslateX={'-translate-x-11'} showTranslateX={'md'} />
                </motion.div>
              </Link>

              {/* ------------------- About Icon - ABOUT THE WEBSITE AND SHOWING N8N AUTOMATION ------------------- */}
              <Link href='#' onMouseEnter={() => ActivateAnimation('About')} onMouseLeave={() => DisableAnimation('About')} className='relative transition-all duration-500 ease-in-out'>
                <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }} exit={{ y: -50, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}>
                  {/* Show gif with conditinoal on useState */}
                  {/* {aboutHover && <DotLottieReact className={cn(`h-12 w-16 md:h-${lottieHeightMd} md:w-${lottieWidthMd} transition-transform duration-500 ease-in-out z-20`, {})} autoplay loop src='https://lottie.host/8c492f20-28e7-4724-9a84-2edad418995a/oMxTEzZI4t.lottie' />} */}
                  <Image className={cn('object-cover md:w-14 md:h-14 z-30', { hidden: aboutHover })} src='/NavbarIcons/About/astronautStaticWithBG.jpg' width={staticImageSize} height={staticImageSize} alt='About Icon' />

                  {/* ------------------- Shows animation after hover and stops animation off hover ------------------- */}
                  <DotLottieReact
                    className={cn(`h-12 w-12 md:h-${lottieHeightMd} md:w-${lottieWidthMd} transition-transform duration-500 ease-in-out z-30`, { hidden: !aboutHover })}
                    // autoplay={aboutHover ? true : false}
                    autoplay
                    loop
                    src={aboutHover ? 'https://lottie.host/8c492f20-28e7-4724-9a84-2edad418995a/oMxTEzZI4t.lottie' : aboutStatic}
                  />
                  <NavCard text={'About'} hoverValue={aboutHover} rightOffset={'-right-10'} hiddenTranslateX={'-translate-x-11'} showTranslateX={'lg'} />
                </motion.div>
              </Link>
              {/* <ModeToggle /> */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {/* <SidebarClosed
            className={cn(`${navbarContainerClasses} text-red-400 hover:translate-x-[0.2rem] `, { 'hidden opacity-0 -translate-x-5 rotate-180': sideBarVisible })}
            onClick={() => setSideBarVisible(true)}
            fill='currentColor'
            width={iconWidth}
            height={iconHeight}
          /> */}
    </main>
  )
}

export default SideNavbar
