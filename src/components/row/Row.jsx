import React,{useEffect, useState} from 'react';
import './Row.scss'
import axios from '../../axios';
import {Link} from 'react-router-dom';

function Row(props) {
    const [anime,setAnime] = useState([])
    useEffect(() => {
      axios.get(props.url).then((response)=>{
          setAnime(response.data.data)
      })
    }, );
    
    
  return (<div className='rowContainer'>
            <h2 className='trendingTitle'>{props.title}</h2>
            <div className='row'>
                  {anime.map((obj)=>
                <div className="cardBox">
                <Link to={"overview/" + obj.entry.mal_id}>
                <img src={obj.entry ? obj.entry.images.jpg.large_image_url : ""} alt="" />
                </Link>
                <p>{obj.entry ? obj.entry.title : ""}</p>
            </div>
          )}
      </div>
  </div>);
}

export default Row;