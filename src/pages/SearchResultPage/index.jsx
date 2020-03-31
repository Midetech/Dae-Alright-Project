import React from "react"
import HeaderWraper from '../../component/HeaderWrapper';
import "../../component/HeaderWrapper/header-wrapper.scss"
import propTypes from "prop-types"
import '../Homepage/homepage.scss';
import SearchInput from "../../component/Search-input";
// import SearchResultWrapper from '../SearchResultPage'
import SearchFilter from  '../../component/SearchFilter';
import ResultText from '../../component/ResultText'
import Navigation from '../../component/Navigation'


const searchResultPage = ()=>{
    return(
        <div>
            <HeaderWraper renderProp={() => (
                        <div className="header">
                            <Navigation/>
                            <h2 className="header-text"><b>Fresh, Delicious</b> meals to reach your optimum <b>health & fitness</b></h2>
                            <p className="header-sub-text">we can deliver even the most unusual ideas!</p>
                            <h2 className="header-paragraph">Discover local restaurants that delivers to your doorstep!</h2>
                            <SearchInput />
                        
                        </div>
                )}/>
                <ResultText/>
            <SearchFilter/>
        </div>
    );
}

export default searchResultPage;