import React, { useContext } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Otziv1 from './img/otziv_01.jpg'
import Otziv2 from './img/otziv_02.jpg'
import Otziv3 from './img/otziv_03.PNG'
import Otziv4 from './img/otziv_04.jpg'
import Otziv5 from './img/Otziv_5.PNG'
import Otziv6 from './img/Otziv_6.PNG'
import Otziv7 from './img/Otziv_7.PNG'
import s from './achivmentTabs.module.css'
import { ModalContext, PostContext } from '../context/postContext';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 3 },
};



const Gallery = () => {

    const [modalContext, setModalContext] = useContext(ModalContext);
    const [postContent, setPostContext] = useContext(PostContext);

    const items = [
        <img onClick={() => { setPostContext(DataImg); setModalContext({ img: Otziv7, title: "Рекомендательное письмо", id: 1 }); console.log(modalContext); }} src={Otziv7} onDragStart={handleDragStart} role="presentation" className={s.sizeImg} />,
        <img onClick={() => { setPostContext(DataImg); setModalContext({ img: Otziv5, title: "Рекомендательное письмо", id: 2 }); console.log(modalContext); }} src={Otziv5} onDragStart={handleDragStart} role="presentation" className={s.sizeImg} />,
        <img onClick={() => { setPostContext(DataImg); setModalContext({ img: Otziv3, title: "Рекомендательное письмо", id: 3 }); console.log(modalContext); }} src={Otziv3} onDragStart={handleDragStart} role="presentation" className={s.sizeImg} />,
        <img onClick={() => { setPostContext(DataImg); setModalContext({ img: Otziv6, title: "Рекомендательное письмо", id: 4 }); console.log(modalContext); }} src={Otziv6} onDragStart={handleDragStart} role="presentation" className={s.sizeImg} />,
        <img onClick={() => { setPostContext(DataImg); setModalContext({ img: Otziv4, title: "Рекомендательное письмо", id: 5 }); console.log(modalContext); }} src={Otziv4} onDragStart={handleDragStart} role="presentation" className={s.sizeImg} />,
        <img onClick={() => { setPostContext(DataImg); setModalContext({ img: Otziv1, title: "Рекомендательное письмо", id: 6 }); console.log(modalContext); }} src={Otziv1} onDragStart={handleDragStart} role="presentation" className={s.sizeImg} />,
        <img onClick={() => { setPostContext(DataImg); setModalContext({ img: Otziv2, title: "Рекомендательное письмо", id: 7 }); console.log(modalContext); }} src={Otziv2} onDragStart={handleDragStart} role="presentation" className={s.sizeImg} />,
    ];

    const DataImg = {
        gallary: [
            {
                img: Otziv7,
                title: "Рекомендательное письмо",
                id: 1
            },
            {
                img: Otziv5,
                title: "Рекомендательное письмо",
                id: 2
            },
            {
                img: Otziv6,
                title: "Рекомендательное письмо",
                id: 4
            },
            {
                img: Otziv1,
                title: "Рекомендательное письмо",
                id: 6
            },
            {
                img: Otziv2,
                title: "Рекомендательное письмо",
                id: 7
            },
            {
                img: Otziv3,
                title: "Рекомендательное письмо",
                id: 3
            },
            {
                img: Otziv4,
                title: "Рекомендательное письмо",
                id: 5
            }
        ]
    }



    return (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            disableDotsControls='false'
        />)
};

export default Gallery;