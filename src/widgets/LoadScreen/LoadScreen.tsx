import { FC } from "react";
import s from './styles/LoadScreen.module.scss'
import logoWhite from '../../images/logo-white.png'

const LoadScreen = () => {
    return(
        <div className={s.LoadScreen}>
            <img src={logoWhite}/>
        </div>
    )
}

export default LoadScreen