import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MainPage from './MainPage';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Container">
                    <Route exact path ='/' component={MainPage} />
                    <Route exact path ='/:category' component={MainPage} />
                </div>
            </div>
        )
    }
}

export default App;