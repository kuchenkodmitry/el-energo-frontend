import React, { useCallback, useState } from "react"
import axios from '../../../axios/axios'
import style from "./style.module.css"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { TextField, Typography } from '@mui/material'
import Arrow from "./images/Arrow.png"
import Arrow2 from "./images/Arrow2.png"
import NoPhoto from "./images/no-foto-2.jpg"
import 'easymde/dist/easymde.min.css';
import SimpleMDE from 'react-simplemde-editor';
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { create } from "@mui/material/styles/createTransitions"

const styleTitle = {
  fontFamily: "SourceCodePro-SemiBold",
  fontSize: "24px",
  lineHeight: "100%",
  letterSpacing: "0%",
  textAlign: "left",
  textTransform: "uppercase",
  textAlign: "center",
  marginTop: "27px",
  marginBottom: "60px"
}

const styleSubTitile = {
  fontFamily: "SourceCodePro-SemiBold",
  fontSize: "24px",
  lineHeight: "100%",
  letterSpacing: "0%",
  textAlign: "left"
}
const styleInput = {
  padding: "10px 0"
}

function EditPost() {
  const inputFileRef = React.useRef(null)
  const inputPhotoRef = React.useRef(null)
  const [text, setText] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [arrayImageUrl, setArrayImageUrl] = React.useState([]);
  const [photoURL, setPhotoURL] = React.useState([]);
  const [photoMapList, setPhotoMapList] = React.useState([]);
  const [update, setUpdate] = React.useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  const { params } = useParams()
  const isEditing = Boolean(params.includes('edit'));
  const idPost = params.split('-')[1]
  let [arrayTimes, setArrayTimes] = React.useState([])
  const { posts} = useSelector ((state) => state.posts)
  const { examples} = useSelector ((state) => state.examples)
  const idLoaded = posts.status == 'loaded' 
  const isPost = posts.items.find(e => e._id === idPost) != undefined
  const post = posts.items.find(e => e._id === idPost)
  const examplesPost = examples.items.find(e => e._id === idPost)
  useEffect(() => {
    // console.log(posts);
    if (idPost) {
      if(isPost){
        setTitle(post.title);
        setText(post.text);
        setDescription(post.description);
        setImageUrl(post.imageUrl);
        setArrayImageUrl(post.gallaryUrl);
        setArrayTimes(post.gallaryUrl === undefined? [] : post.gallaryUrl)
        setUpdate(true);
      } else {
        setTitle(examplesPost.title);
        setText(examplesPost.text);
        setDescription(examplesPost.description);
        setImageUrl(examplesPost.imageUrl);
        setArrayImageUrl(examplesPost.gallaryUrl);
        setArrayTimes(examplesPost.gallaryUrl === undefined? [] : examplesPost.gallaryUrl)
        setUpdate(true);
      }
    }
  }, [])



  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData()
      const file = event.target.files[0]
      formData.append('image', file)
      const { data } = await axios.post('/uploads', formData)
      console.log(data)
      setImageUrl(`http://localhost:4000${data.url}`)
    } catch (err) {
      console.warn(err)
      alert('Ошибка загрузки фото')
    }
  };

  const handleAddImage = async (event) => {
    try {
      const formData = new FormData()
      const file = event.target.files[0]
      formData.append('image', file)
      const { data } = await axios.post('/uploads', formData)
      console.log(data)
      arrayTimes.push(`http://localhost:4000${data.url}`)
      console.log(arrayTimes);
      setUpdate(true)
    } catch (err) {
      console.warn(err)
      alert('Ошибка загрузки фото')
    }
  };
  
  const mapList = arrayTimes.map((e) => {
    return (
      <div style={{
        display: "flex"
      }}>
        <p style={{
        display: "block",
        width: "300px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }} key={e}>
        {e}
      </p>
      <p onClick={() => {
        const deleteLink = arrayImageUrl.filter((el) => el != e)
        setArrayImageUrl(deleteLink);
        setArrayTimes(deleteLink)
        setUpdate(true);
        console.log(arrayImageUrl);
      }} style={{
        background: "red",
        color: "white",
        borderRadius: "10px",
        padding: "1px 8px 3px",
        webkitBoxShadow: "8px 7px 10px 0px rgba(124, 133, 140, 0.2)",
        mozBoxShadow: "8px 7px 10px 0px rgba(124, 133, 140, 0.2)",
        boxShadow: "8px 7px 10px 0px rgba(124, 133, 140, 0.2)",
        fontFamily: "SourceCodePro-SemiBold",
        cursor: "pointer"
      }}>Удалить</p> 
      </div>
    )
  })

  React.useEffect(() => {
    if(update){
      setArrayImageUrl(arrayTimes);
    setPhotoMapList(mapList)
    setUpdate(false)
    }
  }, [update]);

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);


  const onSubmit = async () => {
    try {
      const fields = {
        title, imageUrl, text, imageUrl, description, gallaryUrl: arrayImageUrl
      }
      console.log(location.pathname);
      
      switch (location.pathname){
        case "/admin/create_post" : 
          await axios.post('/posts', fields);
          navigate(`/admin/posts`)
          break;
        case "/admin/create_example" : 
          await axios.post('/example', fields)
          navigate(`/admin/examples`)
          break;
        default:
          isPost? await axios.patch(`/posts/${idPost}`, fields) : await axios.patch(`/example/${idPost}`, fields);
          isPost? navigate(`/admin/posts`) : navigate(`/admin/examples`)
      }
      
      isEditing ? alert("Успешно отредактированна") : alert("Статья опубликованна")
    } catch (err) {
      console.warn(err);
      alert('Ошибка создания статьи')
    }
  }






  console.log(imageUrl);
  return (
    <div className={style.EditBlock}>
      <Typography sx={styleTitle}>
        Редактирование поста
      </Typography>
      <img src={Arrow} alt="" />
      <div className={style.imageUploadBlock}>
        <div className={style.imageBlock}>
          <img src={imageUrl == '' ? NoPhoto : imageUrl} className={style.imageUpload} alt="" />
          <Typography>Текущее изображение</Typography>
        </div>
        <div className={style.inputUploadImage}>
          <Typography sx={styleSubTitile}>Загрузите или вставьте ссылку на изображение:</Typography>
          <div className={style.inputAndButton}>
            <input onChange={(e) => { setImageUrl(e.target.value) }} value={imageUrl} style={styleInput} placeholder="Ссылка на фото" />
            <button onClick={() => inputFileRef.current.click()} className={style.btnUpload}>Обзор</button>
            <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
          </div>
          <button onClick={() => { setImageUrl('') }} className={style.btnUpload}>Удалить фото</button>
        </div>
      </div>
      <Typography sx={{
            fontFamily: "SourceCodePro-Light",
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "left",
            width: "700px",
            color: "rgba(174, 174, 174, 0.759)",
            marginBottom: "50px"
          }}>
              Загружаемый файл не должен привышать размер в 1 мб и должен иметь уникальное имя. Чтобы сжать изображение воспользуйтесь ресурсом: <a href="https://www.iloveimg.com/ru/compress-image" target="_blank">Перейти на ресурс сжатия фото</a>
            </Typography>
      <img src={Arrow2} alt="" />
      <div className={style.titleEdit}>
        <Typography sx={styleSubTitile}>
          Введите заголовок статьи:
        </Typography>
        <input onChange={(e) => setTitle(e.target.value)} style={styleInput} value={title} placeholder="Заголовок" />
      </div>
      <div className={style.titleEdit}>
        <Typography sx={styleSubTitile}>
          Введите краткое описание:
        </Typography>
        <input onChange={(e) => setDescription(e.target.value)} style={styleInput} value={description} placeholder="краткое описание" />
      </div>
      <div className={style.editorBlock}>
        <Typography sx={styleSubTitile} style={{ marginTop: "50px" }}>
          Введите текст статьи в редактор:
        </Typography>
        <Typography sx={{
            fontFamily: "SourceCodePro-Light",
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "left",
            width: "500px",
            color: "rgba(174, 174, 174, 0.759)"
          }} style={{ marginTop: "50px" }}>
            Инструкция, как пользоваться редактором {<a href="https://paulradzkov.com/2014/markdown_cheatsheet/" target="_blank">Перейти к инструкции</a>} 
        </Typography>
        <SimpleMDE value={text} onChange={onChange} className={style.mdeEditor} />
      </div>
      <div>
        <div style={{
          display: "flex", gap: "15px", alignItems: "center", marginBottom: "30px"
        }}>
        <div style={{
          flexDirection: "column"
        }} className={style.inputAndButton}>
          <Typography sx={{marginBottom: "0", ...styleSubTitile}} style={{ marginTop: "50px" }}>
            Загрузить фото для галлереи
          </Typography>
          <input onChange={(e) => { setPhotoURL(e.target.value) }} style={styleInput} placeholder="Ссылка на фото" />
          <button onClick={() => inputPhotoRef.current.click()} className={style.btnUpload}>Обзор</button>
          <input ref={inputPhotoRef} type="file" onChange={handleAddImage} hidden />
        </div>
        <Typography sx={{
            fontFamily: "SourceCodePro-Light",
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "left",
            width: "300px",
            color: "rgba(174, 174, 174, 0.759)"
          }} style={{ marginTop: "50px" }}>
              Загружаемый файл не должен привышать размер в 1 мб и должен иметь уникальное имя. Чтобы сжать изображение воспользуйтесь ресурсом: <a href="https://www.iloveimg.com/ru/compress-image" target="_blank">Перейти на ресурс сжатия фото</a>
            </Typography>
        </div>
        <Typography
        sx={{
          fontFamily: "SourceCodePro-Regular",
          fontSize: "22px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "left",
        }}
        >Загруженные файлы:</Typography>
        {photoMapList}
      </div>
      <button onClick={onSubmit} className={style.savePost}>Cохранить и вернуться назад!</button>
    </div>
  )
}

