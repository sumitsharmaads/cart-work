import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import Example from './Example';

	class Details extends Component {
		constructor(props) {
			super(props);
			this.state = {
				currentIndex: 0,
				items:[], 
			    cart: [], no:0}			
		    }

		componentWillMount(){  
		    const currentIndex =this.state.currentIndex;
		    fetch('http://localhost:4000/datafromdatabase',{
		    method:'post',
		    headers : {
		      'Accept' : 'application/json',
		      'Content-Type':'application/json'
		    },
		    body:JSON.stringify({
		      currentIndex:currentIndex
		    })
		    })
		    .then(response => response.json())
		    .then(data => this.setState({items:data}));
 		 }

	  

		addcart = (e,name,index) => {
			console.log('hello this addItems function')
			const image = name.image;
			const name1 = name.name;
			const price = name.price;
			const temp = this.state.cart;
			temp.push({image, name1, price});
			this.setState({cart:temp, no:this.state.no+1});
			console.log(name1);
			console.log(this.state.cart);
		}

	dataAnother = () => {
		this.props.history.push({
        pathname:"/Example",
        state:{moreInfo:this.state.cart}
      })

	}
	render () {
		return (
			<div className="details">
				<div className="Header">
					<div className="Content">
						<h1 className="Content-text">Purchase Your Items</h1>
					</div>
					<div className="Cart">
						<a href="#" onClick={this.dataAnother}>
							<h3>Carts {this.state.no}</h3>
						</a>
					</div>
				</div>
				 {this.state.items.map((name,index) =>(
				    <div className="Childcard">
					 	<div className="Gallery">
		             		 <a target="_blank" href="#">
		              			<img src={name.image} alt="Office Supplies" width="600" height="400" />
		              		</a>
		             		<div className="Desc">
		                		<h3>{name.name}</h3><br/>
		                		<p className="DescText">Price: {name.price}</p>
		                		<button className="Btnadd" onClick={(e) => {this.addcart(e,name,index)}}>Add to cart</button>
		            	    </div>
	         		   </div>
         		   </div>
				 	))
				 }
			</div>
		);
	}
}

export default withRouter (Details);