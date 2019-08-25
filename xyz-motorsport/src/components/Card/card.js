import React, {useContext, useState} from 'react';
import "../../index.css";

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { CartContext } from '../Cart/CartContext';


 
const Card = (props) => {
    
    const [visible, setVisible] = useState(false);

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const [cart, setCart] = useContext(CartContext);

    const addtoCart = () => {
        const part = {name: props.name, brand: props.brand, price:props.price, picid: props.picid};
        setCart(curr => [...curr, part]);
    }

    const imgUrl = require(`../../img/${props.picid}.jpg`);

    return ( <div className="rounded overflow-hidden shadow-lg hover:shadow-xl float-left content-start m-3 flex flex-wrap mb-4 h-auto lg:w-1/8 md:w-1/6 sm:w-full">
    <img className="w-full h-48 object-cover" src={imgUrl} alt="Example"></img>
    <div className="px-6 py-4">
    <span className="text-sm text-red-500">{ props.brand } &bull; </span>
    <h2 className="font-bold text-xl mb-2">{ props.name}</h2>
    <p className="">${ props.price}</p>
    <button onClick={show} className="bg-white hover:bg-red-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow absolute top-full">View Info</button>
    </div>
    <Rodal visible={visible} onClose={hide}>
                <div>
                <h1 className="font-sans text-grey-900 font-bold"><span className="text-red-500">{ props.brand}</span> { props.name} &bull; ${ props.price}</h1>
                <p>{ props.description}</p>
                <button onClick= {addtoCart} className="bg-white hover:bg-red-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow absolute mt-5">Add To Cart</button>
                </div>
     </Rodal>
</div> );
}
 
export default Card;

