import s from './contactBtn.module.css'
import WhatsAppIco from './icon/Vector.png'
import Typography from '@mui/material/Typography'
import MailIco from './icon/gmail 1.png'
import CallIco from './icon/call.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const IconItems = [
    {
        src: CallIco,
        name: "Звонок",
        url: 'tel:+79275040200'
    },
    {
        src: WhatsAppIco,
        name: "Whats App",
        url: 'https://wa.me/79275040200'
    },
    {
        src: MailIco,
        name: "E-mail",
        url: 'mailto:elenergo34@gmail.com'
    }
]

function ButtonsBox() {
    const navigate = useNavigate();

    const allBtnContacts = IconItems.map((item) => {
        return (
            <Link to={item.url}>
            <div onClick={() => {
            }} className={s.iconContentAlign}>
                <div className={s.btnBox}>
                    <img src={item.src} height='40px' alt="" />
                </div>
                <Typography
                    variant='p'
                    sx={{fontSize: '14px',letterSpacing: ".1rem", fontWeight: '500'}}
                >
                    {item.name}
                </Typography>
            </div>
            </Link>
        )
    })
    return (
    <div className={s.btnsBlock}>
    {allBtnContacts}
    </div>
    )
}

export default ButtonsBox;