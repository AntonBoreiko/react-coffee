import './header.scss'
import { Component } from 'react'

import logo from '../../img/logo.png';
import coffeeWhite from '../../img/coffeeWhite.png'
import Line from '../../img/Line.png'



class Header extends Component {
   render() {
      return (
         <div className={'header'}>
            <div className={'container'}>
               <div className={'header_nav'}>
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
               <div className={'header_wrapper'}>
                  <div className={'header_block'}>
                     <h1 className={'header_title'}>Everything You Love About Coffee</h1>
                     <div className={'header_block_image'}>
                        <img src={Line} alt="line" />
                        <img src={coffeeWhite} alt="coffee" />
                        <img src={Line} alt="line" />
                     </div>
                     <h3 className={'header_text'}>We makes every day full of energy and taste</h3>
                     <h3 className={'header_text'}>Want to try our beans?</h3>
                     <a href="#" className={'header_link'}>More</a>
                  </div>
               </div>
            </div>
         </div>
      )

   }
}

export default Header