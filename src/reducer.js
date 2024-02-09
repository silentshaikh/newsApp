import React from 'react'

const reducer = (state,action) =>  {
 switch (action.type) {
    case 'GET_DATA':
        return {
            ...state,
            loading: false,
            hits: action.payLoad.hits,
            nbPages: action.payLoad.nbPages,
        };
        case 'FOR_LOAD':
            return {
                ...state,
                loading:true,
            };
        case 'REMOV_NEWS':
            return{
                ...state,
                hits: state.hits.filter((element) => element.objectID !== action.payLoad),
            };
            case 'SEARCH_NEWS':
                return{
                    ...state,
                   query: action.payLoad,
                };
                case 'PREV_BTN':
                    let pageNUmber = state.page;
                    if(pageNUmber<=0){
                        pageNUmber = 0;
                    }else{
                        pageNUmber = pageNUmber-1;
                    }
                    return{
                        ...state,
                        page: pageNUmber,
                    }
                    case 'NEXT_BTN':
                        let pageNumberTwo = state.page +1;
                        if(pageNumberTwo >= state.nbPages){
                            pageNumberTwo = 0;
                        }
                    return{
                        ...state,
                        page: pageNumberTwo,
                    }
 }
}

export default reducer;
