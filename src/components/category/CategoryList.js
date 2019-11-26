import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCategories} from  '../../actions'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
    componentDidMount() {
        this.props.fetchCategories()
    }

    renderList() {
        return this.props.categories.map(category => {
            return (
                <div key={category.id}>
                    <div>
                        {category.name}
                    </div>
                    <div>
                        <button>
                            EDIT
                        </button>
                        <button>
                            DELETE
                        </button>
                    </div>
                </div>
            );
        })
    }

    renderCreate() {
        return (
            <div>
                <Link to="/category/new">
                 Create Category
                </Link>
            </div>
        )
    }

    render() {
        console.log(this.props.categories,'dss')
       return (
           <div>
               <h2>Categories</h2>
               <div>
                   {this.renderList()}
               </div>
               {this.renderCreate()}
           </div>
       )
    }
}

const mapStateToProps = (state) => {
    return { categories: Object.values(state.categories)}
}

export default connect(mapStateToProps, { fetchCategories })(CategoryList);