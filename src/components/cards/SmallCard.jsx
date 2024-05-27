import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {headerCardInfo} from '../header/headerCard'
import { ReactComponent as Call } from '../header/img/call.svg'
import s from './card.module.css'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(contactsInfo) {
  const conInfo = contactsInfo.contactsInfo;
  return (
    <>
    <Card sx={{ maxWidth: 300 , display: { xs: 'flex', md: 'none' }}}>
      <a href={conInfo.link}>
      <CardContent sx={{padding: '40px',cursor: 'pointer', display: "flex", flexDirection: 'column', gap: "25px"}}>
        <Typography variant="h6" component="div" className={s.contactTitle} sx={{fontSize: '18px'}}>
        {conInfo.image} {conInfo.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom variant="h6" component="div">
          {conInfo.subtitle}
        </Typography>
      </CardContent>
      </a>
    </Card>
    <Card sx={{ minWidth: 370, display: { xs: 'none', md: 'flex' } }}>
      <a href={conInfo.link}>
      <CardContent sx={{padding: '40px',cursor: 'pointer', display: "flex", flexDirection: 'column', gap: "25px"}}>
        <Typography variant="h6" component="div" className={s.contactTitle}>
        {conInfo.image} {conInfo.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom variant="h6" component="div">
          {conInfo.subtitle}
        </Typography>
      </CardContent>
      </a>
    </Card>
    </>
  );
}