import { FC } from "react";
import s from './styles/DefaultButton.module.scss'

interface props{
    text: string;
}

const DefaultButton = ({text}:props):JSX.Element => {
    return(
        <button type="submit" className={s.DefaultButton}>{text}</button>
    )
}
export default DefaultButton