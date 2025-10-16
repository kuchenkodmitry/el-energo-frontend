import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Stack } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PublicIcon from '@mui/icons-material/Public';
import { RequestCall } from '../../context/postContext';
import { useSelector } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '420px',
    bgcolor: 'background.paper',
    borderRadius: '24px',
    boxShadow: 24,
    p: 4,
    minWidth: '320px'
};

export function ModalContact() {
    const [requestCall, setRequestCall] = React.useContext(RequestCall);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { contact } = useSelector((state) => state);
    const contactItem = contact?.items?.[0] || {};

    const sanitizePhone = (value) => value?.replace(/\s+/g, '')?.replace(/[^+\d]/g, '') || '';
    const phoneLink = contactItem.phone ? `tel:${sanitizePhone(contactItem.phone)}` : 'tel:+79990000000';
    const whatsappLink = contactItem.whatsapp ? `https://wa.me/${contactItem.whatsapp.replace(/\D/g, '')}` : 'https://wa.me/79999999999';

    const quickLinks = [
        {
            label: 'Позвонить',
            value: contactItem.phone || '+7 (999) 000-00-00',
            href: phoneLink,
            icon: <PhoneIcon />,
        },
        {
            label: 'Написать на почту',
            value: contactItem.email || 'info@elenergo.ru',
            href: contactItem.email ? `mailto:${contactItem.email}` : 'mailto:info@elenergo.ru',
            icon: <MailOutlineIcon />,
        },
        {
            label: 'WhatsApp',
            value: contactItem.whatsapp || '@elenergo_support',
            href: whatsappLink,
            icon: <WhatsAppIcon />,
        },
        {
            label: 'Telegram',
            value: '@elenergo_energy',
            href: 'https://t.me/elenergo_energy',
            icon: <TelegramIcon />,
        },
        {
            label: 'VK',
            value: 'vk.com/elenergo',
            href: 'https://vk.com/elenergo',
            icon: <PublicIcon />,
        },
        {
            label: 'YouTube',
            value: 'youtube.com/@elenergo',
            href: 'https://www.youtube.com/@elenergo',
            icon: <YouTubeIcon />,
        },
    ];

    React.useEffect(() => {
        if (requestCall === true) {
            handleOpen();
            setRequestCall(false);
        }
    }, [requestCall, setRequestCall]);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                        Мы не собираем персональные данные
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1.5, color: 'rgba(0,0,0,0.7)' }}>
                        Свяжитесь с нами напрямую через удобный канал. Выберите социальную сеть или мессенджер — команда ответит так же быстро, как и по старым формам.
                    </Typography>
                    <Stack spacing={1.5} sx={{ mt: 3 }}>
                        {quickLinks.map((item) => (
                            <Button
                                key={item.label}
                                component="a"
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outlined"
                                startIcon={item.icon}
                                sx={{
                                    justifyContent: 'space-between',
                                    textTransform: 'none',
                                    borderRadius: '14px',
                                    borderColor: 'rgba(0,0,0,0.12)',
                                    padding: '12px 18px',
                                    '&:hover': {
                                        borderColor: 'rgba(0,0,0,0.35)',
                                        backgroundColor: 'rgba(0,0,0,0.04)'
                                    }
                                }}
                            >
                                <Box sx={{ textAlign: 'left' }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                        {item.label}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.65)' }}>
                                        {item.value}
                                    </Typography>
                                </Box>
                                <Typography variant="caption" sx={{ letterSpacing: '.2em', color: 'rgba(0,0,0,0.45)' }}>
                                    Перейти
                                </Typography>
                            </Button>
                        ))}
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
};
