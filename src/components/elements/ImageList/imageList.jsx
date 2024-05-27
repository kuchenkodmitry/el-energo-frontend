import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ModalContext } from '../../context/postContext';
import s from './gallary.module.css'

export default function MasonryImageList(images) {
  const [modalContext, setModalContext] = React.useContext(ModalContext);
  const itemData = [...images.images];
  console.log(itemData);
  return (
    <>
    {itemData === [] ? null : <Box className={s.box}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => {
          console.log(item.img);
          return(
          <ImageListItem key={item.img}>
            <img
              onClick={() => {
                setModalContext({url: item.img, title: 'фото объекта', id: item.id})
                console.log(item.img);
              }}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        )})}
      </ImageList>
    </Box>}
    </>
  );
}

