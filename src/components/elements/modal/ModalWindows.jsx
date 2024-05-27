import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ModalContext } from '../../context/postContext';
import s from './ModalWindows.module.css'
import { PostContext } from '../../context/postContext';
import ArrowIco from './ico/6388790.png'
import Avatar from '@mui/material/Avatar';

export function ModalWindows() {
    const [modalContext, setModalContext] = React.useContext(ModalContext);
    const [postContext, setPostContext] = React.useContext(PostContext);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let findNumImg = postContext.gallary === undefined ? Number : modalContext.id;
    const [imgNum, setImgNum] = React.useState(findNumImg);
    const [picState, setPicState] = React.useState();

    let countImage = postContext.gallary === undefined ? ' ' : postContext.gallary.length;

    React.useEffect(() => {
        setImgNum(findNumImg)
    }, [findNumImg])

    React.useEffect(() => {
        if (modalContext[0] !== 1) {
            handleOpen()
        }
    }, [modalContext])

    React.useEffect(() => {
        if (modalContext[0] !== 1) {
            setPicState(postContext.gallary.find((e => e.id === imgNum)))
        }
    }, [imgNum, modalContext])

    // React.useEffect (() => {
    //     if(modalContext[0] !== 1){
    //         // setImgNum(findNumImg.find(()))
    //     }
    // } , [modalContext, imgNum])
    function handleNext() {
        if (countImage !== imgNum) {
            setImgNum(imgNum + 1);
            setModalContext(postContext.gallary.find((e => e.id === imgNum + 1)))
        }
    }
    function handleBack() {
        if (imgNum !== 1) {
            setImgNum(imgNum - 1);
            setModalContext(postContext.gallary.find((e => e.id === imgNum - 1)))
        }
    }

    return (
        <div>
            {imgNum === undefined ? null :
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: 1200,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        '@media (max-height: 1080px)': {
                            height: "800px",
                            width: '600px'
                          },
                          '@media (max-height: 768px)': {
                            height: "600px",
                          },
                          '@media (max-width: 430px)': {
                            height: "550px",
                          },
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {modalContext.title}.
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {ModalContext.modal}
                        </Typography>
                        <img src={picState === undefined ? '' : picState.img} alt="" className={s.modalImg} />
                        <div className={s.bottomBtn}>
                            <img onClick={handleBack} style={{ transform: "rotate(180deg)", cursor: "pointer" }} src={ArrowIco} height='50px' alt="" />
                            <p>{imgNum} из {countImage}</p>
                            <img onClick={handleNext} style={{ cursor: "pointer" }} src={ArrowIco} height='50px' alt="" />
                            <button className={s.btn} onClick={handleClose}>Закрыть</button>
                       </div>
                    </Box>
                </Modal>}
        </div>
    );
};

