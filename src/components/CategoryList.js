// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import {selectCategory, fetchCategories} from '../actions'
// class CategoryList extends Component {

//     componentDidMount() {
//         this.props.fetchCategories();
//     }


//     renderList() {
//         return this.props.categories.map((category)=> {
//             return(
//                 <div key={category.id}>
//                     {/* <div>
//                         <button onClick={()=> this.props.selectCategory(category)}>Select</button>
//                         </div> */}
//                     <div>{category.name}</div>
//                     <div>{category.createdDate}</div>
//                 </div>
//             )
//         })
//     }

//     render() {
//         console.log(this.props.categories)
//         return <div>{this.renderList()}</div>
//     }
// }

// const mapStateToProps = (state) => {
//     console.log(state.categories,'ddddddddddd')
//     return {categories: state.categories};
// }
// export default connect(mapStateToProps, {
//     selectCategory, fetchCategories
// })(CategoryList);
