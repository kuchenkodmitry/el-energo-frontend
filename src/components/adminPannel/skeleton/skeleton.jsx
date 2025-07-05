import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import s from '../post/style.module.css'

export default function PostLoading() {
  return (
      <div className={s.cardBlock}>
      <Skeleton sx={{ height: "156px", width: "236px", borderRadius: "14px" }} animation="wave" variant="rectangular" />
      <Skeleton animation="wave" variant="rectangular" width={150} height={15} sx={{marginTop: "15px", marginLeft: "-80px"}}/>
      <Skeleton animation="wave" variant="rectangular" width={200} height={10} sx={{marginTop: "15px", marginLeft: "-30px"}}/>
      <Skeleton animation="wave" variant="rectangular" width={150} height={10} sx={{marginTop: "10px", marginLeft: "-80px"}}/>
      <div className={s.btnBox}>
            <button className={s.btnEdit}>Удалить</button>
            <button className={s.btnEdit}>Изменить</button>
        </div>
      </div>
  );
}