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
  
  const LoadingPage = () => {
    setTimeout(()=>{setLoading(true)}, 2000)
  }
  console.log(Loading)

  useEffect(()=>{LoadingPage()}, [])

  return (
    <div className={s.App}>
      {!Loading ? <LoadScreen/> : null}
      <RegistrationModal/>
      <HeaderTop/>
      <MainPage/>
      <Footer/>
      <Cookies/>
      <Subscribe/>
    </div>
  )
}

export default App
