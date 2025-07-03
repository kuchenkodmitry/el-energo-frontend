import s from "./contactus.module.css"
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Input from '@mui/material/Input'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { CssBaseline, MenuItem, Stack, TextField, Box, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { StrictMode } from "react";
import {useForm} from "react-hook-form";

function ContactUs() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    async function onSubmit(data) {
        try {
            const response = await fetch('/api/send-telegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    phone: data.phone,
                    email: data.mail
                })
            });
            if (response.ok) {
                alert('Заявка отправлена');
            } else {
                alert('Ошибка отправки');
            }
        } catch (e) {
            alert('Ошибка отправки');
        }
    }


    return (
        <div style={{ height: "565px", background: "#171616", paddingTop: "100px" }}>
            <div className={s.contactBox}>
                <Typography
                    className={s.headerText}
                    variant='h4'
                    sx={{
                        display: { xs: 'none', md: 'flex' }
                    }}
                >Оставьте заявку на обратный звонок </Typography>
                <Typography

                    variant='h4'
                    sx={{
                        marginBottom: "30px",
                        textAlign: 'center',
                        fontSize: '32px',
                        color: 'white',
                        display: { xs: 'flex', md: 'none' }
                    }}
                >Оставьте заявку на обратный звонок </Typography>
                <Typography
                    className={s.textContactUs}
                    variant='body1'
                    sx={{
                        display: { xs: 'none', md: 'flex' }
                    }}
                >
                    Наши технические специалисты свяжутся с вами в ближайшее время и проконсультируют по любым вопросам
                </Typography>
                <Typography
                    className={s.textContactUs}
                    variant='body1'
                    sx={{
                        margin: '20px 40px',
                        display: { xs: 'flex', md: 'none' }
                    }}
                >
                    Наши технические специалисты свяжутся с вами в ближайшее время и проконсультируют по любым вопросам
                </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.phone && <p style={{color: "red"}} role="alert">{errors.phone?.message}</p>}
                    {errors.mail && <p style={{color: "red"}} role="alert">{errors.mail?.message}</p>}
                <div className={s.inputTab}>
                    <div className={s.inputBlock}>
                        <input type="text" className={s.input} {...register('name')} required />
                        <label className={s.label} htmlFor="">Имя</label>
                    </div>
                    <div className={s.inputBlock}>
                        <input type="text" className={s.input} {...register('phone', { required: "Заполните поле с номером телефона",pattern: {
            value: /\d+/,
            message: "Это поле только для цыфр"
          }, minLength: {
            value: 10,
            message: "Минимальное количество символов в номере телефона 10"
          },  })}
                         aria-invalid={errors.phone ? "true" : "false"}
                        required />
                        
                        <label className={s.label} htmlFor="">Ваш номер</label>
                        
                    </div>
                    <div className={s.inputBlock}>
                        <input type="text" className={s.input} {...register("mail", { required: "Email Address is required",
                    pattern:{ value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/, message: 'В электронной почте должен содержаться символ @'   }
                    })} 
        aria-invalid={errors.mail ? "true" : "false"}  required />
                        <label className={s.label} htmlFor="">Ваш Email</label>
                        
                    </div>
                    {/* <div className={s.inputBlock}>
                        <textarea style={{}} type="text" className={s.input} {...register('message')} required />
                        <label className={s.label} htmlFor="">Сообщение</label>
                    </div> */}
                </div>
                <button type="submit" className={s.btn}>Отправить заявку</button>
                </form> 
            </div>
        </div>
    )
}

export default ContactUs;