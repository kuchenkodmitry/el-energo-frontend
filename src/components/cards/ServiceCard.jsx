import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import s from './card.module.css'
import electromontajPng from "../main/img/ElectroMontaj.png"
import { useNavigate } from 'react-router-dom';


export default function OutlinedCard({Items}) {
  const navigate = useNavigate();
  const {title, description, img, url} = Items;
  return (
    <div onClick={() => {navigate(`${url}`)}} style={{display: "flex", flexDirection: "column"}}>
    <Box className={s.cardBox}>
      <Card variant="outlined">
        <CardContent className={s.cardContetnt} sx={{ padding: '0px', backgroundImage: `url(${img})`}}>
    <div className={s.shadowContent}>
      <Typography variant='p'  sx={{fontSize: "13px", letterSpacing: 3,color: "#FFFFFF" ,fontWeight: 500, textTransform: 'uppercase' }} className={s.cardText} >
      {description}
      </Typography>
    </div>
    </CardContent></Card>
    </Box>
    <Link className={s.serviceLink}>
      <Typography
      sx={{letterSpacing: 3, fontWeight: 'bold' , color: "black"}}
      >{title}</Typography>
    </Link>
    </div>
  );
}