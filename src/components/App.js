import { useState, useEffect } from "react" 
import "../styles/Layout.css"
import logo from '../assets/logo.png'
import Banner from './Banner'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import Cart from './Cart'




function App() {
	const savedCart = localStorage.getItem('cart');
    const initialCart = savedCart ? JSON.parse(savedCart) : [];
    const [cart, updateCart] = useState(Array.isArray(initialCart) ? initialCart : []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

	
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App