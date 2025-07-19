import style from "./style.module.css"
import Button from "../button/index"
import { Typography } from "@mui/material"
import ArrowImg from "./images/Arrow1.png"
import Hope from "./images/Hope.png"
import Portal from "./images/Portal.png"
import Eye from "./images/Eye.png"
import Smile from "./images/Smile.png"
import Team from "./images/Team.png"
import Warm from "./images/Warm.png"
import Switch from "./images/Switch.png"
import Hole from './images/Hole.png'
import Transpency from "./images/Transparency.png"
import Party from './images/Party.png'
import Direction from './images/Direction.png'

const btnData = [
    {
        menuTitle: "Услуги:",
        btn: [
            {
                ImageUrl: Hope,
                btnName: "Редактировать",
                linkTo: '/admin/posts'
            },
            {
                ImageUrl: Portal,
                btnName: "Добавить новую запись",
                linkTo: '/admin/create_post'
            }
        ]
    },
    {
        menuTitle: "Примеры работ:",
        btn: [
            {
                ImageUrl: Hope,
                btnName: "Редактировать",
                linkTo: '/admin/examples'
            },
            {
                ImageUrl: Portal,
                btnName: "Добавить новую запись",
                linkTo: '/admin/create_example'
            }
        ]
    },
    {
        menuTitle: "Редактирование контактной информации:",
        btn: [
            {
                ImageUrl: Team,
                btnName: "Изменить" ,
                linkTo: '/admin/contact'
            },
        ]
    },
    {
        menuTitle: "Рекомендательные письма: ",
        btn: [
            {
                ImageUrl: Eye,
                btnName: "Загрузка и удаление" ,
            },
        ]
    },
    {
        menuTitle: "Редактировать информацию о компании:",
        btn: [
            {
                ImageUrl: Party,
                btnName: "Изменить описание и фото" 
            },
        ]
    },
]

function Menu() {
    return (
        <div className={style.box}>
            <div className={style.titleBlock}>
            <Typography sx={{
                marginTop: "17px",
                marginBottom: "28px",
                fontFamily: "SourceCodePro-Bold",
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
            }}>
            Что будем редактировать ?
            </Typography>
            <img style={{marginBottom: "20px"}} src={ArrowImg} alt="" />
            </div>
        {btnData.map((e, i) => {
            return(
            <div className={style.menuPart} key={i}>
                <Typography sx={{
                    fontFamily: "SourceCodePro-SemiBold",
                    fontSize: "18px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "left",
                    marginBottom: "15px"
                }}>
                    {e.menuTitle}
                </Typography>
                {e.btn.map((el, index) => {
                return <Button path={el.linkTo} icon={el.ImageUrl} key={index} text={el.btnName}/>
            })}
            </div>
            )
        })}
        </div>
    )
}
export default Menu