export default EditPost
// import React, { useCallback, useState } from "react"
// import axios from '../../../axios/axios'
// import style from "./style.module.css"
// import { useEffect } from "react"
// // import { useSelector } from "react-redux"
// import { TextField, Typography } from '@mui/material'
// import Arrow from "./images/Arrow.png"
// import Arrow2 from "./images/Arrow2.png"
// import NoPhoto from "./images/no-foto-2.jpg"
// import 'easymde/dist/easymde.min.css';
// import SimpleMDE from 'react-simplemde-editor';
// import { useNavigate, useLocation, useParams } from "react-router-dom"
// import { usePreviousLocation } from '../../context/PreviousLocationContext';
// // import { useParams } from "react-router-dom"


// const styleTitle = {
//   fontFamily: "SourceCodePro-SemiBold",
//   fontSize: "24px",
//   lineHeight: "100%",
//   letterSpacing: "0%",
//   textAlign: "left",
//   textTransform: "uppercase",
//   textAlign: "center",
//   marginTop: "27px",
//   marginBottom: "60px"
// }

// const styleSubTitile = {
//   fontFamily: "SourceCodePro-SemiBold",
//   fontSize: "24px",
//   lineHeight: "100%",
//   letterSpacing: "0%",
//   textAlign: "left"
// }
// const styleInput = {
//   padding: "10px 0"
// }

