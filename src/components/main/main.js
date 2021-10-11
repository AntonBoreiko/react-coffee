import { Component } from "react";
import './main.scss'

import coffeeBlack from '../../img/small-coffee-black.png'
import Line from '../../img/Line-black.png'

class Main extends Component {
   render() {
      return (
         <div className={'main'}>
            <div className={'container'}>
               <div className={"main_block"}>
                  <h3 className={'main_title'}>About Us</h3>
                  <div className={'main_block_image'}>
                     <img src={Line} alt="line" />
                     <img src={coffeeBlack} alt="coffee" />
                     <img src={Line} alt="line" />
                  </div>
                  <p className={'main_text'}>
                     Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                     Afraid at highly months do things on at. Situation recommend objection do intention
                     so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                     met spot shy want. Children me laughing we prospect answered followed. At it went
                     is song that held help face.
                  </p>
                  <p className={'main_text'}>
                     Now residence dashwoods she excellent you. Shade being under his bed her, Much
                     read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                     horrible but confined day end marriage. Eagerness furniture set preserved far
                     recommend. Did even but nor are most gave hope. Secure active living depend son
                     repair day ladies now.
                  </p>
               </div>
            </div>
         </div>
      )

   }
}


export default Main