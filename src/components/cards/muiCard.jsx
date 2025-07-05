import * as React from 'react';
import s from './card.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard({title, text, img, id}) {
const navigate = useNavigate();
const view = () => {
  navigate(`${id}`)
}
  return (
    <Card  onClick={view} sx={{ width: 345 }}>
      <CardActionArea sx={{height: 350}}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p className={s.text}>
            {text}
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}