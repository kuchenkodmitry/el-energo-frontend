import AchivmentTabs from '../tabs/achivmentTabs'
import { Typography } from '@mui/material';
import s from './about.module.css'

function About() {
    return(
    <div className={s.contentBlock}>
        <Typography 
            variant="h4"
            sx={{letterSpacing: 5 , textAlign: 'center', marginTop: "70px", marginBottom: '70px'}}
            >
                НАC РЕКОМЕНДУЮТ
            </Typography>
        <AchivmentTabs/>
    </div>
    )
};

export default About;