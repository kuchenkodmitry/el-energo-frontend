import React, { useContext } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Otziv1 from './img/otziv_01.jpg';
import Otziv2 from './img/otziv_02.jpg';
import Otziv3 from './img/otziv_03.PNG';
import Otziv4 from './img/otziv_04.jpg';
import Otziv5 from './img/Otziv_5.PNG';
import Otziv6 from './img/Otziv_6.PNG';
import Otziv7 from './img/Otziv_7.PNG';
import s from './achivmentTabs.module.css';
import { ModalContext, PostContext } from '../context/postContext';

// Обработчик перетаскивания
const handleDragStart = (e) => e.preventDefault();

// Конфигурация для адаптивности слайдера
const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 3 },
};

const Gallery = () => {
    const [modalContext, setModalContext] = useContext(ModalContext);
    const [postContent, setPostContext] = useContext(PostContext);

    // Данные для изображений и названий
    const galleryData = [
        { img: Otziv7, title: "Рекомендательное письмо", id: 1 },
        { img: Otziv5, title: "Рекомендательное письмо", id: 2 },
        { img: Otziv3, title: "Рекомендательное письмо", id: 3 },
        { img: Otziv6, title: "Рекомендательное письмо", id: 4 },
        { img: Otziv4, title: "Рекомендательное письмо", id: 5 },
        { img: Otziv1, title: "Рекомендательное письмо", id: 6 },
        { img: Otziv2, title: "Рекомендательное письмо", id: 7 },
    ];

    // Функция для обновления контекста модального окна
    const setModal = (img, title, id) => {
        setPostContext({ gallary: galleryData });
        setModalContext({ img, title, id });
    };

    // Генерация элементов с изображениями
    const items = galleryData.map((item) => (
        <img
            key={item.id}
            onClick={() => setModal(item.img, item.title, item.id)} // Вызываем функцию для открытия модалки
            src={item.img}
            onDragStart={handleDragStart}
            role="presentation"
            className={s.sizeImg} // Применяем стиль с курсором pointer
        />
    ));

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            disableDotsControls={true} // Отключаем кружочки
            controlsStrategy="responsive" // Оставляем только стрелочки
        />
    );
};

export default Gallery;
