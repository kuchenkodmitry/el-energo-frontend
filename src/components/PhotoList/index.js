import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import s from './style.module.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'; // Material Icons

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxHeight: '90vh',
};

export default function MasonryImageList({ list }) {
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(null);

  const handleOpen = (index) => {
    setCurrentImage({ url: list[index], num: index, count: list.length });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleBack = () => {
    setCurrentImage((prev) => ({
      ...prev,
      num: (prev.num - 1 + prev.count) % prev.count,
      url: list[(prev.num - 1 + prev.count) % prev.count],
    }));
  };

  const handleNext = () => {
    setCurrentImage((prev) => ({
      ...prev,
      num: (prev.num + 1) % prev.count,
      url: list[(prev.num + 1) % prev.count],
    }));
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        height: '100%',
        '@media (max-width: 768px)': { maxWidth: 300 },
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            ...modalStyle,
            width: currentImage ? 'auto' : '1000px',
            maxWidth: '90vw',
            textAlign: 'center',
          }}
        >
          <Typography id="modal-title" variant="h6" gutterBottom>
            Просмотр изображения
          </Typography>
          <div
            className={s.centralFlex}
            style={{
              margin: '1rem 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            
            {currentImage && (
              <img
                src={currentImage.url}
                alt="Gallery item"
                style={{
                  maxWidth: '900px',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: 8,
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                }}
              />
            )}
            
          </div>
          <div style={{ display: 'flex', gap: '10px'}}>
          <button onClick={handleBack} className={s.button}>
              <ArrowBackIos className={s.icon} />
              Назад
            </button>
          {currentImage && (
            <Typography id="modal-description" style={{ marginTop: '0.5rem' }}>
              {currentImage.num + 1} из {currentImage.count}
            </Typography>
            
          )}
          <button onClick={handleNext} className={s.button}>
              Вперед
              <ArrowForwardIos className={s.icon} />
            </button>
          </div>
        </Box>
      </Modal>
      <ImageList variant="masonry" cols={3} gap={8}>
        {list.map((el, index) => (
          <ImageListItem key={el}>
            <img
              onClick={() => handleOpen(index)}
              src={`${el}?w=248&fit=crop&auto=format`}
              srcSet={`${el}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt=""
              loading="lazy"
              style={{ cursor: 'pointer', borderRadius: 4 }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
