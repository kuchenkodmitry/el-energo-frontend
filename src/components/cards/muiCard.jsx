import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { PostContext } from '../context/postContext';


export default function ActionAreaCard(cardInfo) {
  const card = cardInfo.cardInfo;
  const [postContext, setPostContext] = React.useContext(PostContext);
  const [postInfo, setPostInfo] = useState([])

  React.useEffect(() => {
    setPostInfo(card);
  }, [cardInfo])

  const navigate = useNavigate()
   function handleLink () {
    setPostContext(card);
    navigate(`/companyProjects${card.url}`)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleLink}>
        <CardMedia
          component="img"
          height="140"
          image={card.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}