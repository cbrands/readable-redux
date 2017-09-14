import React, { Component } from 'react'
import {requestPosts} from '../utils/middlewareAPI'
import { connect } from 'react-redux'

class PostSection extends Component {
    componentDidMount() {
        console.log('myprops', this.props);
        this.props.requestPosts();
    }

    render() {
        console.log('postprops',this.props);
        return (
            <section className="col-md-8 col-xs-12">
                <h2>Posts</h2>
            </section>
        )
    }
}

function mapStateToProps ({ posts }) {
    return {
        posts
    }
}

function mapDispatchToProps (dispatch) {
    return {
        requestPosts: (data) => dispatch(requestPosts(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostSection)