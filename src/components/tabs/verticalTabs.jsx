import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import s from './tabs.module.css';
import elmw from './img/elmontaj.png';
import elmw2 from './img/elmon2.png';
import powerCabel from './img/powerCabel.png';
import productionWorksImg from './img/2.f2d752da5c5068b5174f.jpg';
import boilerRoomImg from './img/boilerroom.png';
import autoRepairShop from './img/autoRepairShop.png';

function Example() {
  const items = [
    {
      name: 'Электромонтажные работы на производстве',
      description:
        'Произведены демонтаж ячейки с автоматическим выключателем 1600 Ампер и 4 питающих и 4 отходящих ниток от ячейки, выполненных кабелей ПВВГнг(А)-LS 4х185 длиной по 25 метров...',
      url: productionWorksImg,
    },
    {
      name: 'Электромонтажные работы в котельной (реконструкция)',
      description:
        'Выполнена реконструкция системы электроснабжения котельной.Произведён монтаж кабеленесущих систем (лестничных и перфориванных лотков) - 250м...',
      url: boilerRoomImg,
    },
    {
      name: 'Электромонтажные работы в автомастерской 200 м2',
      description:
        'Выполнен электромонтаж в мастерской (высота потолков 7 метров).Смонтирован питающий кабель 5х10 протяженностью 60 метров...',
      url: autoRepairShop,
    },
    {
      name: 'Электромонтажные работы на складе, площадь 860 кв. м',
      description:
        'Выполнили прокладку вводного силового кабеля ВВГнгLS 4х25 по улице. Установили щит. Произвели монтаж лотка ДКС для прокладки кабеля...',
      url: elmw,
    },
    {
      name: 'Электромонтаж на производстве, площадь 80 кв. м',
      description:
        'Выполнен монтаж перфорированного лотка. Выполнена прокладка розеточных групп, рабочего освещения и аварийного освещения...',
      url: elmw2,
    },
    {
      name: 'Прокладка силового кабеля 5х240',
      description:
        'Прокладка трех ниток силового кабеля 5х240 общей протяженностью 850 метров. Разработка траншеи, устройство песчаной подушки...',
      url: powerCabel,
    },
  ];

  return (
    <Carousel autoPlay={true} animation="slide" interval={30000}>
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <div className={s.sliderContent}>
      <img className={s.tabImage} src={item.url} alt={item.name} />
      <div className={s.slideContent}>
        <Typography
          variant="h5"
          sx={{
            color: 'white',
            letterSpacing: 4,
            textAlign: 'end',
            fontSize: '27px',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {item.name.toUpperCase()}
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: 'white',
            pointerEvents: 'none',
            maxWidth: '240px',
            letterSpacing: 1,
            display: { xs: 'block', md: 'none' },
          }}
        >
          {item.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#B7B7B7',
            letterSpacing: 4,
            textAlign: 'end',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {item.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#B7B7B7',
            maxWidth: '240px',
            pointerEvents: 'none',
            letterSpacing: 1,
            display: { xs: 'block', md: 'none' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 10,  // Ограничение до 5 строк
            WebkitBoxOrient: 'vertical',
            lineClamp: 10,  // Для Firefox и других браузеров
            boxOrient: 'vertical',
          }}
        >
          {item.description}
        </Typography>
        <Link to="/companyProjects" style={{ color: 'white', zIndex: 6 }}>
          УЗНАТЬ БОЛЬШЕ
        </Link>
      </div>
    </div>
  );
}

export default Example;
