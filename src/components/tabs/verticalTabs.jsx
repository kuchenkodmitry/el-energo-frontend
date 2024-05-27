import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@mui/material'
import s from "./tabs.module.css"
import {Link} from 'react-router-dom';
import elmw from './img/elmontaj.png'
import elmw2 from './img/elmon2.png'
import powerCabel from './img/powerCabel.png'
import productionWorksImg from "./img/2.f2d752da5c5068b5174f.jpg"
import boilerRoomImg from './img/boilerroom.png'
import autoRepairShop from "./img/autoRepairShop.png"

function Example(props)
{
    var items = [
        {
            name: 'Электромонтажные работы на производстве'.toUpperCase(),
            description: "Произведены демонтаж ячейки с автоматическим выключателем 1600 Ампер и 4 питающих и 4 отходящих ниток от ячейки, выполненных кабелей ПВВГнг(А)-LS 4х185 длиной по 25 метров (вертикальные участки для запитки магистрального шинопровода цеха). Далее был произведен монтаж этих кабелей для запитки шинопровода от другой ТП с установкой и подключением ячейки с АВ. В другом цехе произведено демонтаж 35 метров шинопровода закрытого типа KLM 2500 А, произведена замена вышедшего из строя элемента шинопровода и монтаж стыковочного элемента шинопровода с кабелями.",
            url: `${productionWorksImg}`
        },
        {
            name: "Электромонтажные работы в котельной (реконструкция)".toUpperCase(),
            description: 'Выполнена реконструкция системы электроснабжения котельной.Произведён монтаж кабеленесущих систем (лестничных и перфориванных лотков) - 250м.Произведены демонтаж старых РУ-0,4 и РУ-6 кВ.Смонтировано новое РУ-6 кВ - 5 ячеек (перенесены в новое помещение), смонтированы 2 линии кабелем ААШВ 3х95 от ячеек до трансформаторов, и 2 линии от существующей КЛ до вводных ячеек. Установлено 2 соеденительных и 6 концевых муфт.Смонтирово новое РУ-0,4 кВ - 7 ячеек, питающие линии 8 кабелей АВВГнг(А)-LS 4х185 от выводов трансформаторов до вводных ячеек РУ-0,4 кВ, установлено 16 перчаток термоусаживаемых.Смонтировано аварийное и рабочее освещение в котельной, помещениях ТП и РУ.Смонтированы линии до силовых распределительных щитов в котельной кабелями 5АВВГнг(А)-LS 1x240 и 5АВВГнг(А)-LS 1x95.',
            url: `${boilerRoomImg}`
        },
        {
            name: "Электромонтажные работы в автомастерской 200 м2".toUpperCase(),
            description: 'Выполнен электромонтаж в мастерской (высота потолков 7 метров).Смонтирован питающий кабель 5х10 протяженностью 60 метров, собран и установлен электрощит со степенью защиты IP 54.Смонтированы 10 однофазных тройных блоков розеток открытой проводки, 2 трехфазные розетки, 6 светильников, 10 распределительных коробок.',
            url: `${autoRepairShop}`
        },
        {
            name: "Электромонтажные работы на складе, площадь 860 кв. м".toUpperCase(),
            description: "Выполнили прокладку вводного силового кабеля ВВГнгLS 4х25 по улице. Установили щит. Произвели монтаж лотка ДКС для прокладки кабеля. Смонтировали освещение на высоте 6 метров на 1-м этаже. Выполнили на 2ом этаже подвес светильников на тросе на высоте 4 метра. Проложили питающие кабели 5х10 для силовых установок. Выполнили прокладку кабеля на питание кран-балки.",
            url: `${elmw}`
        },
        {
            name: "Электромонтаж на производстве, площадь 80 кв. м".toUpperCase(),
            description: "Выполнен монтаж перфорированного лотка. Выполнена прокладка розеточных групп, рабочего освещения и аварийного освещения. Смонтированы светильники. Произведен монтаж щита ГРЩ со счетчиком трансформаторного включения и щита освещения, управление освещением через контакторы. Установлены розетки 220В и 380В. Выполнен монтаж внутреннего контура заземления.",
            url: `${elmw2}`
        },
        {
            name: "Прокладка силового кабеля 5х240".toUpperCase(),
            description: "Прокладка трех ниток силового кабеля 5х240 общей протяженностью 850 метров. Разработка траншеи, устройство песчаной подушки, укладка сигнальной ленты. Выполнили монтаж концевых муфт и подключение. Произвели монтаж кабельных конструкций по эстакаде.",
            url: `${powerCabel}`
        }
    ]

    return (
        <Carousel autoPlay="true" animation="slide" interval="30000">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div className={s.sliderContent}>
            <img className={s.tabImage} src={props.item.url}/>
            <div className={s.slideContent}>
                <Typography
                variant='h5'
                sx={{color: 'white', letterSpacing: 4, textAlign: 'end', fontSize: '27px' ,display: {xs: 'none' , md: "flex"}}}
                >{props.item.name}
                </Typography>
                <Typography
                variant='p'
                sx={{color: 'white',pointerEvents: "none", maxWidth: '240px', letterSpacing: 1, display: {xs: 'block' , md: "none"}}}
                >{props.item.name}
                </Typography>
                <Typography
                variant='body1'
                sx={{color: '#B7B7B7', letterSpacing: 4, textAlign: 'end', display: {xs: 'none' , md: "flex"}}}
                >
                    {props.item.description}
                </Typography>
                <Typography
                variant='body1'
                sx={{color: '#B7B7B7', maxWidth: '240px',pointerEvents: "none", letterSpacing: 1, display: {xs: 'block' , md: "none"},
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineClamp: 3,
                boxOrient: "vertical",
            }}
                >
                    {props.item.description}
                </Typography>
                <Link to="/companyProjects" style={{color: 'white', zIndex: 6}}>УЗНАТЬ БОЛЬШЕ</Link>
            </div>
        </div>
    )
}

export default Example