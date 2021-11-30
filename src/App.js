import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		if(!cart.includes(item)){
			console.log("not included")
			setCart(oldCart => [...oldCart, item]);
		}
		console.log("already there");
	};
	
	const removeItem = item => {
		// remove item from cart
		setCart(cart.filter(items => items.id !== item.id));
		console.log(cart);
	};

	return (
		<div className="App">
			<ProductContext.Provider value = {{ products, addItem, removeItem }}>
				<CartContext.Provider value = { cart }>
					<Navigation />

					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
					<Route path="/login" component={Login}/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;