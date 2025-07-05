import s from './style.module.css'
import {Animated} from "react-animated-css";
import Typography from '@mui/material/Typography/Typography'
import { useSelector } from 'react-redux';
import Card from '../../cards/muiCard'

function CompanyProjects() {
    const { posts } = useSelector((state) => state.posts)
    const isLoadingPosts = posts.status === 'loading';
    const cards = posts.items.map(e => {
        <p>{e._id}</p>
    })
    return (
        <div className={s.container}>
            <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
            <h3 className={s.text}>
                Наши услуги
            </h3>
            <div className={s.cards}>
                {isLoadingPosts? <p>Посты не найдены</p> : posts.items.map((e) => {
        return(
            <div className={s.mobile}>
                <Card title={e.title}  text={e.text} img={e.imageUrl} id={e._id}/>
            </div>
        )
    })}
            </div>
            </Animated>
        </div>
    )
}



export default CompanyProjects;