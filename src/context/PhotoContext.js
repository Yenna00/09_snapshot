import axios from 'axios';
import React, { createContext, useState } from 'react';
import { apiKey } from '../api/config';

export const PhotoContext=createContext({images:'',isLoading:false,runSearch:'没请求'});
function PhotoContextProvider(props) {

    const [images,setImages]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const runSearch=query=>{
        axios
        .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response=>{
            setImages(response.data.photos.photo);
            setIsLoading(false);
        })
        .catch(error=>{
            console.log("Encountered an error with fetching and parsing data",error);
        })
    };

    return (
        <PhotoContext.Provider value={{images,isLoading,runSearch}}>
            {props.children}
        </PhotoContext.Provider>
    );
}

export default PhotoContextProvider;
