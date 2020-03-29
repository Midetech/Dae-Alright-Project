import React from "react"
import Hero from '../Homepage/';
import '../Homepage/homepage.scss';
// import SearchResultWrapper from '../SearchResultPage'
import SearchFilter from  '../../component/SearchFilter';


const searchResultPage = ()=>{
    return(
        <div>
            <Hero/>
            <SearchFilter/>
        </div>
    );
}

export default searchResultPage;