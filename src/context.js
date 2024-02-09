import React,{createContext, useEffect, useReducer} from 'react';
import reducer from './reducer';
const newsAppContext = createContext();
const apiNews = 'https://hn.algolia.com/api/v1/search?';
const intialValue = {
    loading:false,
    query:'HTML',
    nbPages:0,
    page:0,
    hits:[],
}
function AppProvide({children}) {
    const [state,dispatch] = useReducer(reducer,intialValue);
    const newsDataFetch = async (data) => {
        dispatch({type:'FOR_LOAD'})
        try {
            const myFetch = await fetch(data);
        const myData= await myFetch.json();
        console.log(myData);
        dispatch({type:'GET_DATA',payLoad:{
            hits: myData.hits,
            nbPages: myData.nbPages,
        }})
        } catch (error) {
            console.log(error)
        }
    }
    const remNews = (id) => {
        dispatch({type:'REMOV_NEWS',payLoad:id})
    }
    const searchNews = (inpValue) => {
        dispatch({type:'SEARCH_NEWS',payLoad:inpValue})
    }
    const prevBtn = () => {
        dispatch({type:'PREV_BTN'})
    }
    const nextBtn = () => {
        dispatch({type:'NEXT_BTN'})
    }
    useEffect(() => {
        newsDataFetch(`${apiNews}query=${state.query}&page=${state.page}`)
    },[state.query , state.page]);
  return (
    <newsAppContext.Provider value={{...state, remNews,searchNews,nextBtn,prevBtn}}>{children}</newsAppContext.Provider>
  );
}

export default AppProvide;
export {newsAppContext};
