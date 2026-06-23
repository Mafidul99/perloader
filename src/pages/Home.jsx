import React from 'react'
import Hero from './Hero/Hero'
import InfoCards from './Hero/InfoCards'
import About from './About'
import FinancialPosition from './FinancialPosition/FinancialPosition'
import Services from './Services/Services'
import Counter from './Services/Counter'
import Statistics from './Services/Statistics'
// import Contact from './Contact'
import Navigation from '../components/Header/ThemeToggle'


export const Home = () => {
  return (
    <>
    <div className="transition-colors duration-300 dark:bg-gray-800">
      <Hero />
      <InfoCards />
      <About />
      <Statistics />
      <FinancialPosition />
      <Services />
      {/* <Contact /> */}
    </div>

    </>
  )
}
