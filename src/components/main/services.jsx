import { Typography } from "@mui/material";
import s from "./services.module.css"
import ServiceCard from '../cards/ServiceCard'
import montajPng from "./img/laba.jpg"
import montajJpg from "./img/obsl_electro.jpg"
import projectJpg from "./img/1920.jpg"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {Animated} from "react-animated-css";

function Services (){
    const Items = [
        {
            title: "электролаборатория".toUpperCase(),
            description: "Для предотвращения нештатных ситуаций и обеспечения бесперебойной работы электроустановок и оборудования необходимо периодически проводить обследования и измерение основных требуемых параметров.Лаборатория укомплектована переносными приборами и имеет право на проведение измерений, а также эксплуатационных и приемо-сдаточных испытаний электрооборудования до 10 кВ..",
            img: `${montajPng}`,
            url: "/companyProjects/ElectroLaboratory"
        },
        {
            title: "Электромонтажные работы".toUpperCase(),
            description: "Качественный монтаж снижает стоимость дальнейшей эксплуатации, а также аварийность объекта. Организуем и выполним электромонтаж на объекте под ключ с помощью команды специалистов с разработкой проекта электроснабжения и последующим введением в эксплуатацию до получения разрешительной документации.",
            img: `${projectJpg}`,
            url: '/companyProjects/ELECTRICINSTALLATIONWORK'
        },
        {
            title: "Обслуживание электрохозяйства".toUpperCase(),
            description: "Обслуживание электрохозяйства или электроустановки в настоящее время является неотъемлемой составляющей в эксплуатации зданий и сооружений или отдельных их помещений и электрооборудования.",
            img: `${montajJpg}`,
            url: '/companyProjects/PowerService'
        }
    ]
    const navigate = useNavigate();

    function handleLink () {
        navigate('/services')
    }

    return (
        <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
        <div className={s.serviceContent}>
            <div onClick={handleLink} style={{cursor: 'pointer'}}>
            <Typography 
            variant="h4"
            sx={{letterSpacing: 5}}
            >
                НАШИ УСЛУГИ
            </Typography>
            <Typography
            variant="p"
            sx={{textDecoration: 'underline', cursor: "pointer", fontSize: 17}}
            >
                Перейти к каталогу услуг
            </Typography>
            </div>
            <div className={s.serviceCard}>
            {Items.map((e) => {
                return(
                <ServiceCard Items={{title: e.title, description: e.description, img: e.img, url: e.url}}/>
            )})}
            </div>
        </div>
        </Animated>
    )
}

export default Services;