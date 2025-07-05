import { useEffect } from "react"
import style from "./style.module.css"
import FullPost from "../fullPost"
import { useParams } from "react-router-dom"
import CardList from '../post/cardList'
import EditPost from "../post/edit"
import { Typography } from "@mui/material"
import Contact from '../contact/index'

function ContentArea() {
    const { params } = useParams()

    if(params != undefined) {
        if (params == 'create_post') {
            return (
                <div className={style.areaBox}>
                    <EditPost/>
                </div>
            )
        }
        if (params == 'contact') {
            return (
                <div className={style.areaBox}>
                    <Contact/>
                </div>
            )
        }
        if (params == 'create_example') {
            return (
                <div className={style.areaBox}>
                    <EditPost/>
                </div>
            )
        }
        if (params == 'posts') {
            return (
                <div className={style.areaBox}>
                    <CardList/>
                </div>
            )
        }
        if (params == 'examples') {
            return (
                <div className={style.areaBox}>
                    <CardList/>
                </div>
            )
        }
        if (params.includes('full')) {
            const _id = params.split("-")[1]
            return (
                <div className={style.areaBox}>
                    <FullPost/>
                </div>
            )
        }
        if (params.includes('edit')) {
            const _id = params.split("-")[1]
            return (
                <div className={style.areaBox}>
                    <EditPost/>
                </div>
            )
        }
    }

    return (
        <div className={style.areaBox}>
            <Typography sx={{
            fontFamily: "SourceCodePro-SemiBold",
            fontSize: "24px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "left",
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "27px",
            marginBottom: "60px"
        }}>
        Выбери, что будем редактировать
        </Typography>
        </div>
    )
}

export default ContentArea