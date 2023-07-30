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
    let limit = 12

    const [items, setItems] = useState([])
    const [pageCount, setPageCount] = useState(0)

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=12`)
            const data = await res.json()
            const total = res.headers.get('x-total-count')
            setPageCount(Math.ceil(total/12)) 
            setItems(data)
        }
        getComments()
        /*this is essentially a one time use method that loads everytime the page reloads*/
    }, [])


    const fetchPageComments = async (page) => {
         
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`)
        const data = await res.json()
        return data
    }

    const handlePageClick = async (input) => {
        const page = input.selected + 1;
        const pageServer = await fetchPageComments(page)
        setItems(pageServer)
    }
    return(
        <div className="search-results">
            <div className="row m-2">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="shadow-sm w-100" style={{ minHeight: 225}}>
                <div className="card-body" style={{ zIndex:'1'}}>
                  <h5 className="card-title text-center h2" style={{ zIndex:'1'}}>Id :{item.id} </h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    {item.email}
                  </h6>
                  <p className="card-text" style={{ zIndex:'1'}}>{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
            <ReactPaginate 
            previousLabel = {prev}
            nextLabel = {next} 
            breakLabel = {'...'}
            pageCount = {pageCount}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
            />
        </div>
        </div>
    )
}