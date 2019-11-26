import stockApi from '../api/StockApi'

import history from '../history'

import {
     FETCH_CATEGORIES,
     CREATE_CATEGORY,
     FETCH_CATEGORY,
     EDIT_CATEGORY,
     DELETE_CATEGORY,
    } from './types'
// Action Creator
export const selectCategory = (category) => {
    // Return an action 
    return {
        type: 'CATEGORY_SELECTED',
        payload: category
    };
};


export const fetchCategories =  () => {
    return async function(dispatch){
        const response = await stockApi.get('/categories');
        dispatch({ type: FETCH_CATEGORIES, payload: response.data })
    }

}

export const createCategory = formValues => async dispatch => {
   const response = await stockApi.post('/categories', formValues)
   dispatch({ type: CREATE_CATEGORY, payload: response.data})
   history.push('/')
}

export const fetchCategory = (id) => async dispatch => {
    const response = await stockApi.get(`/categories/${id}`);
    dispatch({ type: FETCH_CATEGORY , payload: response.data})
}

export const editCategory = (id, formValues) => async dispatch => {
    const response = await stockApi.patch(`/categories/${id}`, formValues);

    dispatch({ type: EDIT_CATEGORY, payload: response.data})
}

export const deleteCategory = (id) => async dispatch => {
   await stockApi.delete(`/categories/${id}`)
   dispatch({type: DELETE_CATEGORY, payload: id})
}