
import React from 'react';
import './App.css';
//import data from "./data.json"
import Product from './components/Product';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from "./store"
import {Provider} from "react-redux";



class App extends React.Component{

constructor(){
  super();
  this.state={
    //products:data.products,
    //Confirm if there is any element in the Cart before keeping it in local storage
    cartItems:localStorage.getItem("cartItems") ?JSON.parse(localStorage.getItem("cartItems")): [],
    //size:"",
    //sort:""
  };
} 
/*createOrder=(order)=>{
  alert("Need to save order for "+order.name);
}

//Deleting an element completely from tthe cart
removeFromCart=(product)=>{
  const cartItems=this.state.cartItems.slice();

  this.setState({
    cartItems:cartItems.filter(x=>x._id !==product._id),
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x=>x._id !==product._id)));

}

//Adding chosen product to the cart
addToCart=(product)=>{
  const cartItems=this.state.cartItems.slice();
  let alreadyInCart=false;
  cartItems.forEach((item)=>{
    if(item._id === product._id){
      item.count++;
      alreadyInCart=true;
    }
  });
  if(!alreadyInCart){
    cartItems.push({...product, count:1});
  }
  this.setState({cartItems});
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

//Arranging products in order depending on amount
sortProducts=(event)=>{
  console.log(event.target.value)
  const sort=event.target.value;
  this.setState((state)=>({
    sort:sort,
    products:this.state.products.slice().sort((a,b)=>
      sort==="lowest"?
      a.price>b.price?1:-1:
      sort==="highest"?
      a.price < b.price? 1:-1:
      a._id < b.id? 1:-1
    ),
    }));
};*/

  
//Arrange product depending on the required sizes
/*filterProducts=(event)=>{
  console.log(event.target.value)
  if(event.target.value===""){
  this.setState({size: event.target.value, product:data.products });
  }
  else{
    this.setState({
      size: event.target.value,
      products:data.products.filter(
        (product)=>product.availableSizes.indexOf(event.target.value) >=0
      ),
    });
  }
 
}*/

render(){
  return(
    <Provider store={store}>
<div className="grid-container">
  <header>
    <a href="/">React Shopping Cart</a>
  </header>
  <main>
    <div className="content">
      <div className="main">
        <Filter 
        /*count={this.state.products.length}
        size={this.state.size}
        sort={this.state.sort}
        filterProducts={this.filterProducts}
        sortProducts={this.sortProducts}*/
        ></Filter>
      <Product
      // products={this.state.products} 
      //addToCart={this.addToCart}
      ></Product>
      </div>
      <div className="sidebar">
        <Cart 
        /*cartItems={this.state.cartItems} 
        removeFromCart={this.removeFromCart}
        createOrder={this.createOrder}*/
        ></Cart>
      </div>
    </div>
  </main>
  <footer>All right is reserved</footer>
</div> </Provider>
  )
}
}
export default App;

