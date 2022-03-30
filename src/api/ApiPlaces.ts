import axios from "axios";
import { AppConfig } from "../config/config";
import { OpenWheaterResponse, PlacesResponse } from "../models/responses";


export const getPlacesApi = async (place: string) => {
    const url = `https://search.reservamos.mx/api/v2/places?q=${place}`;
    const respCiudades = await axios.get<PlacesResponse[]>(url);
    return respCiudades.data;
}

export const getWeather = async (lat: string, lon: string ) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${AppConfig.excluir}&appid=${AppConfig.apiKey}&units=metric`
    const respCiudades = await axios.get<OpenWheaterResponse>(url);
    return respCiudades.data;
}