import React from 'react';
import { useParams } from 'react-router-dom';
import Container from './Container';

function Search({}) {
    const {searchInput:searchTerm}=useParams();
    return (
        <div>
            <h2>{searchTerm} Image</h2>
            <Container searchTerm={searchTerm}/>
        </div>
    );
}

export default Search;