import { Box, Button, Container, Divider, FormGroup, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PlacesResponse from '../models/responses/Places.response';
import { msgError, showLoading } from '../actions/UI.actions';
import { getPlacesApi, getWeather } from '../api/ApiPlaces';
import { RootState } from '../store/store';
import { ErrorBar, Place } from '../components';
import { OpenWheaterResponse } from '../models/responses';

const Inicio = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const [places, setPlaces] = useState<PlacesResponse[]>([])

    const { error, loading } = useSelector((state: RootState) => state.ui)

    const handleSearchPlaces = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(showLoading(true))
        const placesResp = await getPlacesApi(inputValue)
        if (placesResp.length > 0){
            setPlaces(placesResp)
        }else{
            dispatch(msgError('No se encontraron lugares'));
        }
        dispatch(showLoading(false))
    }

	return (
        <>
            { error !== null &&  <ErrorBar />}
            <Container>
                <Typography component="h1" variant="h3" sx={{marginTop: 1}}>Search places</Typography>
                <form onSubmit={(e)=>handleSearchPlaces(e)} autoComplete="off">
                    <Box sx={{marginTop: '20px', display: 'flex', alignItems: 'center'}}>
                        <FormGroup row>
                            <TextField
                                id="inputPlaces"
                                label="Buscar lugares"
                                variant="outlined"
                                placeholder="Ej.: Monterrey"
                                size="small"
                                value={inputValue}
                                onChange={(e)=>{setInputValue(e.target.value); setPlaces([])}}
                            />
                            
                            <Button
                                type="submit"
                                size="small"
                                color="primary"
                                variant='contained'
                                disabled={loading}
                                sx={{marginLeft: '10px'}}>{ loading ? 'Buscando...' : 'Buscar' }</Button>
                        </FormGroup>
                    </Box>
                </form>
                <Divider sx={{margin: '30px 0'}} />
                {
                    places.length > 0 &&
                        <Grid container spacing={4} direction="row" alignItems="stretch" >
                            {
                                places.map((item, index) => (
                                    <Grid item xs={3} key={index}>
                                        <Place {...item} />
                                    </Grid>
                                ))
                            }
                        </Grid> 
                }
            </Container>
        </>
	)
}

export default Inicio