// function EditPost() {
//   const previousLocation = usePreviousLocation();
//   const location = useLocation();
//   const inputFileRef = React.useRef(null)
//   const inputPhotoRef = React.useRef(null)
//   const [text, setText] = React.useState('');
//   const [title, setTitle] = React.useState('');
//   const [imageUrl, setImageUrl] = React.useState('');
//   const [description, setDescription] = React.useState('');
//   const [arrayImageUrl, setArrayImageUrl] = React.useState([]);
//   const [photoURL, setPhotoURL] = React.useState([]);
//   const [photoMapList, setPhotoMapList] = React.useState([]);
//   const [update, setUpdate] = React.useState(false);
//   const navigate = useNavigate()
//   const { params } = useParams()
//   const isEditing = Boolean(params.includes('edit'));
//   const idPost = params.split('-')[1]
//   let [arrayTimes, setArrayTimes] = React.useState([])
  

//   useEffect(() => {
//     if (idPost && previousLocation.pathname.indexOf('posts') !== -1 ) {
//       axios.get(`/posts/${idPost}`).then(({ data }) => {
//         setTitle(data.title);
//         setText(data.text);
//         setDescription(data.description);
//         setImageUrl(data.imageUrl);
//         setArrayImageUrl(data.gallaryUrl);
//         setArrayTimes(data.gallaryUrl === undefined ? [] : data.gallaryUrl)
//         setUpdate(true);
//       }).catch(err => {
//         console.warn(err);
//         alert("Ошибка получения статьи")
//       })
//     } 
//     if (idPost && previousLocation.pathname.indexOf('examples') !== -1 ) {
//       axios.get(`/example/${idPost}`).then(({ data }) => {
//         setTitle(data.title);
//         setText(data.text);
//         setDescription(data.description);
//         setImageUrl(data.imageUrl);
//         setArrayImageUrl(data.gallaryUrl);
//         setArrayTimes(data.gallaryUrl === undefined? [] : data.gallaryUrl)
//         setUpdate(true);
//       }).catch(err => {
//         console.warn(err);
//         alert("Ошибка получения статьи")
//       })
//     }
//   }, [])



  // const handleChangeFile = async (event) => {
  //   try {
  //     const formData = new FormData()
  //     const file = event.target.files[0]
  //     formData.append('image', file)
  //     const { data } = await axios.post('/uploads', formData)
  //     console.log(data)
  //     setImageUrl(`http://localhost:4000${data.url}`)
  //   } catch (err) {
  //     console.warn(err)
  //     alert('Ошибка загрузки фото')
  //   }
  // };

  // const handleAddImage = async (event) => {
  //   try {
  //     const formData = new FormData()
  //     const file = event.target.files[0]
  //     formData.append('image', file)
  //     const { data } = await axios.post('/uploads', formData)
  //     console.log(data)
  //     arrayTimes.push(`http://localhost:4000${data.url}`)
  //     console.log(arrayTimes);
  //     setUpdate(true)
  //   } catch (err) {
  //     console.warn(err)
  //     alert('Ошибка загрузки фото')
  //   }
  // };

