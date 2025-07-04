import React, { useEffect, useState, useContext } from 'react';
import Muicard from '../cards/muiCard';
import s from './services.module.css';
import Typography from '@mui/material/Typography/Typography';
import { Animated } from 'react-animated-css';
import { PostContext } from '../context/postContext';

const API_BASE = process.env.REACT_APP_API_BASE || '';

function CompanyProjects() {
  const [posts, setPosts] = useState([]);
  const [postContext, setPostContext] = useContext(PostContext);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${API_BASE}/api/postsdb/project`);
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
        <Typography variant="h3" id="UsWorks" component="div" sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'center', letterSpacing: '.3rem' }}>
          Наши работы
        </Typography>
        <Typography variant="h4" component="div" sx={{ display: { xs: 'flex', md: 'none' }, fontSize: '38px', padding: '0 45px', marginTop: '130px', textAlign: 'center', letterSpacing: '.3rem' }}>
          Наши работы
        </Typography>
        <div className={s.cardList}>
          {CardList}
        </div>
      </Animated>
    </>
  );
}

export default CompanyProjects;
