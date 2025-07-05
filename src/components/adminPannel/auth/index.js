import style from "./style.module.css"
import { Button, TextField, Typography } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { selectIsAuth, fetchAuth, logout } from "../../../redux/slices/auth"

export const UserIsAuth = () => {
    const { data, status } = useSelector((state) => state.auth)
    const isLoading = status === "loading"
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()

    const onClickLogout = () => {
        if(window.confirm('Вы уверенны, что хотите выйти ')){
          dispatch(logout());
          window.localStorage.removeItem('token')
        }
      };


    return (
        <div className={style.userIsAuth}>
            <Typography sx={{
                /* Sign up */
                bottom: "10px",
                width: "156px",
                height: "28px",
                fontFamily: "SourceCodePro-SemiBold",
                fontSize: "16px"
            }}>
                {isLoading ? "Привет" : "Привет," + data.fullName.split(' ')[0]}
            </Typography>
            <button onClick={onClickLogout} className={style.btnIsAuth}>Выйти</button>
        </div>
    )
}

function Auth() {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const { register, handleSubmit, setError, formState: {
        errors, isValid
    } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }, mode: 'onChange'
    })

    const onSubmit = async (values) => {
        console.log("Тык");
        const data = await dispatch(fetchAuth(values))
        if (!data.payload) {
            console.log(data);
            return alert("Не удалось авторизоваться")
        }

        if ("token" in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        }
    }

    return (
        <div className={style.authBox}>
            <Typography sx={{
                fontSize: "22px",
                fontFamily: "Inter-SemiBold",
                width: "370px"
            }} className={style.title}>
                Выполните авторизацию, чтобы продолжить
            </Typography>
            <form className={style.fromAuth} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.auth}>
                    <div className={style.inputBox}>
                        <Typography sx={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontWeight: "600",
                            lineGeight: "28px",
                            letterSpacing: "0%",
                            textAlign: "left",
                        }}
                        >
                            Введите логин
                        </Typography>
                        <input placeholder="Логин" className={style.inputS} error={Boolean(errors.email?.message)}
                            helperText={errors.email?.message}
                            {...register('email', { required: 'Укажите email' })}/>
                    </div>
                    <div className={style.inputBox}>
                        <Typography sx={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontWeight: "600",
                            lineGeight: "28px",
                            letterSpacing: "0%",
                            textAlign: "left",
                        }} >
                            Введите пароль
                        </Typography>
                        <input placeholder="Пароль" type="password" className={style.inputS} 
                        error={Boolean(errors.password?.message)} 
                        helperText={errors.password?.message}{...register('password', {required: 'Укажите пароль'})}
                        />
                    </div>
                </div>
                <Button sx={{
                    color: "black",
                    marginLeft: "162px",
                    marginTop: "30px",
                    fontFamily: "SourceCodePro-SemiBold"
                }} className={style.button} type="submit">Войти</Button>
            </form>
        </div>
    )
}

export default Auth