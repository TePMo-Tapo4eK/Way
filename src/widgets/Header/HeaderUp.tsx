import React from "react"
import s from './styles/HeaderUp.module.scss'
import logo from '../../images/logo.png'
import cart from '../../images/icons/cart.svg'
import profile from '../../images/icons/profile.svg'
import liked from '../../images/icons/liked.svg'
import search from '../../images/icons/search.svg'
const HeaderTop = () => {
    return(
        <div className={s.Header}>
            <a className={s.Header_Logo}><img src={logo} alt="-"/></a>
            <ul className={s.Header_Menu}>
                <li><img src={search} alt=""/><input type="text" placeholder="Найти..."/></li>
                <li><a><img src={liked} alt=""/></a></li>
                <li><a><img src={cart} alt=""/></a></li>
                <li><a><img src={profile} alt=""/></a></li>
            </ul>
        </div>
    )
}
export default HeaderTop
