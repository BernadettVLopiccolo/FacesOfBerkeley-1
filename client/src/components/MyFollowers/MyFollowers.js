import React from "react";
import "./MyFollowers.css";
import axios from 'axios';

class MyFollowers extends React.Component {
	constructor(props) {
		super(props);
		   this.state = {
		   	   error: '',
		   	   followers: ''
		   };
	}



	render () {
		return (
		   <div>
		   <p>You are being followed</p>
		   </div>
		);
	}
}

export default MyFollowers;