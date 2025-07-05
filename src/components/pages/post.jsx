import * as React from 'react';
import Typography from '@mui/material/Typography';
import Gallary from '../elements/ImageList/imageList';
import s from './post.module.css';
import { useParams } from 'react-router-dom';
import { PostContext } from '../context/postContext';
import { Animated } from 'react-animated-css';

export default function PostPage() {
  const { id } = useParams();
  const [postContext, setPostContext] = React.useContext(PostContext);

  React.useEffect(() => {
    if (!postContext || !postContext.url) {
      const load = async () => {
        const s = await fetch('/api/postsdb/service').then(r => r.json());
        const p = await fetch('/api/postsdb/project').then(r => r.json());
        const joined = [...s, ...p];
        const found = joined.find(e => e.url === `/${id}`);
        if (found) setPostContext(found);
      };
      load();
    }
  }, [id]);

  if (!postContext) {
    return null;
  }

  const textItemsTop = postContext.typographyTop;
  const textItemsBottom = postContext.typographyBottom;

  return (
    <>
      <div id="TitlePage"></div>
      <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
        <div className={s.postContent}>
          <Typography
            variant="h4"
            sx={{ letterSpacing: 5, display: { xs: 'none', md: 'flex' }, textAlign: 'center', marginTop: '80px', marginBottom: '70px' }}
          >
            {postContext.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ letterSpacing: 3, fontSize: '23px', display: { xs: 'flex', md: 'none' }, textAlign: 'center', marginTop: '100px', marginBottom: '70px' }}
          >
            {postContext.title}
          </Typography>
          <div className={s.displayflexContent}>
            {postContext.gallary !== undefined ? (
              <div className={s.gallarySize}>
                <Gallary images={postContext.gallary} />
              </div>
            ) : (
              <img className={s.MainImg} src={postContext.image} alt='' />
            )}
            <div>
              {textItemsTop !== undefined
                ? textItemsTop.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {item.text.map((textItem, i) => (
                        <Typography key={i} variant={item.tag} style={item.style} component="div" sx={{ maxWidth: '500px', letterSpacing: '.2rem', color: '#3F3E3E', fontSize: '17px' }}>
                          {textItem}
                        </Typography>
                      ))}
                      <br />
                    </React.Fragment>
                  ))
                : null}
              <Typography variant="p" component="div" sx={{ maxWidth: '500px', letterSpacing: '.2rem', color: '#3F3E3E', fontSize: '17px' }}>
                {postContext.price}
              </Typography>
            </div>
          </div>
          {textItemsBottom !== undefined
            ? textItemsBottom.map((item, idx) => (
                <React.Fragment key={idx}>
                  {item.text.map((textItem, i) => (
                    <Typography key={i} variant={item.tag} style={item.style} component="div" sx={{ letterSpacing: '.2rem', color: '#3F3E3E', fontSize: '17px' }}>
                      {textItem}
                    </Typography>
                  ))}
                  <br />
                </React.Fragment>
              ))
            : null}
        </div>
      </Animated>
    </>
  );
}
