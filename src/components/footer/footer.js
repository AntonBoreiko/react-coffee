import './footer.scss'
import { Component } from 'react'

import coffeeBlack from '../../img/small-coffee-black.png'
import Line from '../../img/Line-black.png'

import logo from '../../img/logo-black.png';

class Footer extends Component {
   render() {
      return (
         <div className={"footer"}>
            <div className={"container"}>
               <div className={"footer_block"}>
                  <div className={"footer_nav"}>
                     <ul>
                        <li>
                           <img src={logo} alt="logo" />
                           <a href="#">Coffee house</a>
                        </li>
                        <li>
                           <a href="#">Our coffee</a>
                        </li>
                        <li>
                           <a href="#">For your pleasure</a>
                        </li>
                     </ul>
                  </div>
                  <div className={"footer_image"}>
                     <img src={Line} alt="line" />
                     <img src={coffeeBlack} alt="coffee" />
                     <img src={Line} alt="line" />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}


export default Footer