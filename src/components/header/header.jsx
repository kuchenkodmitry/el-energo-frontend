import s from '../header/header.module.css'
import NavBar from './navBar'
import SmallCard from '../cards/SmallCard'
import { Button, Typography } from '@mui/material'
import { ReactComponent as Call } from '../header/img/call.svg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import ContactBtn from './contactButtons/contactBtn'
import { RequestCall } from "../context/postContext"
import { useContext } from 'react'
import {Animated} from "react-animated-css";
import { useSelector } from 'react-redux'



function Header() {
    const {contact} = useSelector((state) => state.contact)
    const [requestCall,setRequestCall] = useContext(RequestCall);
    const isLoaded = contact.status == 'loaded'

    const removeSpace = (str) => {
        return str.replace(/\s+/g, '')
    }

    if( isLoaded == true){
        const contactsInfo = [
            {
                link: `tel:${removeSpace(contact.items[0].phone)}`,
                title: contact.items[0].phone,
                subtitle: 'ПОЗВОНИТЬ СЕЙЧАС',
                text: '',
                image: <Call />
            },
            {
                link: `https://wa.me/${removeSpace(contact.items[0].whatsapp)}`,
                title: contact.items[0].whatsapp,
                subtitle: 'НАПИСАТЬ В WHATS APP',
                text: '',
                image: <WhatsAppIcon sx={{ fontSize: 40, color: "green" }} />
            },
            {
                link: `mailto:${contact.items[0].email}`,
                title: contact.items[0].email,
                subtitle: 'НАПИСАТЬ НА EMAIL',
                text: '',
                image: <MailOutlineIcon sx={{ fontSize: 40, color: "red" }} />
            },
        ]
    
        const BlockSmallCards = contactsInfo.map((card) => {
            return (
                <SmallCard contactsInfo={card} />
            )
        });
    
    
        return (
            <div styleName='qwe' className={s.headerBlock}>
            <div className={s.overlay}>
                <div className={s.content}>
                    <NavBar />
                    <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
                    <div className={s.centeralBlock}>
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'white',
                                textDecoration: 'none',
                                pointerEvents: "none",
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            ЭЛЭНЕРГО - ЭЛЕКТРОМОНТАЖНЫЕ <br /> РАБОТЫ <br />В ЭЛЕКТРОУСТАНОВКАХ 0.4 - 10 кВ
                        </Typography>
                        <Typography
                            variant='h5'
                            component="a"
                            sx={{
                                marginLeft: '30px',
                                mr: 1,
                                fontFamily: 'monospace',
                                fontWeight: 500,
                                letterSpacing: '.2rem',
                                color: 'white',
                                textDecoration: 'none',
                                pointerEvents: "none",
                                display: { xs: 'flex', md: 'none' }
                            }}
                        >ЭЛЭНЕРГО - ЭЛЕКТРОМОНТАЖНЫЕ <br /> РАБОТЫ <br />В ЭЛЕКТРОУСТАНОВКАХ 0.4 - 10 кВ</Typography>
                        <br />
                        <Button onClick={() => {setRequestCall(true)}} sx={{ 
                            alignSelf: 'start',
                            backgroundColor: '#292929c3',
                            padding: '10px 20px',
                            boxShadow: "0px 0px 10px #292929c3",
                            "&:hover": {
                                backgroundColor: '#0e0e0ee2',
                                boxShadow: "0px 0px 15px #0e0e0ee2"
                            },
                            display: { xs: 'none', md: 'flex' }, 
                        }}
                            variant="contained">
                                Заказать звонок
                        </Button>
                        <Button onClick={() => {setRequestCall(true)}} sx={{ 
                            alignSelf: 'start',
                            backgroundColor: '#292929c3',
                            padding: '10px 20px',
                            boxShadow: "0px 0px 10px #292929c3",
                            "&:hover": {
                                backgroundColor: '#0e0e0ee2',
                                boxShadow: "0px 0px 15px #0e0e0ee2"
                            },
                            marginLeft: '25px',
                            display: { xs: 'flex', md: 'none' }
                        }}
                            variant="contained">
                                Заказать звонок
                        </Button>
                    </div>
                    </Animated>
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <Box sx={{display: {xs: 'none', md: "flex"}}} className={s.headerCard}>
                        {BlockSmallCards}
                    </Box >
                    <Box className={s.headerCard}  sx={{display: {xs: 'flex', md: "none"}}}>
                        <div  className={s.mobileContactBox}>
                        <Typography
                            variant='h6'
                            component="a"
                            sx={{
                                textAlign: 'center',
                                mr: 1,
                                fontFamily: 'monospace',
                                fontWeight: 100,
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                pointerEvents: "none",
                            }}
                        >НАШИ КОНТАКТЫ
                        </Typography>
                        <ContactBtn/>
                        </div>
                    </Box>
                    </Animated>
                </div>
            </div>
            <div id="headerBottom"></div>
        </div>
        )
    }
}

export default Header;