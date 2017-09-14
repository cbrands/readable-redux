import React, { Component } from 'react';
import Aside from './Aside';

class MainPage extends Component {
    render() {
        return (
            <div className="App">
                <h1>Readable</h1>
                <Aside />
            </div>
        )
    }
}

export default MainPage;