//   const mapList = arrayTimes.map((e) => {
//     return (
//       <div style={{
//         display: "flex"
//       }}>
//         <p style={{
//           display: "block",
//           width: "300px",
//           overflow: "hidden",
//           whiteSpace: "nowrap",
//           textOverflow: "ellipsis",
//         }} key={e}>
//           {e}
//         </p>
//         <p onClick={() => {
//           const deleteLink = arrayImageUrl.filter((el) => el != e)
//           setArrayImageUrl(deleteLink);
//           setArrayTimes(deleteLink)
//           setUpdate(true);
//           console.log(arrayImageUrl);
//         }} style={{
//           background: "red",
//           color: "white",
//           borderRadius: "10px",
//           padding: "1px 8px 3px",
//           webkitBoxShadow: "8px 7px 10px 0px rgba(124, 133, 140, 0.2)",
//           mozBoxShadow: "8px 7px 10px 0px rgba(124, 133, 140, 0.2)",
//           boxShadow: "8px 7px 10px 0px rgba(124, 133, 140, 0.2)",
//           fontFamily: "SourceCodePro-SemiBold",
//           cursor: "pointer"
//         }}>Удалить</p>
//       </div>
//     )
//   })

//   React.useEffect(() => {
//     if (update) {
//       setArrayImageUrl(arrayTimes);
//       setPhotoMapList(mapList)
//       setUpdate(false)
//     }
//   }, [update]);

//   const onChange = React.useCallback((value) => {
//     setText(value);
//   }, []);

//   // useEffect(() => { }, [arrayImageUrl])

//   const onSubmit = async () => {
//     try {
//       const fields = {
//         title, imageUrl, text, imageUrl, description, gallaryUrl: arrayImageUrl
//       }

//       const { data } = previousLocation.pathname.indexOf("posts") != -1 ? (isEditing ? await axios.patch(`/posts/${idPost}`, fields) : await axios.post('/posts', fields))
//    :
//    (isEditing ? await axios.patch(`/example/${idPost}`, fields) : await axios.post('/example', fields))
//    // const _id = isEditing ? id : data._id
//    previousLocation.pathname.indexOf("posts") != -1 ? navigate(`/admin/posts`) : navigate(`/admin/examples`)
//       isEditing ? alert("Успешно отредактированна") : alert("Статья опубликованна")
//     } catch (err) {
//       console.warn(err);
//       alert('Ошибка создания статьи')
//     }
//   }






