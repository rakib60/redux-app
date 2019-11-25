import React from 'react'
import { connect } from 'react-redux'

const CategoryDetail = ({category}) => {
    if(!category) {
        return <div>Select a Category</div>
    }
    return <div>
        <h3>Details for: </h3>
        <p>
            Name: {category.name}
            <br/>
            Description: {category.description}
        </p>
    </div>
}

const mapStateToProps = (state) => {
    return {category: state.selectedCategory}
}
export default connect(mapStateToProps)(CategoryDetail);