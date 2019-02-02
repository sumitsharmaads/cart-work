import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";

class Example extends Component {
  constructor(props) {
	super(props);
	this.state = {
		currentIndex:0,
		Info:''}			
	}
  componentWillMount(){
  	var tempInfo = this.props.location.state.moreInfo;
  	console.log(tempInfo);
  	this.setState({Info:tempInfo});
  }

  render() {	
    return (
      <div className="Example">
     		<table>
     			<tr>
     				<th>Sr No.</th>
     				<th>Product Name</th>
     				<th>Product Price</th>
     			</tr>
     			{
     				this.state.Info.map((name,index) => (
     					<tr>
     						<td>{index+1}</td>
     						<td>{name.name1}</td>
     						<td>{name.price}</td>
     					</tr>
     				))
     			}
       		</table>
      </div>
    );
  }
}

export default withRouter (Example);
