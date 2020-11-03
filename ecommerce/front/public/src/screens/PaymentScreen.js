import React from 'react';
import {useEffect,useState} from'react';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentScreen(props){
    const [PaymentMethod,setPaymentMethod]=useState('');
    
    
    
    
    const dispatch=useDispatch();
   
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(savePayment(PaymentMethod));
        props.history.push('placeorder')
    }

    return <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                   <h3>Payment </h3>
                </li>
                <input type="radio" name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}></input><label>Paypal</label>
                

                

                <li>
                    <button type="submit" className="button primary">
                        Continue
                    </button>
                </li>
                
                
            </ul>
        </form>
    </div>
    </div>
    

}

export default PaymentScreen;