//   console.log(imageUrl);
//   return (
//     <div className={style.EditBlock}>
//       <h1>Предыдущий путь: {previousLocation?.pathname}</h1>
//       <Typography sx={styleTitle}>
//         Редактирование поста
//       </Typography>
//       <img src={Arrow} alt="" />
//       <div className={style.imageUploadBlock}>
//         <div className={style.imageBlock}>
//           <img src={imageUrl == '' ? NoPhoto : imageUrl} className={style.imageUpload} alt="" />
//           <Typography>Текущее изображение</Typography>
//         </div>
//         <div className={style.inputUploadImage}>
//           <Typography sx={styleSubTitile}>Загрузите или вставьте ссылку на изображение:</Typography>
//           <div className={style.inputAndButton}>
//             <input onChange={(e) => { setImageUrl(e.target.value) }} value={imageUrl} style={styleInput} placeholder="Ссылка на фото" />
//             <button onClick={() => inputFileRef.current.click()} className={style.btnUpload}>Обзор</button>
//             <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
//           </div>
//           <button onClick={() => { setImageUrl('') }} className={style.btnUpload}>Удалить фото</button>
//         </div>
//       </div>
//       <Typography sx={{
//         fontFamily: "SourceCodePro-Light",
//         fontSize: "18px",
//         lineHeight: "100%",
//         letterSpacing: "0%",
//         textAlign: "left",
//         width: "700px",
//         color: "rgba(174, 174, 174, 0.759)",
//         marginBottom: "50px"
//       }}>
//         Загружаемый файл не должен привышать размер в 1 мб и должен иметь уникальное имя. Чтобы сжать изображение воспользуйтесь ресурсом: <a href="https://www.iloveimg.com/ru/compress-image" target="_blank">Перейти на ресурс сжатия фото</a>
//       </Typography>
//       <img src={Arrow2} alt="" />
//       <div className={style.titleEdit}>
//         <Typography sx={styleSubTitile}>
//           Введите заголовок статьи:
//         </Typography>
//         <input onChange={(e) => setTitle(e.target.value)} style={styleInput} value={title} placeholder="Заголовок" />
//       </div>
//       <div className={style.titleEdit}>
//         <Typography sx={styleSubTitile}>
//           Введите краткое описание:
//         </Typography>
//         <input onChange={(e) => setDescription(e.target.value)} style={styleInput} value={description} placeholder="краткое описание" />
//       </div>
//       <div className={style.editorBlock}>
//         <Typography sx={styleSubTitile} style={{ marginTop: "50px" }}>
//           Введите текст статьи в редактор:
//         </Typography>
//         <Typography sx={{
//           fontFamily: "SourceCodePro-Light",
//           fontSize: "18px",
//           lineHeight: "100%",
//           letterSpacing: "0%",
//           textAlign: "left",
//           width: "500px",
//           color: "rgba(174, 174, 174, 0.759)"
//         }} style={{ marginTop: "50px" }}>
//           Инструкция, как пользоваться редактором {<a href="https://paulradzkov.com/2014/markdown_cheatsheet/" target="_blank">Перейти к инструкции</a>}
//         </Typography>
//         <SimpleMDE value={text} onChange={onChange} className={style.mdeEditor} />
//       </div>
//       <div>
//         <div style={{
//           display: "flex", gap: "15px", alignItems: "center", marginBottom: "30px"
//         }}>
//           <div style={{
//             flexDirection: "column"
//           }} className={style.inputAndButton}>
//             <Typography sx={{ marginBottom: "0", ...styleSubTitile }} style={{ marginTop: "50px" }}>
//               Загрузить фото для галлереи
//             </Typography>
//             <input onChange={(e) => { setPhotoURL(e.target.value) }} style={styleInput} placeholder="Ссылка на фото" />
//             <button onClick={() => inputPhotoRef.current.click()} className={style.btnUpload}>Обзор</button>
//             <input ref={inputPhotoRef} type="file" onChange={handleAddImage} hidden />
//           </div>
//           <Typography sx={{
//             fontFamily: "SourceCodePro-Light",
//             fontSize: "18px",
//             lineHeight: "100%",
//             letterSpacing: "0%",
//             textAlign: "left",
//             width: "300px",
//             color: "rgba(174, 174, 174, 0.759)"
//           }} style={{ marginTop: "50px" }}>
//             Загружаемый файл не должен привышать размер в 1 мб и должен иметь уникальное имя. Чтобы сжать изображение воспользуйтесь ресурсом: <a href="https://www.iloveimg.com/ru/compress-image" target="_blank">Перейти на ресурс сжатия фото</a>
//           </Typography>
//         </div>
//         <Typography
//           sx={{
//             fontFamily: "SourceCodePro-Regular",
//             fontSize: "22px",
//             lineHeight: "100%",
//             letterSpacing: "0%",
//             textAlign: "left",
//           }}
//         >Загруженные файлы:</Typography>
//         {photoMapList}
//       </div>
//       <button onClick={onSubmit} className={style.savePost}>Cохранить и вернуться назад!</button>
//     </div>
//   )
// }

// export default EditPost