import { Component } from "react";
import './article.scss'

import pack1 from '../../img/packs.png'
import pack2 from '../../img/pack2.png'
import pack3 from '../../img/pack3.png'


class Article extends Component {
   render() {
      return (
         <div className="article">
            <div className="container">
               <div className="article_block">
                  <h3 className={'article_title'}>Our best</h3>
                  <div className={"article_wrapper"}>
                     <div className={"article_card"}>
                        <div className={"article_image"}>
                           <img className={"article_image"} src={pack1} alt="pack of coffee" />
                        </div>
                        <p className={"article_text"}>Solimo Coffee Beans 2 kg</p>
                        <span className={"article_price"}>10.73$</span>
                     </div>
                     <div className={"article_card"}>
                        <div className={"article_image"}>
                           <img className={"article_image"} src={pack2} alt="pack of coffee" />
                        </div>
                        <p className={"article_text"}>Presto Coffee Beans 1 kg</p>
                        <span className={"article_price"}>15.99$</span>
                     </div>
                     <div className={"article_card"}>
                        <div className={"article_image"}>
                           <img className={"article_image"} src={pack3} alt="pack of coffee" />
                        </div>
                        <p className={"article_text"}>AROMISTICO Coffee 1 kg</p>
                        <span className={"article_price"}>6.99$</span>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      )
   }
}

export default Article