import { FC } from "react";
import s from './styles/Footer.module.scss';

const Footer = () => {
    return(
        <div className={s.Footer}> 
            <ul className={s.Footer_Menu}>
                <li>FAQ</li>
                <li>Политика конфиденциальности</li>
                <li>Публичная оферта</li>
                <li>Instagram</li>
            </ul>
            <p className={s.Footer_copyright}>© 2021 WAYYOUCHOOSE. ALL RIGHTS RESERVED.</p>
        </div>
    )
}
export default Footer