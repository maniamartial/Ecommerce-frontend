import React, { Component } from 'react'
import formatCurrency from '../util';
import "./carindex.css";
import Modal from 'react-modal'
import Fade from 'react-reveal/Fade';
import Zoom from "react-reveal/Zoom"
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import {createOrder, clearOrder} from "../actions/orderActions"

 class Cart extends Component {
    constructor(props){
    super(props);
    this.state={
        name:"",
        email:"",
        address: " ",
        showCheckout: false}
    }
    handleInput=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    };
    createOrder=(e)=>{
    e.preventDefault();
     const order={
    name: this.state.name,
    email: this.state.email,
    address: this.state.address,
    cartItems: this.props.cartItems, 
    total:this.props.cartItems.reduce((a , b) => a+ c.price*c.count,0),
}
this.props.createOrder(order);
closeModal =() =>{
    this.props.clearOrder();
}
    }
    render() {
        const {cartItems, order}=this.props;
        return (
            <div>
                {cartItems.length===0? (<div className="cart cart-header">Cart is empty</div>
                ):
                (<div className="cart cart-header">You have {cartItems.length} in the cart {" "}</div>)
                }
                {orrder && <Modal>
                    <Zoom>
                        <button className="close-button " onClick={this.closeModal}></button>
                        <div className="order-details">
                            <h3 className="success-message">Your order has been placed. </h3>
                            <h2>Order {order._id}</h2>
                            <ul>
                                <li>
                                    <div>Name: </div>
                                    <div>{order._id}</div>
                                </li>

                                <li>
                                    <div>Email: </div>
                                    <div>{order.email}</div>
                                </li>

                                <li>
                                    <div>Address: </div>
                                    <div>{order.address}</div>
                                </li>

                                <li>
                                    <div>Date: </div>
                                    <div>{order.createdAt}</div>
                                </li>


                                <li>
                                    <div>Total: </div>
                                    <div>{formatCurrency(order.total)}</div>
                                </li>

                                <li>
                                    <div>Cart Items: </div>
                                    <div>{order.cartItems.map((x)=>{
                                        <div>{x.count} {"X"} {x.title}{" "} </div>
                                    })}</div>
                                </li>
                            </ul>
                        </div>
                        </Zoom></Modal>}

                <div>
                    <div className="cart">
                        <Fade left cascade>
                        <ul className="cart-items">
                            {cartItems.map(item=>(
                                <li key={item._id}>
<div>
    <img src={item.image} alt={item.title}></img>
</div>
<div>
<div>{item.title}</div>
<div className="right">
    {formatCurrency(item.price)} X {item.count}{" "}
<button className="red" onClick={() =>this.props.removeFromCart(item)}>Romove</button>
</div>

</div>
                                </li>
                            ))}
                        </ul>
                        </Fade>
                    </div>
                    {cartItems.length !==0 && (
                        <div className="cart">
                         <div className="total">
                             Total:{" "}
                             {formatCurrency(cartItems.reduce((a,c)=> a + c.price*c.count, 0))} {" "}
                             <button onClick={()=>
                                {this.setState({showCheckout: true});}} className="proceed" >Proceed</button>  
                             </div>
                    </div>
                
                    
                    )}
                    <div>
                        {this.state.showCheckout && (
                            <Fade right cascade>
                            <div className="cart">
                                <form onSubmit={this.createOrder}>
                                    <ul className="form-container">
                                       <li>
                                           <label>Email</label>
                                           <input name="email"  type="email"
                                           required onChange={this.handleInput}></input>
                                       </li>

                                       <li>
                                           <label>Name</label>
                                           <input name="name" type="text"
                                           required onChange={this.handleInput}></input>
                                       </li>
                                       
                                       <li>
                                           <label>Address</label>
                                           <input name="address"
                                           type="text"
                                           required onChange={this.handleInput}></input>
                                       </li>

                                       <li>
                                           <button className="button" type="submit">Checkout</button>
                                       </li>
                                    </ul>
                                </form>
                            </div>
                            </Fade>
                        )}
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default connect(
    (state) => ({
        order:state.order.order,
    cartItems:state.cart.cartItems,
}),
{removeFromCart, createOrder, clearOrder}
)