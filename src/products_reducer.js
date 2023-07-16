const products_reducer = (state, action) => {
    if(action.type === 'GET_PRODUCTS_BEGIN'){
        return{
            ...state, 
            news_loading:true
        }
    }
    if(action.type === 'GET_PRODUCTS_SUCCESS'){
        return {
          ...state,
          news_loading: false,
          news: action.payload,
        }
    }
    if(action.type === 'GET_PRODUCTS_ERROR'){
        return{...state, news_loading: false, news_error: true}
    }
}

export default products_reducer