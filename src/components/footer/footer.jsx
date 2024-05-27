import { Typography } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import s from "./footer.module.css"
import {Link} from "react-router-dom";

function Footer () {
    return(
        <div className={s.footerContent} style={{height: "150px", background: "#FFFFFF"}}>
            <Typography
            variant="p"
            sx={{letterSpacing: 4, fontSize: 15, fontWeight: 'regular'}}
            >© ООО «ЭЛЭНЕРГО» 2019-2023</Typography>
            <div className={s.social}>
                <Link>
                <PhoneIcon sx={{fontSize: 30, color: "black"}}/>
                </Link>
                <Link>
                <TelegramIcon sx={{fontSize: 30, color: "black"}}/>
                </Link>
                <Link>
                <WhatsAppIcon sx={{fontSize: 30, color: "black"}}/>
                </Link>
            </div>
        </div>
    )
}

export default Footer;