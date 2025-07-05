import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PhotoList from "../../PhotoList/index";
import style from "./style.module.css";
import ReactMarkdown from "react-markdown";

function Post() {
    const params = useParams();
    const { examples } = useSelector((state) => state.examples);
    const { posts } = useSelector((state) => state.posts);
    const isLoading = examples.status === "loaded";
    const [item, setItem] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (isLoading) {
            const foundItem =
                examples.items.find((obj) => obj._id === params.id) ||
                posts.items.find((obj) => obj._id === params.id);
            setItem(foundItem);
        }
    }, [isLoading, params.id, examples.items, posts.items]);

    if (!item) {
        return <p>Загрузка данных...</p>;
    }

    return (
        <div className={style.postContainier}>
            <p className={style.title}>{item.title}</p>
            <div className={style.flot}>
                {location.pathname.includes("service") ? (
                    <img
                        className={style.image}
                        src={item.imageUrl}
                        alt="Изображение"
                    />
                ) : (
                    <div className={style.mrPhoto}>
                        <PhotoList list={item.gallaryUrl} />
                    </div>
                )}
            </div>
            <div className={style.text}>
                <ReactMarkdown>{item.text}</ReactMarkdown>
            </div>
        </div>
    );
}

export default Post;
