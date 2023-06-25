import React, { useContext, useEffect } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import Gallery from './Gallery';
import Loader from './Loader';

function Container({searchTerm}) {
    const {images,isLoading,runSearch}=useContext(PhotoContext);
    useEffect(()=>{
        runSearch(searchTerm);
    },[searchTerm]);
    return (
        <div className="photo-container">
            {isLoading ? <Loader/> : <Gallery data={images}/>}
        </div>
    );
}

export default Container;