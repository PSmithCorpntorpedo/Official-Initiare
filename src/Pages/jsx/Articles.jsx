import React from 'react';
import '../css/Articles.css';
import {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Articles(){
    return(
        <div className="page-wrapper">
            <FilterBox />          
            <SearchBox />
        </div>
    )
}

function FilterItem(props){
    return (
        <li className="no-list-style sub-list-items" style={props.style} >
            <label for={props.name}>
                <input type="checkbox" id={props.name}/> 
                {props.name}
            </label>
        </li>
    )
}

function FilterBox(){
   return(
   <div className="filter-box">
        <div className="filter-caption">FILTER BY</div>
            <div className="filter-area">
                <div className="fields">
                    <h2>Research Area</h2>
                    <div className="natural-sciences" >
                    <FilterItem name="Natural Sciences" style={{fontWeight:"700", fontSize: "1.2em"}} />
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
                    <FilterItem name="Social Sciences" style={{fontWeight:"700", fontSize: "1.2em"}} />
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
                    <div className="header date-published">
                        <h2>Date Published</h2>
                        <ul className="sublist2">
                            <FilterItem name="2023" />
                            <FilterItem name="2022" />
                        </ul>
                    </div>
                    <div className="header language">
                        <h2>Language</h2>
                        <ul className="sublist2">
                            <FilterItem name="English" />
                            <FilterItem name="Vietnamese" />
                        </ul>
                    </div>
                </div>
    </div>
    )
}

function SearchBox(){   
    const [search, setSearch] = useState('');
    return(
        <div className="search-box">
            <div className="search-bar">
                <input type="text" className='search' placeholder="Search articles, research papers, authors and more"/>   
                {/* i was gonna add a button here, but the styling made it impossible to idgaf anymore  */}
            </div>
            <Paginate />
        </div> 
    )
}

function Paginate(){
    const prev = <FontAwesomeIcon icon={faArrowLeft}/>
    const next = <FontAwesomeIcon icon={faArrowRight}/>

    const handlePageClick = (page) => {
        console.log(page.selected + 1)
    }
    return(
        <div className="search-results">
            <ReactPaginate 
            previousLabel = {prev}
            nextLabel = {next} 
            breakLabel = {'...'}
            pageCount = {10}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName=''
            />
        </div>
    )
}