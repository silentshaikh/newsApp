import logo from './logo.svg';
import './App.css';
import Search from './Search/Search';
import Pagination from './Pagination/Pagination';
import Stores from './Stores/Stores';

function App() {
  return (
   <>
    <h1 className='stor'>Our News Application</h1>
    <Search/>
    <Pagination/>
    <Stores/>
   </>
  );
}

export default App;
