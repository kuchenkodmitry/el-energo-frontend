import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { RequestCall } from '../../context/postContext';
import { TextField } from '@mui/material';
import { useForm } from "react-hook-form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "400px",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    minWidth: "300px"
};
export function ModalContact() {
    const [requestCall, setRequestCall] = React.useContext(RequestCall);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    React.useEffect(() => {
        if (requestCall === true) {
            handleOpen();
            setRequestCall(false)
        }
    }, [requestCall])
    const { register, formState: { errors }, handleSubmit } = useForm();

    function onSubmit(data) {
        window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: "elenergo34@gmail.com",
            Password: "3E5AC02565E51C89D2B8DB44B11779986186",
            To: "elenergo34@yandex.ru",
            From: "elenergo34@gmail.com",
            Subject: "Новый клиент",
            Body: `Имя: ${data.name}, Номер телефона: ${data.phone}, Электронная почта ${data.mail} `
        }).then(
            message => alert(message)
        );
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        ОСТАВЬТЕ ЗАЯВКУ НА ОБРАТНЫЙ ЗВОНОК
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Наши технические специалисты свяжутся с вами в ближайшее время и проконсультируют по любым вопросам
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column'}}>
                        {errors.phone && <p style={{ color: "red" }} role="alert">{errors.phone?.message}</p>}
                        {errors.mail && <p style={{ color: "red" }} role="alert">{errors.mail?.message}</p>}
                        <div style={{display: "flex", flexDirection: 'column', marginTop: '30px'}}>
                            <TextField type="text" sx={{ maxWidth: "300px" }} id="standard-basic" label="Имя" variant="standard" {...register('name')} required />
                            <TextField type="text" sx={{ maxWidth: "300px" }} id="standard-basic" label="Телефон" variant="standard" {...register('phone', {
                                required: "Заполните поле с номером телефона", pattern: {
                                    value: /\d+/,
                                    message: "Это поле только для цыфр"
                                }, minLength: {
                                    value: 10,
                                    message: "Минимальное количество символов в номере телефона 10"
                                },
                            })}
                                aria-invalid={errors.phone ? "true" : "false"}
                                required />
                            <TextField type="text" sx={{ maxWidth: "300px" }} id="standard-basic" label="Email" variant="standard" {...register("mail", {
                                required: "Email Address is required",
                                pattern: { value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/, message: 'В электронной почте должен содержаться символ @' }
                            })}
                                aria-invalid={errors.mail ? "true" : "false"} required />

                            {/* <div className={s.inputBlock}>
                        <textarea style={{}} type="text" className={s.input} {...register('message')} required />
                        <label className={s.label} htmlFor="">Сообщение</label>
                    </div> */}
                        </div>
                        <button type="submit" style={{marginTop: '50px', maxWidth: "180px", alignSelf: "end", cursor: 'pointer',backgroundColor: "#1d1d1db3", color: 'white', padding: '10px 20px', borderRadius: '5px'}}>Отправить заявку</button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

