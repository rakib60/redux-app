import _ from 'lodash'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCategory ,editCategory} from '../../actions'
import CategoryForm from './CategoryForm'
class CategoryEdit extends Component {

    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        // console.log(formValues,'fdsfsfds')
        this.props.editCategory(this.props.match.params.id, formValues)
    }
    render() {
        if(!this.props.category) {
            return <div>Loading...</div>
        }
        // return <div>{this.props.category.name}</div>
        return(
            <div>
                <h3>Edit a Category</h3>
                <CategoryForm 
                    initialValues={_.pick(this.props.category, 'name')}
                    onSubmit={this.onSubmit}/>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {category: state.categories[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchCategory, editCategory })(CategoryEdit);