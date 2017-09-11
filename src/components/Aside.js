import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {loadCategories} from '../actions'
import { connect } from 'react-redux'
import { getCategories } from '../utils/backendAPI';

class Aside extends Component {
    componentDidMount() {
        getCategories().then(categories => dispatch(loadCategories(categories)))
    }

    // export const fetchCategories = () => dispatch => (
    //     getAllCategories()
    //         .then(categories => dispatch(loadCategories(categories)))
    // )

    render() {
        console.log('this.props', this.props)
        var myCategories;
        if (this.state && this.state.categories) {
            myCategories = this.state.categories;
        }
        return (
            <aside className="col-md-4 col-xs-12">
                <h2>Categories</h2>
                <ul>
                    {myCategories && myCategories.map((category) => (
                        <li key={category}>{category}</li>
                    ))}
                </ul>
            </aside>
        )
    }
}



function mapStateToProps ({ state }) {
    //console.log(categories)
  return {
    categories: state.categories
  };
}

//const mapDispatchToProps = (dispatch) => {
//  return {
//    getCategories: (data) => dispatch(loadCategories(data))
//  }
//}

export default connect(mapStateToProps, null)(Aside)