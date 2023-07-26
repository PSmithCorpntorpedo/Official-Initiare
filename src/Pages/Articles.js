import React from 'react';
import './Articles.css'


export default function Archive(){
    return(
        <>
        <div className="page-wrapper">

            <div className="filter-box">
                <div className="filter-caption">FILTER BY</div>
            </div>
            <div className="search-box">
                <div className="search-bar"></div>
                <div className="search-results"></div>
            </div> 
        </div>
        </>
    )
}