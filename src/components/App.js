import React from 'react'
import { Router, Route } from 'react-router-dom'

//Todo: 
// import Header from '../components/Header' Todo:
import CategoryCreate  from '../components/category/CategoryCreate'
import CategoryEdit  from '../components/category/CategoryEdit'
import CategoryDelete from '../components/category/CategoryDelete'
import  CategoryList from '../components/category/CategoryList'
import CategoryShow  from '../components/category/CategoryShow'
import history from '../history'

const App = () => {
    return (
        <div>
            <Router history={history}>
                
               <div>
                {/* <Header/> Todo: */} 
               <Route path="/" exact component={CategoryList} />
                <Route path="/category/new" component={CategoryCreate} />
                <Route path="/category/edit/:id" component={CategoryEdit} />
                <Route path="/category/delete" component={CategoryDelete} />
                <Route path="/category/show" component={CategoryShow} />
               </div>
            </Router>
            {/* <CategoryList/> */}
            {/* <Table/> */}
            {/* <CategoryDetail/> */}
        </div>
    );
}

export default App;

// import CategoryList from './CategoryList'
// import Table from '../utils/Table'
// import CategoryDetail from './CategoryDetail'
// ToDo: For Navigation 
// import { Link } from 'react-router-dom'
// const example1 = () => {
//     return (
//         <div>
//             <Link to="/page2">sometext</Link>
//         </div>
//     )
// }

// const example2 = () => {
//     return (
//         <div>
//             <Link to="/page1">sometexttttt</Link>
//         </div>
       
//     )
// }