import s from "./contactus.module.css";
import { Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PublicIcon from "@mui/icons-material/Public";
import { useSelector } from "react-redux";

function ContactUs() {
    const { contact } = useSelector((state) => state);
    const contactItem = contact?.items?.[0] || {};

    const sanitizePhone = (value) => value?.replace(/\s+/g, "")?.replace(/[^+\d]/g, "") || "";
    const phoneLink = contactItem.phone ? `tel:${sanitizePhone(contactItem.phone)}` : "tel:+79275040200";
    const whatsappLink = contactItem.whatsapp ? `https://wa.me/${contactItem.whatsapp.replace(/\D/g, "")}` : "https://wa.me/79275040200";

    const socialCards = [
        {
            label: "Телефон",
            value: contactItem.phone || "7 (927) 504-02-00",
            href: phoneLink,
            icon: <PhoneIcon fontSize="medium" />,
        },
        {
            label: "Email",
            value: contactItem.email || "elenergo34@gmail.com",
            href: contactItem.email ? `mailto:${contactItem.email}` : "mailto:elenergo34@gmail.com",
            icon: <MailOutlineIcon fontSize="medium" />,
        },
        {
            label: "WhatsApp",
            value: contactItem.whatsapp || "@elenergo_support",
            href: whatsappLink,
            icon: <WhatsAppIcon fontSize="medium" />,
        },
        {
            label: "Telegram",
            value: "@elenergo_energy",
            href: "https://t.me/elenergo_energy",
            icon: <TelegramIcon fontSize="medium" />,
        },
        // {
        //     label: "VK",
        //     value: "vk.com/elenergo",
        //     href: "https://vk.com/elenergo",
        //     icon: <PublicIcon fontSize="medium" />,
        // },
        // {
        //     label: "YouTube",
        //     value: "youtube.com/@elenergo",
        //     href: "https://www.youtube.com/@elenergo",
        //     icon: <YouTubeIcon fontSize="medium" />,
        // },
    ];

    return (
        <div className={s.section}>
            <div className={s.contactBox}>
                <Typography
                    className={s.title}
                    variant="h4"
                    component="h2"
                >
                    Мы всегда на связи
                </Typography>
                <Typography
                    className={s.subtitle}
                    variant="body1"
                >
                    Задайте вопрос в удобном мессенджере — команда ответит так же быстро, как и раньше, но теперь без форм и запросов персональных данных.
                </Typography>
                <div className={s.socialGrid}>
                    {socialCards.map((card) => (
                        <a
                            key={card.label}
                            className={s.socialCard}
                            href={card.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={s.iconWrapper}>{card.icon}</div>
                            <p className={s.cardLabel}>{card.label}</p>
                            <p className={s.cardValue}>{card.value}</p>
                            <span className={s.cardAction}>Открыть</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactUs;