import { Typography } from "@mui/material"
import style from './style.module.css'
import { useNavigate, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchPostRemove } from "../../../redux/slices/posts"
import { fetchExampleRemove } from "../../../redux/slices/examples";


function CardPost({title, description, UrlImage, _id}) {
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const isLocation = useLocation().pathname == "/admin/examples" ? "example" : "post" 
    
    

    const handleNavPost = () => {
        Navigate(`/admin/fullpost-${_id}`)
    }

    const onClickRemove = () => {
        const result = window.confirm("Уверены, что хотите удалить ?");
        if (result){
            alert("Пост удалён")
            if (isLocation == "post"){
                dispatch(fetchPostRemove(_id))
                Navigate('/admin/posts')
            } else {
                dispatch(fetchExampleRemove(_id))
                Navigate('/admin/examples')
            }
        } else {
            alert("удаление отменено")
        }
      };

    const onClickEdit = () => {
        Navigate(`/admin/edit-${_id}`)
    }

    return ( 
    <div className={style.cardBlock}>
        <img width="236px" height="157px" style={{
            borderRadius: "14px"
        }} src={UrlImage} alt={title} />
        <Typography onClick={handleNavPost} sx={{
            width: "230px",
            fontFamily: "SourceCodePro-SemiBold",
            lineHeight: "30px",
            fontSize: "24px",
            marginBottom: "10px",
            cursor: "pointer"
        }} className={style.cardTitle}>
            {title}
        </Typography>
        <Typography sx={{
            fontFamily: "SourceCodePro-Light",
            width: "230px",
        }}
        className={style.cardTitle}
        >
            {description}
        </Typography>
        <div className={style.btnBox}>
            <button onClick={onClickRemove} className={style.btnEdit}>Удалить</button>
            <button onClick={onClickEdit} className={style.btnEdit}>Изменить</button>
        </div>
    </div>
    )
}

export default CardPost