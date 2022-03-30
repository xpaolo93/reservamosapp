import React from 'react'
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import CloseIcon from '@mui/icons-material/Close';
import { msgError } from '../actions/UI.actions';

const ErrorBar = () => {

    const dispatch = useDispatch()

    const { error } = useSelector((state: RootState) => state.ui)

    return (
        <>
            <Box sx={{ width: '100%', zIndex: 9999, textAlign: 'center', padding: '10px 0', backgroundColor: '#f35454' }}>
                <Grid container alignItems="center">
                    <Grid item xs={true} sx={{textAlign: 'center'}}>
                        <Typography sx={{ color: 'white' }}>
                            <>{ error }</>
                        </Typography>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <IconButton component="span" onClick={()=>dispatch(msgError(null))}>
                            <CloseIcon sx={{ float: 'right', color: 'white' }} />
                        </IconButton>
                    </Grid>
                </Grid>
                
            </Box>
        </>
    )
}

export default ErrorBar