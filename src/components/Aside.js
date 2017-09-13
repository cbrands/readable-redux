import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {requestCategories} from '../actions'
import { connect } from 'react-redux'

class Aside extends Component {
    componentDidMount() {
        console.log('myprops', this.props);
        this.props.requestCategories();
    }

    render() {
        let myCategories = this.props.categories.categories;
        console.log('mycategories', myCategories);
        return (
            <aside className="col-md-4 col-xs-12">
                <h2>Categories</h2>
                <ul>
                    {myCategories && myCategories.map((category) => (
                        <li key={category.name}>{category.name}</li>
                    ))}
                </ul>
            </aside>
        )
    }
}



function mapStateToProps ({ categories }) {
    return {
        categories
    }
}

function mapDispatchToProps (dispatch) {
    return {
        requestCategories: (data) => dispatch(requestCategories(data))
    }
}

//export default Aside
export default connect(mapStateToProps, mapDispatchToProps)(Aside)