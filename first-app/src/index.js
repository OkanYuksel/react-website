import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Root} from "./Root";
import {Home} from "./Home";
import {User} from "./User";
import {About} from "./About";
import {Contact} from "./Contact";

var user = {
  id: "12345678",
  userName: "Admin User", 
  friends: [
    {
      userName: "User Profile 1",
      userURL: "/Books"
    },{
      userName: "User Profile 2",
      userURL: "#2"
    },{
      userName: "User Profile 3",
      userURL: "#3"
    },{
      userName: "User Profile 4",
      userURL: "#4"
    },{
      userName: "User Profile 5",
      userURL: "#5"
    }
  ],
  onlineStatus: true
};

class UserProfile extends React.Component{



	render(){
		let userOnlineStatusCssClassName = "online_status";
		if (this.props.userData.onlineStatus){
			userOnlineStatusCssClassName += " show";
		}
		const friendList = this.props.userData.friends.map(function(friend, index) {
			return < FriendItem friendProperty={friend} key={index}/>
		});
		return(
			<div className="user_profile">
				<span className="user_name">{this.props. userData.userName}</span>
        &nbsp;
				<span className={userOnlineStatusCssClassName} style={{color:'blue'}}>Online</span>
				<ul className="user_friends">{friendList}</ul>
        


        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>

			</div>

        ); 
    }
}





function FriendItem (props) {
	return(
		<li>
			<a>{'Username: ' + props.friendProperty.userName + ' URL: ' +  props.friendProperty.userURL }</a>
		</li>
	);
}

ReactDOM.render(<UserProfile userData={user}/>, document.getElementById("root"));
serviceWorker.unregister();
