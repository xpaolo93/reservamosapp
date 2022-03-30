import * as React from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { AppConfig } from '../config/config';
import { OpenWheaterResponse } from '../models/responses';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    maxWidth: 600,
    height: '95%',
    maxHeight: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto'
};

interface ModalPlaceProps {
    title: string;
    weather: OpenWheaterResponse;
    callBack: () => void
}

const ModalPlace = ({ title, weather, callBack }: ModalPlaceProps) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={true}
            onClose={callBack}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={true}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2" sx={{marginBottom: 2}}>
                        {title}
                    </Typography>

                    <Grid container spacing={2}>
                        {
                            weather.daily.map((item, index) => (
                                index > 0 &&
                                    <Grid item xs={6} key={index} >
                                        <Card sx={{ width: '100%' }} >
                                            <CardHeader
                                                avatar={
                                                    <Avatar aria-label={item.weather[0].main} src={`${AppConfig.urlBaseImg}${item.weather[0].icon}.png`} />
                                                }
                                                title={<><Typography sx={{fontWeight: 'bold'}}>{item.weather[0].main}</Typography></>}
                                            />
                                            <CardContent>
                                            
                                                <Typography variant="body2" color="text.secondary">
                                                    <b>Mínimo:</b> {item.temp.min}
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary">
                                                    <b>Máximo:</b> {item.temp.max}
                                                </Typography>

                                            </CardContent>
                                        </Card>
                                    </Grid>
                            ))
                        }
                    </Grid>
                    <Box sx={{widht: '100%', textAlign: 'center', marginTop: 2}}>
                        <Button color="primary" variant="contained" size="small" onClick={callBack}>Cerrar</Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}

export default ModalPlace