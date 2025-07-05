import Muicard from '../cards/muiCard'
import s from './services.module.css'
import wareHouseFirstImg from './image/ourProject/electrical warehouse/image009.jpg'
import wareHouseSecondImg from './image/ourProject/electrical warehouse/image001.jpg'
import wareHouse3Img from './image/ourProject/electrical warehouse/image007.jpg'
import indastrialWiringFirstImg from './image/ourProject/indastrialWiring/image021.jpg'
import indastrialWiring2Img from './image/ourProject/indastrialWiring/image011.jpg'
import powerCabelInstallationFirstImg from './image/ourProject/powerCableInstallation/image025.jpg'
import powerCabelInstallation2Img from './image/ourProject/powerCableInstallation/image035.jpg'
import powerCabelInstallation3Img from './image/ourProject/powerCableInstallation/image039.jpg'
import boilerRoomImg1 from './image/ourProject/boilerRoom/boilerRoom1.jpg'
import boilerRoomImg2 from './image/ourProject/boilerRoom/boilerRoom2.jpg'
import boilerRoomImg3 from './image/ourProject/boilerRoom/boilerRoom3.jpg'
import boilerRoomImg4 from './image/ourProject/boilerRoom/boilerRoom4.jpg'
import boilerRoomImg5 from './image/ourProject/boilerRoom/boilerRoom5.jpg'
import boilerRoomImg6 from './image/ourProject/boilerRoom/boilerRoom6.jpg'
import boilerRoomImg7 from './image/ourProject/boilerRoom/boilerRoom7.jpg'
import boilerRoomImg8 from './image/ourProject/boilerRoom/boilerRoom8.jpg'
import boilerRoomImg9 from './image/ourProject/boilerRoom/boilerRoom9.jpg'
import AutorepairShop5img from './image/ourProject/autoRepairShop/5.jpg'
import AutorepairShop1img from './image/ourProject/autoRepairShop/1.jpg'
import AutorepairShop2img from './image/ourProject/autoRepairShop/2.jpg'
import AutorepairShop3img from './image/ourProject/autoRepairShop/3.jpg'
import AutorepairShop4img from './image/ourProject/autoRepairShop/4.jpg'
import ProductionWorkImg1 from './image/ourProject/ProductionWork/1.jpg'
import ProductionWorkImg2 from './image/ourProject/ProductionWork/2.jpg'
import ProductionWorkImg3 from './image/ourProject/ProductionWork/3.jpg'
import ProductionWorkImg4 from './image/ourProject/ProductionWork/4.jpg'
import ProductionWorkImg5 from './image/ourProject/ProductionWork/5.jpg'
import ProductionWorkImg6 from './image/ourProject/ProductionWork/6.jpg'
import ProductionWorkImg7 from './image/ourProject/ProductionWork/7.jpg'
import ProductionWorkImg8 from './image/ourProject/ProductionWork/8.jpg'
import ProductionWorkImg9 from './image/ourProject/ProductionWork/9.jpg'
import ProductionWorkImg10 from './image/ourProject/ProductionWork/10.jpg'
import {Animated} from "react-animated-css";
import Typography from '@mui/material/Typography/Typography'
import { useContext, useState } from 'react'
import { PostContext } from '../context/postContext';



