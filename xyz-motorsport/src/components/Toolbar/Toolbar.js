import React, {Component} from 'react';
import "../../index.css";

class Toolbar extends Component {
    state = {drawerOpen: false}

    drawOpener = () => {
      if (this.state.drawerOpen === false) {
        this.setState({drawerOpen: true});
      } else{
        this.setState({drawerOpen: false});
      }
    }
    render() { 
        return (  
        <nav class="flex items-center justify-between flex-wrap bg-white p-6 fixed w-full shadow z-50 top-0">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight text-black"> <span class="tracking-wide italic text-red-700">XYZ</span> Motorsport</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-black-200 border-black hover:border-red-400" onClick={this.drawOpener}>
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
         <div className= {`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${this.state.drawerOpen ? ' ' : 'hidden'  } `}>
          <div class="text-sm lg:flex-grow">
          <a href= '#' class="block mt-4 lg:inline-block lg:mt-0 text-grey-900 hover:text-red-700 mr-4"> About </a>
          </div>
          <div>
            <button onClick={this.props.drawerClickHandler} class="inline-block text-sm px-4 py-2 leading-none border rounded text-grey-900 border-black hover:border-grey hover:text-red-700 hover:bg-white mt-4 lg:mt-0">Cart</button>
          </div>
    </div>
      </nav>);
    }
}
 
export default Toolbar;

