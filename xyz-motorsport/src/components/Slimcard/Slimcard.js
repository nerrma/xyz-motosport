import React, { Component, useContext, useState } from 'react';
import {CartContext} from '../Cart/CartContext';

const Slimcard = (props) => {

    const [visible, setVisible] = useState(true);

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const imgUrl = require(`../../img/${props.picid}.jpg`);
    
    const [cart, setCart] = useContext(CartContext);

    const removeElement = () => {
        for (var i = 0; i < cart.length; i++){
            if(cart[i].name === props.name){
                cart.splice(i,1);
                setCart(cart.splice(0));
            }
        }
    }

    return ( 
        <>
    { visible &&
    <div className="rounded shadow-md p-4 m-2"> 
    <img className="h-6 object-cover" src={imgUrl} alt="Example"></img>
    <p> {props.brand} &bull; {props.name} &bull; <span className="font-bold"> ${props.price}  </span> </p>
    <button onClick={removeElement} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full float-right">X</button>
    </div> 
    
 } 
        </>
 );
}
 
export default Slimcard;