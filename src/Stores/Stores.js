import React,{useContext} from 'react';
import {newsAppContext} from '../context';
function Stores() {
    const {hits,loading,remNews} = useContext(newsAppContext);
    if(loading){
      return <h2 style={{textAlign:'center'}}>Please Wait...</h2>
    }
  return (
    <>
    <div className="newList">
    {
        hits.map((element) => {
            return (
                <div className="box" key={element.objectID}>
                <h3>{element.title}</h3>
                <p>{element.author} | {element.num_comments} Comments</p>
                <div className="lnk">
                <a href={element.url} style={{color:'#0fbcf9',}}>Read More...</a>
                <p style={{color:'crimson',cursor:'pointer'}} onClick={() => remNews(element.objectID)}>Remove</p>
                </div>
                </div>
            );
        })
    }
    </div>
</>
  )
}

export default Stores;
