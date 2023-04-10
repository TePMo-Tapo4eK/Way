import { FC } from "react";
import s from './styles/MainPage.module.scss'

const MainPage = () => {
    return(
        <div className={s.MainPage}>
            <div className={s.MainPage_Post_Image_Main}><h1>Way</h1></div>
            <div className={s.MainPage_Post_Image}>
                <div className={s.MainPage_Post_Image_1}></div>
                <div className={s.MainPage_Post_Image_2}></div>
                <div className={s.MainPage_Post_Image_3}></div>
            </div>
        </div>
    )
}
export default MainPage