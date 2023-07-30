import React from 'react';
import articlescss from '../css/articles.module.css';
import {useState} from 'react';


export default function Articles(){
    return(
        <div className={articlescss['page-wrapper']}>
            <FilterBox />          
            <SearchBox />
        </div>
    )
}

function FilterItem(props){
    return (
        <li className={articlescss['no-list-style sub-list-items']} style={props.style} >
            <label for={props.name}>
                <input type="checkbox" id={props.name}/> 
                {props.name}
            </label>
        </li>
    )
}

function FilterBox(){
   return(
   <div className={articlescss['filter-box']}>
        <div className={articlescss['filter-caption']}>FILTER BY</div>
            <div className={articlescss['filter-area']}>
                <div className={articlescss['fields']}>
                    <h2>Research Area</h2>
                    <div className={articlescss['natural-sciences']} >
                    <FilterItem name="Natural Sciences" style={{fontWeight:"700", fontSize: "1.2em"}} />
                            <ul className={articlescss['sublist1']}>
                                <FilterItem name="Life Sciences" />
                                <FilterItem name="Physical Sciences" />
                                <FilterItem name="Earth Sciences" />
                                <FilterItem name="Medical and Health" />
                                <FilterItem name="Mathematics" />
                                <FilterItem name="Formal Sciences" />
                            </ul>

                    </div>
                    <div className={articlescss['social-sciences']}>
                    <FilterItem name="Social Sciences" style={{fontWeight:"700", fontSize: "1.2em"}} />
                            <ul className={articlescss['sublist1']}>
                                <FilterItem name="Social Studies" />
                                <FilterItem name="Humanities" />
                            </ul>
                        </div>
                    </div>
                    <div className={articlescss['header status']}>
                        <h2>Status</h2>
                        <ul className={articlescss['sublist2']}>
                            <FilterItem name="Non-reviewed"/>
                            <FilterItem name="Peer-reviewed"/>
                            <FilterItem name="Specialist-reviewed"/>
                        </ul>
                        
                    </div>
                    <div className={articlescss['header date-published']}>
                        <h2>Date Published</h2>
                        <ul className={articlescss['sublist2']}>
                            <FilterItem name="2023" />
                            <FilterItem name="2022" />
                        </ul>
                    </div>
                    <div className={articlescss['header language']}>
                        <h2>Language</h2>
                        <ul className={articlescss['sublist2']}>
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
        <div className={articlescss['search-box']}>
                <div className={articlescss['search-bar']}>
                    <input type="text"/>
                </div>
                <div className={articlescss['search-results']}></div>
        </div> 
    )
}