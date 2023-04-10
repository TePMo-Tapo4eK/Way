import { useState } from 'react'
import HeaderTop from '../widgets/Header/HeaderUp'
import s from './styles/index.module.scss'
import MainPage from '../pages/MainPage/MainPage'
import Footer from '../widgets/Footer/Footer'
import LoadScreen from '../widgets/LoadScreen/LoadScreen'
import Cookies from '../entities/Cookies/Cookies'
import Subscribe from '../shared/ui/Modal/Subscribe/Subscribe'


function App() {
  return (
    <div className={s.App}>
      {/* <LoadScreen/> */}
      <HeaderTop/>
      <MainPage/>
      <Footer/>
      <Cookies/>
      <Subscribe/>
    </div>
  )
}

export default App