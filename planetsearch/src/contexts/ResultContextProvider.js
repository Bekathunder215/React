import React, {createContext, useContext, useState} from 'react'

const ResultContext = createContext();
const baseURL = 'https://google-search74.p.rapidapi.com';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [searchTerm, setsearchTerm] = useState('Starwars');
    
    // /videos /search /images
    const getResults = async (type) =>{
        setisLoading(true);
        const response = await fetch(`${baseURL}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
        });
        try {
            const data = await response.json();
            console.log(data)
            if(!data){
                throw Error
            }       
            setResults(data);
            setisLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setsearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);