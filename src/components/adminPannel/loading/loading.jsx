import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';

export default function Loading() {
  return (
  <div style={{
    width: '400px',
    margin: "150px auto",
    display: "flex"
  }}>
    <Typography sx={{
        fontFamily: "SourceCodePro-SemiBol",
        fontSize: "35px"
    }}>
        Загрузка страницы
    </Typography>
  <CircularProgress disableShrink />
  </div>
  )
}