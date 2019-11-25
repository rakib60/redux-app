import stockApi from '../api/StockApi'

// Action Creator
export const selectCategory = (category) => {
    // Return an action 
    return {
        type: 'CATEGORY_SELECTED',
        payload: category
    };
};


export const fetchCategory =  () => {
    console.log('sffffff')
    return async function(dispatch){
        console.log(dispatch,'ddddddd')
        const response = await stockApi.get('/categories');
        dispatch({ type: 'FETCH_CATEGORIES', payload: response.data })
    }

}
