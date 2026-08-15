import axios from 'axios';

const BASE_URL = "https://youtube138.p.rapidapi.com";

const getOptions = () => ({
    params: { hl: 'en', gl: 'US' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_VIXTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    },
});

export const fetchDataFromApi = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, getOptions());
    return data;
};
