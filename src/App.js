import React, {Component} from 'react';
import './App.css';
import Collection from './model/collection.js';

class App extends Component {

    componentWillMount() {
        let collection = new Collection();
        console.log("here");
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Jida Test</h1>
                </header>
            </div>
        );
    }
}

export default App;
