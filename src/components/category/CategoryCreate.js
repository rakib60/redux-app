import React, { Component } from 'react'
import {Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createCategory} from '../../actions'

class CategoryCreate extends Component {

    renderError({error, touched}) {
        if(touched && error) {
            return (
            <div>{error}</div>
            )
        }
    }

    renderInput = ({ input, label , meta}) => {
        return (
           <div>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
           </div>
        )
    }

    onSubmit = formValues => {
        this.props.createCategory(formValues)
    }

    render() {
        // console.log(this.props)
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="name" component={this.renderInput} label="Enter a Category Name"/>
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.name) {
        errors.name = 'You Must enter a Category name'
    }

    return errors;

}

const formWrapped = reduxForm({
    form: 'categoryCreate',
    validate
})(CategoryCreate);

export default connect(null, {createCategory})(formWrapped);