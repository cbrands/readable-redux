import React, { Component } from 'react';
import Aside from './Aside';
import PostSection from './PostSection';

class MainPage extends Component {
    render() {
        return (
            <div className="App">
                <h1>Readable</h1>
                <Aside />
                <PostSection />
            </div>
        )
    }
}

export default MainPage;