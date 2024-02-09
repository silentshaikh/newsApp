import React,{useContext} from 'react'
import { newsAppContext } from '../context';
function Pagination() {
  const {page,nbPages,nextBtn,prevBtn} = useContext(newsAppContext);
  return (
    <>
        <div className='paginat'>
        <button onClick={() => prevBtn()}>Prev</button>
      <p>{page+1} of {nbPages}</p>
      <button onClick={() => nextBtn()}>Next</button>
      </div>
    </>
  )
}

export default Pagination
