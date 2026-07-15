import React from 'react'
import Hero from './Hero/Hero'
import InfoCards from './Hero/InfoCards'
import About from './About'
import FinancialPosition from './FinancialPosition/FinancialPosition'
import Services from './Services/Services'
import Statistics from './Services/Statistics'
import LiveChart from '../components/LiveChart'
// import Contact from './Contact'

export const Home = () => {
  return (
    <>
    <div className="transition-colors duration-300 dark:bg-gray-800">
      <Hero />
      <InfoCards />
      <About />
      <Statistics />
      <FinancialPosition />
      <LiveChart />
      <Services />
      {/* <Contact /> */}
    </div>

    </>
  )
}
