import { useEffect, useState } from 'react'
import HeaderTop from '../widgets/Header/HeaderUp'
import s from './styles/index.module.scss'
import MainPage from '../pages/MainPage/MainPage'
import Footer from '../widgets/Footer/Footer'
import LoadScreen from '../widgets/LoadScreen/LoadScreen'
import Cookies from '../entities/Cookies/Cookies'
import Subscribe from '../shared/ui/Modal/Subscribe/Subscribe'
import RegistrationModal from '../shared/ui/Modal/Registration/Registration'


function App() {

  const [Loading, setLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [isSubscribe, setIsSubscribe] = useState(false)
  
  const LoadingPage = () => {
    setTimeout(()=>{setLoading(true)}, 2000)
  }

  useEffect(()=>{LoadingPage()}, [])

  return (
    <div className={s.App}>
      {!Loading ? <LoadScreen/> : null}
      {!isLogin ? <RegistrationModal setIsLogin={setIsLogin}/> : null}
      {!isSubscribe ? <Subscribe setIsSubscribe={setIsSubscribe}/> : null}
      <HeaderTop/>
      <MainPage/>
      <Footer/>
      <Cookies/>
    </div>
  )
}

export default App
