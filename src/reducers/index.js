import { combineReducers } from 'redux';
import categoryReducer from './CategoryReducers'



const selectedCategoryReducer = (selectedCategory=null, action) => {
    if(action.type === 'CATEGORY_SELECTED') {
        return action.payload;
    }
    return selectedCategory;
}


export default combineReducers({
    categories: categoryReducer,
    selectedCategory: selectedCategoryReducer
})