import s from './works.module.css'
import VerticalTabs from '../tabs/verticalTabs';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Works () {
    const navigate = useNavigate();

    function handleLink () {
        navigate('/companyProjects')
    }

    return (
        <div className={s.worksBlock}>
            <div className={s.worksContent}>
            <Typography onClick={handleLink}
            variant='h5'
            sx={{marginBottom: '40px', color: 'white', cursor: 'pointer' , letterSpacing: 6, "&:hover": {textDecoration: 'underline'}, display: {xs: 'flex', md: 'none'} }}
            >НАШИ РАБОТЫ</Typography>
            <Typography onClick={handleLink}
            variant='h4'
            sx={{color: 'white', cursor: 'pointer' , letterSpacing: 6, "&:hover": {textDecoration: 'underline'}, display: {xs: 'none', md: 'flex'} }}
            >НАШИ РАБОТЫ</Typography>
            <VerticalTabs/>
            </div>
        </div>
    )
}

export default Works;