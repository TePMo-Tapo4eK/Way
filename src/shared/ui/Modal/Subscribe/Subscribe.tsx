import { FC } from "react";
import s from './styles/Subscribe.module.scss'
import DefaultButton from "../../../../shared/ui/Buttons/DefaultButton/DefaultButton";

const Subscribe = () => {
    return(
        <div className={s.Subscribe}>
            <div className={s.Subscribe_Modal}>
                <p>Подпишитесь на нас чтобы получать уведомления о новых коллекциях, коллаборациях и скидках.</p>
                <div>
                    <input placeholder="E-mail"/>
                    <input placeholder="Имя"/>
                </div>
                <DefaultButton text='Подписаться'/>
            </div>
        </div>
    )
}
export default Subscribe