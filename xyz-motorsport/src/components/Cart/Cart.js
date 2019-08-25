import React, { Component, useContext } from 'react';
import Slimcard from '../Slimcard/Slimcard';
import {CartContext} from "../Cart/CartContext";

export const Cart = () => {
        const [cart, setCart] = useContext(CartContext);
        var totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
        
        return ( 
            <div>
               <p className = "font-bold text-2xl"> Your Cart</p>
                <p className = "font bold text-1xl">Total Items: {cart.length} </p>
                <p className = "font bold text-1xl">Total Price: ${totalPrice}</p>
                {cart.map(part => <Slimcard name={part.name} brand={part.brand} picid={part.picid} price={part.price}/> )}
            </div>
         );
    }
 
