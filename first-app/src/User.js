import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class User extends React.Component {
    onNavigateHome() {
      
    }

    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.params.id}</p>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}