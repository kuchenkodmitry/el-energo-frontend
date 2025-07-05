import axios from "axios"

const instance = axios.create({
    baseURL: "https://el-energo.ru/api/"

})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token') // Если любой запрос происходит проверяем авторизацию
return config
})

export default instance;