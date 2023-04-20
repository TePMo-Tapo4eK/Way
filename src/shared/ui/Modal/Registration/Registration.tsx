 import { FC } from "react";
import s from './styles/Registration.module.scss'
import DefaultButton from "../../../../shared/ui/Buttons/DefaultButton/DefaultButton";
import close from '../../../../images/icons/close-line.svg'


const RegistrationModal = () => {
    return(
        <div className={s.RegistrationModal_Screen}>
            <div className={s.RegistrationModal_Modal}>
                <div className={s.RegistrationModal_Registration}>
                    <h1 className={s.Title}>Регистрация</h1>
                    <div className={s.Form}>
                        <input placeholder="E-mail"/>
                        <input placeholder="ФИО"/>
                        <input placeholder="Пароль"/>
                        <input placeholder="Телефон"/>
                    </div>
                    <DefaultButton text='Зарегистрироваться'/>
                </div>
                <div className={s.RegistrationModal_Login}>
                    <h1 className={s.Title}>Вход</h1>
                    <div className={s.Form}>
                        <input placeholder="E-mail / Телефон"/>
                        <input placeholder="Пароль"/>
                        <a>Забыли пароль?</a>
                    </div>
                    <DefaultButton text='Войти'/>
                </div>
                <img src={close}/>
            </div>
        </div>
    )
}

export default RegistrationModal
