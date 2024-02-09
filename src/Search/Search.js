import React,{useContext} from 'react';
import {newsAppContext} from '../context';
function Search() {
  const {query,searchNews} = useContext(newsAppContext);
  return (
    <>
        <form action='' className='inpo'>
      <input type="text" name="" id="" value={query} onChange={(e) => searchNews(e.target.value)} placeholder='Search Here..' />
      </form>
    </>
  )
}

export default Search
