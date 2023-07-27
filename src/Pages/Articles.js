import React from 'react';
import './Articles.css';


export default function Archive(){
    return(
        <>
        <div className="page-wrapper">

            <div className="filter-box">
                <div className="filter-caption">FILTER BY</div>
                <div className="filter-area">
                    <div className="fields">
                        <h2>Research Area</h2>
                        <div className="natural-sciences" >
                            <FilterItem name="Natural Sciences" style={{fontWeight:"bold", fontSize: "1em"}} />
                            <ul className="sublist1">
                                <FilterItem name="Life Sciences" />
                                <FilterItem name="Physical Sciences" />
                                <FilterItem name="Earth Sciences" />
                                <FilterItem name="Medical and Health" />
                                <FilterItem name="Mathematics" />
                                <FilterItem name="Formal Sciences" />
                            </ul>

                        </div>
                        <div className="social-sciences">
                            <FilterItem name="Social Sciences" style={{fontWeight:"bold", fontSize: "1em"}} />
                                <ul className="sublist1">
                                    <FilterItem name="Social Studies" />
                                    <FilterItem name="Humanities" />
                                
                                </ul>
                        </div>
                    </div>
                    <div className="header status">
                        <h2>Status</h2>
                        <ul className="sublist2">
                            <FilterItem name="Non-reviewed"/>
                            <FilterItem name="Peer-reviewed"/>
                            <FilterItem name="Specialist-reviewed"/>
                        </ul>
                        
                    </div>
                    <div className="header date-published"></div>
                    <div className="header language"></div>
                </div>
            </div>

            
            <div className="search-box">
                <div className="search-bar"></div>
                <div className="search-results"></div>
            </div> 
        </div>
        </>
    )
}

function FilterItem(props){
    return (
        <li className="no-list-style sub-list-items" style={props.style} >
            <input type="checkbox" id={props.name}/> 
            <label for={props.name}><span> {props.name}</span></label>
        </li>
    )
}

