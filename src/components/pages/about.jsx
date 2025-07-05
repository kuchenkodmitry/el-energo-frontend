import Typography from '@mui/material/Typography';
import s from './about.module.css'
import DirectorImg from './image/about/42e2fd2e-0505-4130-bd08-b27ec1a6cf4a 1.png'
import AchivImg from './image/about/2 2334456.png'
import GuaranteeImg from './image/about/pod_kl_01 1.png' ;
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Animated} from "react-animated-css";
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown'

function About() {
    const { contact } = useSelector((state) => state.contact)
    const isLoaded = contact.status == 'loaded'
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <div id="TitlePage"></div>
            <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
            <div className={s.main}>
                <Typography variant="h3" component="div" sx={{ display: {xs: "none", md: "flex"} ,textAlign: 'center', letterSpacing: '.3rem' }}>
                    О Компании
                </Typography>
                <Typography variant="h3" component="div" sx={{ display: {xs: "block", md: "none"} ,marginTop:'150px', textAlign: 'center', letterSpacing: '.3rem' }}>
                    О Компании
                </Typography>
                <div className={s.aboutCompany}>
                    <div className={s.aboutCompanyText}>
                        <Typography variant="h5" component="div" sx={{display: {xs: "none", md: "flex"}, fontSize: "30px", letterSpacing: '.3rem', color: "#3F3E3E", marginBottom: "80px" }}>
                            Мы - компания Элэнерго.
                        </Typography>
                        <Typography variant="h5" component="div" sx={{maxWidth:"300px",textAlign: 'start', margin: "30px 47px 0px",fontWeight: 10, display: {xs: "flex", md: "none"}, fontSize: "25px", letterSpacing: '.2rem', color: "#3F3E3E", marginBottom: "20px" }}>
                            Мы - компания Элэнерго.
                        </Typography>
                        <Typography variant="p" component="div" sx={{
                            fontSize: '17px',
                            letterSpacing: '.2rem',
                            color: "#3F3E3E",
                            maxWidth: "400px",
                            marginBottom: '40px',
                            display: {xs: "none", md: "flex"}
                            }}>
                            Наша компания специализируется на выполнении работ по:
                        </Typography>
                        <Typography variant="p" component="div" sx={{
                            fontSize: '17px',
                            letterSpacing: '.2rem',
                            color: "#3F3E3E",
                            maxWidth: "400px",
                            marginBottom: '40px',
                            display: {xs: "flex", md: "none"},
                            maxWidth:"300px", margin: "0px 50px"
                            }}>
                            Наша компания специализируется на выполнении работ по:
                        </Typography>
                        <Typography variant="p" component="div" sx={{display: {xs: "none", md: "flex"},  letterSpacing: '.2rem', color: "#3F3E3E", fontSize: '17px' }}>
                            • проектированию,<br />
                            • монтажу, <br />
                            • пуско-наладке электротехнических систем <br /> ⠀объектов промышленности и строительства.
                        </Typography>
                        <Typography variant="p" component="div" sx={{maxWidth:"300px", margin: "20px 50px", display: {xs: "flex", md: "none"},  letterSpacing: '.2rem', color: "#3F3E3E", fontSize: '17px' }}>
                            • проектированию,<br />
                            • монтажу, <br />
                            • пуско-наладке электротехнических систем <br /> ⠀объектов промышленности и строительства.
                        </Typography>
                    </div>
                    <div className={s.aboutCompanyImage}>
                        <img src={DirectorImg} alt="" />
                        <Typography variant="p" component="div" sx={{ letterSpacing: '.1rem', color: "black", fontWeight: 'bold', fontSize: '17px' }}>
                            Директор - Сулейманов Михаил<br /> Константинович
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={s.achivAboutCompany}>
                <div className={s.achivAboutCompanyContentBlock}>
                    <Typography
                variant='h5'
                sx={{marginTop:'0px', color: 'white', display: {xs: 'flex', md: 'none'}, marginBottom: "30px", letterSpacing: ".3rem", textAlign: 'center'}}
                >
                    Достижения<br/> компании элэнерго 
                </Typography>
                    <img src={AchivImg} alt="" className={s.achivAboutCompanyContentBlockImg}/>
                    <div className={s.achivAboutCompanyText}>
                    <Typography
                variant='h4'
                sx={{color: 'white', display: {xs: 'none', md: 'flex'} , marginBottom: "89px", letterSpacing: ".3rem", textAlign: 'end'}}
                >
                    Достижения<br/> компании элэнерго 
                </Typography>
                <Typography
                variant='body1'
                sx={{color: '#B7B7B7' ,  display: {xs: 'none', md: 'flex'},letterSpacing: 4, textAlign: 'end'}}
                >
                    Компания Элэнерго реализовала  более 50 проектов. Обслуживает электроустановки зданий в г. Волгограде и г. Волжском общей площадью более 55 тыс. м2 и суммарной мощностью более 3 МВт.
На сегодняшний день нам доверяют 18 предприятий юга России, среди которых промышленные и сельскохозяйственные предприятия, управляющие компании и ТСЖ, бюджетные организации, организации общественного питания и оптово-розничной торговли.
                </Typography>

                <Typography
                variant='body1'
                sx={{color: '#B7B7B7' , padding: '0px 50px' , display: {xs: 'flex', md: 'none'},letterSpacing: 4}}
                >
                    Компания Элэнерго реализовала  более 50 проектов. Обслуживает электроустановки зданий в г. Волгограде и г. Волжском общей площадью более 55 тыс. м2 и суммарной мощностью более 3 МВт.
На сегодняшний день нам доверяют 18 предприятий юга России, среди которых промышленные и сельскохозяйственные предприятия, управляющие компании и ТСЖ, бюджетные организации, организации общественного питания и оптово-розничной торговли.
                </Typography>
                    </div>
                </div>
            </div>
            <div className={s.GuarantBlock}>
                <div className={s.GuarantContent}>
                    <div className={s.GuarantText}>
                        <Typography variant="h5" component="div" sx={{ display: {xs: 'none', md: 'flex'} ,fontSize: "30px", letterSpacing: '.3rem', color: "#3F3E3E", marginBottom: "80px" }}>
                        Все работы под ключ 
                        </Typography>
                        
                        <Typography variant="h5" component="div" sx={{padding: "0 90px", textAlign: "center", display: {xs: 'flex', md: 'none'} ,fontSize: "30px", letterSpacing: '.3rem', color: "#3F3E3E", marginBottom: "70px" }}>
                        Все работы <br/> под ключ 
                        </Typography>
                        <Typography variant="p" component="div" sx={{display: {xs: 'none', md: 'flex'}, fontSize: '17px', letterSpacing: '.2rem', color: "#3F3E3E", maxWidth: "400px", marginBottom: '40px' }}>
                        Обращаясь к нам за услугами, Вы освобождаетесь от необходимости поиска различных компаний для выполнения работ на разных этапах реализации проекта, от организации согласований между ними, что позволяет минимизировать затраты в целом.
                        </Typography>
                        <Typography variant="p" component="div" sx={{display: {xs: 'none', md: 'flex'}, fontSize: '17px', letterSpacing: '.2rem', color: "#3F3E3E", maxWidth: "400px", marginBottom: '40px' }}>
                        После завершения строительства приглашаем к сотрудничеству по обслуживанию объектов электрохозяйств, включающее диагностику и техническое обслуживание, разработку и ведение технической документации, проведение электро-лабораторных испытаний и ремонтно-восстановительных работ.
                        </Typography>
                    </div>
                    <Typography variant="p" component="div" sx={{padding: "0 25px",  display: {xs: 'flex', md: 'none'}, fontSize: '17px', letterSpacing: '.2rem', color: "#3F3E3E", maxWidth: "400px", marginBottom: '40px' }}>
                        Обращаясь к нам за услугами, Вы освобождаетесь от необходимости поиска различных компаний для выполнения работ на разных этапах реализации проекта, от организации согласований между ними, что позволяет минимизировать затраты в целом.
                        </Typography>
                    <img src={GuaranteeImg} className={s.guaranteeImg} alt="" />
                    <Typography variant="p" component="div" sx={{padding: "0 25px",  display: {xs: 'flex', md: 'none'}, fontSize: '17px', letterSpacing: '.2rem', color: "#3F3E3E", maxWidth: "400px", marginTop: '30px' }}>
                        После завершения строительства приглашаем к сотрудничеству по обслуживанию объектов электрохозяйств, включающее диагностику и техническое обслуживание, разработку и ведение технической документации, проведение электро-лабораторных испытаний и ремонтно-восстановительных работ.
                        </Typography>
                </div>
                <Accordion sx={{marginTop: "50px"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '40%', flexShrink: 0 }}>
            Реквезиты компании
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>нажмите, чтобы увидеть</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign: 'center'}}>
            {<ReactMarkdown>
                {isLoaded? contact.items[0].details : ''}

            </ReactMarkdown>
            }
           
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            </Animated>
        </>
    )
}

export default About;