import s from './contactBtn.module.css'
import WhatsAppIco from './icon/Vector.png'
import Typography from '@mui/material/Typography'
import MailIco from './icon/gmail 1.png'
import CallIco from './icon/call.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'




function ButtonsBox() {
    const { contact } = useSelector((state) => state.contact)

    const normalizeContact = (value = '') => value.replace(/\s+/g, '').replace(/[^+\d]/g, '')

    const fallbackContact = {
        phone: '+7 (999) 000-00-00',
        whatsapp: '+7 (999) 000-00-00',
        email: 'info@elenergo.ru',
    }

    const contactItem = contact?.items?.[0] || {}
    const mergedContact = {
        phone: contactItem.phone || fallbackContact.phone,
        whatsapp: contactItem.whatsapp || fallbackContact.whatsapp,
        email: contactItem.email || fallbackContact.email,
    }

    const normalizedPhone = normalizeContact(contactItem.phone) || normalizeContact(fallbackContact.phone)
    const normalizedWhatsApp = normalizeContact(contactItem.whatsapp) || normalizeContact(fallbackContact.whatsapp)

    const IconItems = [
        {
            src: CallIco,
            name: "Звонок",
            url: normalizedPhone ? `tel:${normalizedPhone.startsWith('+') ? normalizedPhone : `+${normalizedPhone}`}` : 'tel:+79990000000'
        },
        {
            src: WhatsAppIco,
            name: "Whats App",
            url: normalizedWhatsApp ? `https://wa.me/${normalizedWhatsApp.replace('+', '')}` : 'https://wa.me/79990000000'
        },
        {
            src: MailIco,
            name: "E-mail",
            url: `mailto:${mergedContact.email}`
        }
    ]

    const allBtnContacts = IconItems.map((item) => {
        return (
            <Link key={item.name} to={item.url}>
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