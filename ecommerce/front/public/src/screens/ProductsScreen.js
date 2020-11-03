import React from 'react';
import {useEffect,useState} from'react';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { signin } from '../actions/userActions';
import { saveProduct, listProducts } from '../actions/productActions';
import axios from 'axios';
function ProductsScreen(props){
    
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [image,setImage]=useState('');
    const [brand,setBrand]=useState('');
    const [category,setCategory]=useState('');
    const [countInStock,setCountInStock]=useState('');
    const [description,setDescription]=useState('');
    const [rating,setRating]=useState('');
    const [numReview,setNumReview]=useState('');
    const productList=useSelector(state=>state.productList); 
    const {loading, products,error}=productList;
    const productSave=useSelector(state=>state.productSave);
    const {loading:loadingSave,success:successSave,error:errorSave}=productSave;
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(listProducts());
        return ()=>{
            
        };
    },[]);
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveProduct({name,price,image,brand,category,countInStock,description}));
    }

    return <div className="content content-margined">

        <div className="product-header">
            <h3>Product</h3>
            <button>create Product</button>

        </div>
        
    
    <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                   <h3>Create Product</h3>
                </li>
                <li>
                    {loadingSave && <div>Loading..</div>}
                    {errorSave && <div>{errorSave}</div>}
                </li>
                <li>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}></input>
                </li>

                <li>
                    <label htmlFor="price">Price:</label>
                    <input type="text" name="price" id="price" onChange={(e)=>setPrice(e.target.value)}></input>
                </li>

                <li>
                    <label htmlFor="name">Image:</label>
                    <input type="text" name="image" id="image" onChange={(e)=>setImage(e.target.value)}></input>
                </li>

                <li>
                    <label htmlFor="name">Brand:</label>
                    <input type="text" name="brand" id="brand" onChange={(e)=>setBrand(e.target.value)}></input>
                </li>
               
                <li>
                    <label htmlFor="countInStock">Count in  stock:</label>
                    <input type="number" name="countInStock" id="countInStock" onChange={(e)=>setCountInStock(e.target.value)}></input>
                </li>
                

                <li>
                    <label htmlFor="name">Category</label>
                    <input type="text" name="category" id="category" onChange={(e)=>setCategory(e.target.value)}></input>
                </li>

                
             <li>
                 <label for="numReviews">Num Reviews:</label>
                 <input type="number" name="numReviews" id="numRevies"></input>
             </li>
             
                

                
               <li>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" id="description" onChange={(e)=>setDescription(e.target.value)}></input>
                </li>

               
                
                <li>
                    <button type="submit"  className="button primary">
                        Create Product
                    </button>
                </li>
               
                
            </ul>
        </form>
    </div>
   
    </div>

}

export default ProductsScreen;