import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react';
import { getWeather } from '../api/ApiPlaces';
import { OpenWheaterResponse, PlacesResponse } from '../models/responses';
import { ModalPlace } from './';
import { useDispatch } from 'react-redux';
import { msgError } from '../actions/UI.actions';

const Place = (place: PlacesResponse) => {

    const dispatch = useDispatch()

    const [loadingWeather, setLoadingWeather] = useState(false)

    const [weather, setWeather] = useState<OpenWheaterResponse>({} as OpenWheaterResponse)

    const handleSeleccionarPlace = async (place: PlacesResponse) => {
        setLoadingWeather(true)
        const weatherResp = await getWeather(place.lat, place.long);
        if (weatherResp !== null) {
            setWeather(weatherResp)
        }else{
            dispatch(msgError('Hubo un error al buscar el pronóstico en esta zona'))
        }
        setLoadingWeather(false)
    }

    return (
        <>
            <Card sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {place.country}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {place.display}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {place.state}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" disabled={loadingWeather} onClick={() => handleSeleccionarPlace(place)}> {loadingWeather ? 'Cargando...' : 'Ver pronóstico'}</Button>
                </CardActions>
            </Card>

            {
                Object.keys(weather).length > 0 &&
                    <ModalPlace title={place.display} weather={weather} callBack={() => { setWeather({} as OpenWheaterResponse); }} />
            }
        </>
    )
}

export default Place