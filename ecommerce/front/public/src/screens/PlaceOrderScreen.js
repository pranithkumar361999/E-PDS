import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
function PlaceOrderScreen(props){

    const cart=useSelector(state=>state.cart);
    const {cartItems ,shipping ,payment}=cart;
    if(!shipping){
        props.history.push("/shipping");
    }
    if(!payment){
        props.history.push("/payment");
    }
    const dispatch=useDispatch();
   
    useEffect(() => {
        
        
    }, []);
    const checkoutHandler=()=>{
        props.history.push("/sigin?redirect=shipping")
    }
    return <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="placeorder">
        <div className="placeorder-info">
        <div>
            <h3>Shipping</h3>
            <div>
                {cart.shipping.address},{cart.shipping.city},
                {cart.shipping.postalCode},{cart.shipping.address}
            </div>
        </div>
        <div>
            <h3>Payment</h3>
            <div>
                Payment Method:{cart.paymentMethod}
            </div>
        </div>
        
        </div>
        <div className="placeorder-action">
            <h3>
                Subtotal:({cartItems.reduce((a,c)=> a+c.qty,0)} items)
                Rs.{cartItems.reduce((a,c)=>a + c.price*c.qty,0)}
            </h3>
           <button onClick={checkoutHandler} class="button primary full-width" disabled={cartItems.length===0}>
                Proceed to Checkout
           </button>
        </div>
       
    </div>
    </div>
   
}
export default PlaceOrderScreen;