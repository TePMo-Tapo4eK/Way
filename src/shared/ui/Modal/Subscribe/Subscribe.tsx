import { FC } from "react";
import s from './styles/Subscribe.module.scss'
import DefaultButton from "../../../../shared/ui/Buttons/DefaultButton/DefaultButton";
import close from '../../../../images/icons/close-line.svg'

const Subscribe = ({setIsSubscribe}:any) => {
    return(
        <div className={s.Subscribe}>
            <div className={s.Subscribe_Modal}>
                <p>Подпишитесь на нас чтобы получать уведомления о новых коллекциях, коллаборациях и скидках.</p>
                <div>
                    <input placeholder="E-mail"/>
                    <input placeholder="Имя"/>
                </div>
                <DefaultButton text='Подписаться'/>
                <img src={close} onClick={() => {setIsSubscribe(true)}}/>
            </div>
        </div>
    )
}
export default Subscribe