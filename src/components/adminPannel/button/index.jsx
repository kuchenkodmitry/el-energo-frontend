import { Link } from "react-router-dom"
import style from "./style.module.css"
import { Typography } from "@mui/material"

function Button({icon, text, path}) {

    return (
        <Link style={{}} className={style.muneBtn} to={path}>
            <img width="19px" src={icon} alt="" />
            <Typography sx={{
                width: "190px",
                fontFamily: "SourceCodePro-SemiBold",
                fontSize: "18px"
            }} className={style.text}>
            {text}
            </Typography>
        </Link>
    )
}

export default Button