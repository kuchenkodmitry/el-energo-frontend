import style from "./style.module.css"
import logo from '../images/logoAdmin.png'
import { Typography } from "@mui/material"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={style.contentBox}>
            <div className={style.flexLogo}>
                <img width={60} src={logo} />
                <div className={style.logoText}>
                    <Typography sx={{
                        fontFamily: 'Inter-SemiBold',
                        fontSize: "28px"
                    }}
                        className={style.logoTitle}
                    >
                        El-energo
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Inter-ExtraLight",
                        fontSize: "20px"}} className={style.logoDescription}>
                        Управление сайтом
                    </Typography>
                </div>
            </div>
            <Link className={style.button} to="/"> Вернуться на сайт </Link>
        </div>
    )
}

export default Header