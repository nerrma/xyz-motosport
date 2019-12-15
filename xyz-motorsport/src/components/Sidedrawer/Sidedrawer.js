import React, { Component} from 'react';
import "../../index.css";
import {Cart} from "../Cart/Cart";

class Sidedrawer extends Component {
    render() { 
        return ( 
            <div id="Sidedrawer" className = "h-full shadow overflow-scroll bg-white fixed z-50 p-4">
                <button className="bg-red-500 hover:bg-red-700 text-white p-2 rounded right-0 float-right" onClick = {this.props.drawerClickHandler}>Close</button>
                <Cart/>
            </div>
         );
    }
}
 
export default Sidedrawer;