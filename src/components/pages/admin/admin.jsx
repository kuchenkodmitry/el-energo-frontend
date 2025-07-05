import React from 'react'
import Header from '../../adminPannel/header/index'
import Auth from '../../adminPannel/auth/index'
import style from './style.module.css'
import IsAuth from '../../adminPannel/isAuth'
import Loading  from "../../adminPannel/loading/loading";
import { selectIsAuth, fetchAuthMe } from '../../../redux/slices/auth'
import { useSelector, useDispatch } from "react-redux"

function AdminPanel() {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const { status } = useSelector((state)=> state.auth)
    const isLoading = status === 'loading'
    React.useEffect(() => {
        dispatch(fetchAuthMe() )
    }, [])
    return (
        <div className={style.backgound}>
            <div className={style.layout}> 
                <Header />
               {isLoading? <Loading/> : (isAuth? <IsAuth /> : <Auth/>)}  
            </div>
        </div>
    )
}

export default AdminPanel