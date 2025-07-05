import s from './style.module.css'
import {Animated} from "react-animated-css";
import Typography from '@mui/material/Typography/Typography'
import { useSelector } from 'react-redux';
import Card from '../../cards/muiCard'
// import Test from './test'

function CompanyProjects() {
    const { posts } = useSelector((state) => state.posts)
    const { examples } = useSelector((state) => state.examples)
    const isLoadingPosts = posts.status === 'loading';
    const cards = examples.items.map(e => {
        <p>{e._id}</p>
    })
    return (
        <div className={s.container}>
            <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
            <h3 className={s.text}>
                наши проекты
            </h3>
            <div className={s.cards}>
                {isLoadingPosts? <p>Посты не найдены</p> : examples.items.map((e) => {
        return(
            <div className={s.mobile}>
                <Card title={e.title}  text={e.text} img={e.imageUrl} id={e._id}/>
            </div>
        )
    })}
            </div>
{/* <Test/> */}
            </Animated>
        </div>
    )
}



export default CompanyProjects;