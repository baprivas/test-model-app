import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Collection from '../model/collection.js';

class List extends Component {

    constructor() {
        super();
        let collection = new Collection();
        this.state = {
            'users': collection.users
        };
    }

    componentWillMount() {

    }

    render() {
        let output = [];
        this.state.users.forEach((item) => {
            output.push(
                <Link to={`/form/${item.id}`}>
                    <h4>{item.name}</h4>
                    <small>{item.country}</small>
                </Link>
            );
        });
        return (
            <div className="App">
                <header className="App-header">
                    <h3>Users</h3>
                    <hr/>
                    {output}
                </header>
            </div>
        );
    }
}

export default List;