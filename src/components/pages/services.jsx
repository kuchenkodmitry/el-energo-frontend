import React, { useEffect, useState } from 'react';
import Muicard from '../cards/muiCard';
import s from './services.module.css';
import Typography from '@mui/material/Typography/Typography';
import { Animated } from 'react-animated-css';

const API_BASE = process.env.REACT_APP_API_BASE || '';

function Services() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${API_BASE}/api/postsdb/service`);
      if (res.ok) {
        setPosts(await res.json());
      }
    };
    load();
  }, []);

  const CardList = posts.map(card => (
    <Muicard cardInfo={card} key={card.id || card.title} />
  ));

  return (
    <>
      <div id="TitlePage"></div>
      <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
        <Typography variant="h3" component="div" sx={{ textAlign: 'center', display: {xs: 'none', md: 'block'}, letterSpacing: '.3rem' }}>
          Наши услуги
        </Typography>
        <Typography variant="h4" component="div" sx={{ margin:'150px 60px 0', textAlign: 'center', display: {xs: 'flex', md: 'none'}, letterSpacing: '.3rem' }}>
          Наши услуги
        </Typography>
        <div className={s.cardList}>
          {CardList}
        </div>
      </Animated>
    </>
  );
}

export default Services;