export const Cardcontent = [
    {
        title: "Электромонтажные работы на производстве",
        description: "Произведены демонтаж ячейки с автоматическим выключателем 1600 Ампер и 4 питающих и 4 отходящих ниток от ячейки, выполненных кабелей ПВВГнг(А)-LS 4х185 длиной по 25 метров (вертикальные участки для запитки магистрального шинопровода цеха).",
        typographyTop: [
            {
                text: ["Произведены демонтаж ячейки с автоматическим выключателем 1600 Ампер и 4 питающих и 4 отходящих ниток от ячейки, выполненных кабелей ПВВГнг(А)-LS 4х185 длиной по 25 метров (вертикальные участки для запитки магистрального шинопровода цеха).",
                    "Далее был произведен монтаж этих кабелей для запитки шинопровода от другой ТП с установкой и подключением ячейки с АВ.",
                    "В другом цехе произведено демонтаж 35 метров шинопровода закрытого типа KLM 2500 А, произведена замена вышедшего из строя элемента шинопровода и монтаж стыковочного элемента шинопровода с кабелями.",
                    "Наварены полки к металлоконструкциям цеха под монтаж кабельных линий.",
                    "Смонтировано 8 ниток кабелей АВВГнг(А)-LS 4х240 длиной по 35 метров, установлено 16 муфт, произведено подключение со стороны трансформаторной подстанции и подключение к стыковочному элементу шинопровода."
                ],
                tag: 'p',
                style: {}
            }
        ],
        price: 'Стоимость работ 900 тыс. руб.',
        image: ProductionWorkImg2,
        url: '/productinWork',
        gallary: [
            {
                img: ProductionWorkImg1,
                title: "результатрезультат",
                id: 1
            },
            {
                img: ProductionWorkImg2,
                title: "результатрезультат",
                id: 2
            },
            {
                img: ProductionWorkImg3,
                title: "результатрезультат",
                id: 3
            },
            {
                img: ProductionWorkImg4,
                title: "результатрезультат",
                id: 4
            },
            {
                img: ProductionWorkImg5,
                title: "результат",
                id: 5
            },
            {
                img: ProductionWorkImg6,
                title: "результат",
                id: 6
            },
            {
                img: ProductionWorkImg7,
                title: "результат",
                id: 7
            },
            {
                img: ProductionWorkImg8,
                title: "результат",
                id: 8
            },
            {
                img: ProductionWorkImg9,
                title: "результат",
                id: 9
            },
            {
                img: ProductionWorkImg10,
                title: "результат",
                id: 10
            }
        ]
    },
    {
        title: "Электромонтажные работы в котельной (реконструкция) ",
        description: "Выполнена реконструкция системы электроснабжения котельной.Произведён монтаж кабеленесущих систем (лестничных и перфориванных лотков) - 250м. Произведены демонтаж старых РУ-0,4 и РУ-6 кВ. Смонтировано новое РУ-6 кВ - 5 ячеек (перенесены в новое помещение), смонтированы 2 линии кабелем ААШВ 3х95 от ячеек до трансформаторов, и 2 линии от существующей КЛ до вводных ячеек. Установлено 2 соеденительных и 6 концевых муфт. Смонтирово новое РУ-0,4 кВ - 7 ячеек, питающие линии 8 кабелей АВВГнг(А)-LS 4х185 от выводов трансформаторов до вводных ячеек РУ-0,4 кВ, установлено 16 перчаток термоусаживаемых. Смонтировано аварийное и рабочее освещение в котельной, помещениях ТП и РУ. Смонтированы линии до силовых распределительных щитов в котельной кабелями 5АВВГнг(А)-LS 1x240 и 5АВВГнг(А)-LS 1x95. ",
        typographyTop: [
            {
                text: ["Выполнена реконструкция системы электроснабжения котельной. ",
                    'Произведён монтаж кабеленесущих систем (лестничных и перфориванных лотков) - 250м.',
                    "Произведены демонтаж старых РУ-0,4 и РУ-6 кВ.",
                    "Смонтировано новое РУ-6 кВ - 5 ячеек (перенесены в новое помещение), смонтированы 2 линии кабелем ААШВ 3х95 от ячеек до трансформаторов, и 2 линии от существующей КЛ до вводных ячеек. Установлено 2 соеденительных и 6 концевых муфт.",
                    "Смонтирово новое РУ-0,4 кВ - 7 ячеек, питающие линии 8 кабелей АВВГнг(А)-LS 4х185 от выводов трансформаторов до вводных ячеек РУ-0,4 кВ, установлено 16 перчаток термоусаживаемых.",
                    "Смонтировано аварийное и рабочее освещение в котельной, помещениях ТП и РУ.",
                    "Смонтированы линии до силовых распределительных щитов в котельной кабелями 5АВВГнг(А)-LS 1x240 и 5АВВГнг(А)-LS 1x95. "],
                style: {},
                tag: "p"
            }
        ],
        image: boilerRoomImg9,
        price: 'Стоимость работ 1100 тыс. рублей. ',
        url: '/boilerRoom',
        gallary: [
            {
                img: boilerRoomImg1,
                title: "результат",
                id: 1
            },
            {
                img: boilerRoomImg2,
                title: "результат",
                id: 2
            },
            {
                img: boilerRoomImg3,
                title: "результат",
                id: 3
            },
            {
                img: boilerRoomImg4,
                title: "результат",
                id: 4
            },
            {
                img: boilerRoomImg5,
                title: "результат",
                id: 5
            },
            {
                img: boilerRoomImg6,
                title: "результат",
                id: 6
            },
            {
                img: boilerRoomImg7,
                title: "результат",
                id: 7
            },
            {
                img: boilerRoomImg8,
                title: "результат",
                id: 8
            },
            {
                img: boilerRoomImg9,
                title: "результат",
                id: 9
            }
        ]
    },
    {
        title: "Прокладка силового кабеля 5х240",
        description: "Прокладка трех ниток силового кабеля 5х240 общей протяженностью 850 метров. Разработка траншеи, устройство песчаной подушки, укладка сигнальной ленты. Выполнили монтаж концевых муфт и подключение. Произвели монтаж кабельных конструкций по эстакаде.        ",
        typographyTop: [
            {
                text: ["Прокладка трех ниток силового кабеля 5х240 общей протяженностью 850 метров. Разработка траншеи, устройство песчаной подушки, укладка сигнальной ленты. Выполнили монтаж концевых муфт и подключение. Произвели монтаж кабельных конструкций по эстакаде.        "],
                style: {},
                tag: "p"
            },
        ],
        image: powerCabelInstallationFirstImg,
        url: '/powerCabelInstallation',
        gallary: [
            {
                img: powerCabelInstallation2Img,
                title: "результат",
                id: 1
            },
            {
                img: powerCabelInstallationFirstImg,
                title: "результат",
                id: 2
            },
            {
                img: powerCabelInstallation3Img,
                title: "результат",
                id: 3
            }
        ]
    },
    {
        title: "Электромонтажные работы на складе, площадь 860 кв. м",
        description: "Выполнили прокладку вводного силового кабеля ВВГнгLS 4х25 по улице. Установили щит. Произвели монтаж лотка ДКС для прокладки кабеля. Смонтировали освещение на высоте 6 метров на 1-м этаже. Выполнили на 2ом этаже подвес светильников на тросе на высоте 4 метра. Проложили питающие кабели 5х10 для силовых установок. Выполнили прокладку кабеля на питание кран-балки.",
        typographyTop: [
            {
                text: [
                    "Выполнили прокладку вводного силового кабеля ВВГнгLS 4х25 по улице. Установили щит. Произвели монтаж лотка ДКС для прокладки кабеля. Смонтировали освещение на высоте 6 метров на 1-м этаже. Выполнили на 2ом этаже подвес светильников на тросе на высоте 4 метра. Проложили питающие кабели 5х10 для силовых установок. Выполнили прокладку кабеля на питание кран-балки."
                ],
                style: {},
                tag: "p"
            }
        ],
        times: 'Сроки: 12 дней',
        price: 'Бюджет: 230 000 рублей',
        image: wareHouseFirstImg,
        url: '/wareHouseFirst',
        gallary: [
            {
                img: wareHouseFirstImg,
                title: "результат",
                id: 1
            },
            {
                img: wareHouseSecondImg,
                title: "результат",
                id: 2
            },
            {
                img: wareHouse3Img,
                title: "результат",
                id: 3
            }
        ]
    }, {
        title: "Электромонтаж на производстве, площадь 80 кв. м",
        description: "Выполнен монтаж перфорированного лотка. Выполнена прокладка розеточных групп, рабочего освещения и аварийного освещения. Смонтированы светильники. Произведен монтаж щита ГРЩ со счетчиком трансформаторного включения и щита освещения, управление освещением через контакторы. Установлены розетки 220В и 380В. Выполнен монтаж внутреннего контура заземления.",
        typographyTop: [
            {
                text: [
                    "Выполнен монтаж перфорированного лотка. Выполнена прокладка розеточных групп, рабочего освещения и аварийного освещения. Смонтированы светильники. Произведен монтаж щита ГРЩ со счетчиком трансформаторного включения и щита освещения, управление освещением через контакторы. Установлены розетки 220В и 380В. Выполнен монтаж внутреннего контура заземления."
                ],
                style: {},
                tag: 'p'
            }
        ],
        image: indastrialWiringFirstImg,
        url: '/indastrialWiring',
        times: 'Сроки: 9 дней',
        price: 'Бюджет: 115 000 рублей',
        gallary: [
            {
                img: indastrialWiring2Img,
                title: "результат",
                id: 1
            },
            {
                img: indastrialWiringFirstImg,
                title: "результат",
                id: 2
            },
        ]

    },
    {
        title: "Электромонтажные работы в автомастерской 200 м2 ",
        description: "Выполнен электромонтаж в мастерской (высота потолков 7 метров). Смонтирован питающий кабель 5х10 протяженностью 60 метров, собран и установлен электрощит со степенью защиты IP 54. ",
        typographyTop: [
            {
                text: [
                    "Выполнен электромонтаж в мастерской (высота потолков 7 метров).",
                    "Смонтирован питающий кабель 5х10 протяженностью 60 метров, собран и установлен электрощит со степенью защиты IP 54.",
                    "Смонтированы 10 однофазных тройных блоков розеток открытой проводки, 2 трехфазные розетки, 6 светильников, 10 распределительных короб"
                ],
                tag: 'p',
                style: {}
            }
        ],
        price: 'Стоимость работ 97 тыс. рублей. ',
        image: AutorepairShop5img,
        url: '/AutorepairShop',
        gallary: [
            {
                img: AutorepairShop1img,
                title: "результат",
                id: 1
            },
            {
                img: AutorepairShop2img,
                title: "результат",
                id: 2
            },
            {
                img: AutorepairShop3img,
                title: "результат",
                id: 3
            },
            {
                img: AutorepairShop4img,
                title: "результат",
                id: 4
            },
            {
                img: AutorepairShop5img,
                title: "результат",
                id: 5
            }
        ]
    }
]

function CompanyProjects() {
    const [postContext, setPostContext] = useContext(PostContext);
    const info = Cardcontent.find((e) => e.url === '/boilerRoom')
    console.log(info);

    const CardList = Cardcontent.map((card) => {
        return (
            <>
                <Muicard cardInfo={card} key={card.title} />
            </>
        )
    })
    return (
        <>
        <div id="TitlePage"></div>
            <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
            <Typography variant="h3" id="UsWorks" component="div" sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'center', letterSpacing: '.3rem' }}>
                Наши работы
            </Typography>
            <Typography variant="h4" component="div" sx={{ display: { xs: 'flex', md: 'none' }, fontSize: '38px', padding: '0 45px', marginTop: "130px", textAlign: 'center', letterSpacing: '.3rem' }}>
                Наши работы
            </Typography>
            <div className={s.cardList}>
                {CardList}
            </div>
            </Animated>
        </>
    )
}

export default CompanyProjects;