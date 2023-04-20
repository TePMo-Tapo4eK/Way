 import { FC } from "react";
import s from './styles/Registration.module.scss'
import DefaultButton from "../../../../shared/ui/Buttons/DefaultButton/DefaultButton";
import close from '../../../../images/icons/close-line.svg'
import { Formik, Form, Field } from "formik";


const RegistrationModal = () => {
    return(
        <div className={s.RegistrationModal_Screen}>
            <div className={s.RegistrationModal_Modal}>
                <div className={s.RegistrationModal_Registration}>
                    <h1 className={s.Title}>Регистрация</h1>
                    <Formik
                    initialValues={{
                        email: '',
                        name: '',
                        password: '',
                        phoneNumber: ''
                    }}
                    onSubmit={v => {
                        console.log('submit', v)
                    }}
                    >
                        <Form className={s.Form}>
                            <Field id='email' name='email' placeholder="E-mail"/>
                            <Field id='name' name='name' placeholder="ФИО"/>
                            <Field id='password' name='password' placeholder="Пароль"/>
                            <Field id='phoneNumber' name='phoneNumber' placeholder="Телефон"/>
                            <DefaultButton text='Зарегистрироваться'/>
                        </Form>
                    </Formik>
                </div>
                <div className={s.RegistrationModal_Login}>
                    <h1 className={s.Title}>Вход</h1>
                    <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={v => {
                        console.log('submit', v)
                    }}
                    >
                        <Form className={s.Form}>
                            <Field id='email' name='email' placeholder="E-mail / Телефон"/>
                            <Field id='password' name='password' placeholder="Пароль"/>
                            <a>Забыли пароль?</a>
                            <DefaultButton text='Войти'/>
                        </Form>
                    </Formik>
                </div>
                <img src={close}/>
            </div>
        </div>
    )
}

export default RegistrationModal
