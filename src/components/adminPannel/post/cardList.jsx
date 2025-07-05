import style from './style.module.css'
import { useEffect } from 'react';
import CardPost from "./cardPost"
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchPosts } from '../../../redux/slices/posts'
import { fetchexamples } from '../../../redux/slices/examples';
import PostLoading from '../skeleton/skeleton';

function CardList() {
    const location = useLocation()
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts)
    const { examples } = useSelector((state) => state.examples)
    const isLoadingPosts = posts.status === 'loading';

    useEffect(() => {
        dispatch(fetchPosts()) //Производим экщон (параметр функция из слайса постс);
        dispatch(fetchexamples())
      },[])


    return ( 
    <>
    <Typography sx={{
        fontFamily: "SourceCodePro-SemiBold",
        fontSize: "24px",
        lineHeight: "100%",
        letterSpacing: "0%",
        textAlign: "left",
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "27px",
        marginBottom: "60px"
    }}>
    Редактирование и удаление постов
    </Typography>
    <div className={style.listBlock}>
    {(isLoadingPosts? [...Array(9)] : (location.pathname.indexOf("examples") !== -1 ? examples.items :  posts.items)).map(e => isLoadingPosts?  
    <PostLoading/> : <CardPost 
    _id={e._id}
    title={e.title}
    UrlImage={e.imageUrl}
    description={e.description}
    />
    )}
    </div>
    </>
    )
}

export default CardList