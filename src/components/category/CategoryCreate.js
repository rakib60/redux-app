import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCategory} from '../../actions'
import CategoryForm from './CategoryForm'
class CategoryCreate extends Component {


    onSubmit = formValues => {
        this.props.createCategory(formValues)
    }

    render() {
        return (
            <div>
                <h3>Create a Category</h3>
                <CategoryForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}



export default connect(null, {createCategory})(CategoryCreate);