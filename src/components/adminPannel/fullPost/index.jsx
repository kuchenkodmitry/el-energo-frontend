import React from "react";
import axios from "../../../axios/axios";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import ReactMarkdown from 'react-markdown'

function post (title, text, description, image) {
    return ( 
        <div>
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
                {title}
            </Typography>
            <img width="500px" src={image} alt="" />
            <p>
                {description}
            </p>
            <ReactMarkdown children={text}/>
        </div>
    )
}

function FullPost() {
    const [isLoading, setIsLoading] = React.useState(true)
    const [postData, setPostData] = React.useState(null)
    const { params } = useParams()
    const _id = params.split("-")[1]
    React.useEffect( () => {
        axios.get(`/posts/${_id}`)
        .then( async (res) => {
        setPostData(res.data)
        setIsLoading(false)})
    }, [])

    return (
        <div>
            {isLoading ? "Загружается пост" : post(postData.title, postData.text, postData.description, postData.imageUrl)}
        </div>
    )
}


export default FullPost