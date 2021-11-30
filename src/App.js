import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart(oldCart => [...oldCart, item]);
	};
	
	const removeItem = item => {
		console.log("Removing", item);
		console.log("My current cart ", cart);
		setCart(cart.filter(products => products.title !== item.title))
	};

	return (
		<div className="App">
			<ProductContext.Provider value = {{ products, addItem, removeItem }}>
				<CartContext.Provider value = { cart }>
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;