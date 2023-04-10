import { FC } from "react";
import s from './styles/Cookies.module.scss'
import DefaultButton from "../../shared/ui/Buttons/DefaultButton/DefaultButton";

const Cookies = () => {
    return(
        <div className={s.Cookies}>
            <div className={s.Cookies_Content}>
            <p>Мы используем файлы cookie, чтобы обеспечивать правильную работу нашего веб-сайта, персонализировать рекламные объявления и другие материалы, 
                обеспечивать работу функций социальных сетей и анализировать сетевой трафик. Мы также предоставляем информацию об использовании вами 
                нашего веб-сайта своим партнерам по социальным сетям, рекламе и аналитическим системам.
            </p>
            <div className={s.Cookies_Content_Buttons}>
                <DefaultButton text='Отмена'/>
                <DefaultButton text='Подтвердить'/>
            </div>
            </div>
        </div>
    )
}
export default Cookies