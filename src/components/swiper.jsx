import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

const slides = [
    'https://fikiwiki.com/uploads/posts/2022-02/1644972802_1-fikiwiki-com-p-kartinki-krasivie-na-android-1.jpg',
    'https://fikiwiki.com/uploads/posts/2022-02/1644972802_1-fikiwiki-com-p-kartinki-krasivie-na-android-1.jpg',
    'https://img1.akspic.ru/previews/7/4/7/9/6/169747/169747-ikanvas-art-pechat_na_holste-poster-oblako-500x.jpg',
    'https://fikiwiki.com/uploads/posts/2022-02/1644984017_1-fikiwiki-com-p-kartinki-zhivotnikh-na-avu-1.jpg'

]
   

export default () => {
  return (
    <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={1} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          {<img src={slideContent}/>}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};