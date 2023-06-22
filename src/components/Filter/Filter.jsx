import styles from "./Filter.module.scss"

import Accordion from "../Utils/Accordion/Accordion"

import { useState } from "react";

function Filter({ fetchBasedOnCategory, fetchBasedOnPrice }) {

   const [checked, setChecked] = useState([]);

   const handleCheck = (event) => {
      var updatedList = [...checked];
      if (event.target.checked) {
         updatedList = [...checked, event.target.value];
      } else {
         updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
      fetchBasedOnPrice(updatedList)
   };

   const priceList = [{ min: 0, max: 10 }, { min: 10, max: 20 }, { min: 20, max: 50 }, { min: 50, max: 100 }, { min: 100, max: 1000 }]

   return (<div className={styles.container}>
      <ul>
         <li><button category="all" onClick={fetchBasedOnCategory}>All</button></li>
         <li><button category="electronics" onClick={fetchBasedOnCategory}>Electronics</button></li>
         <li><button category="jewelery" onClick={fetchBasedOnCategory}>Jewelery</button></li>
         <li><button category="men's clothing" onClick={fetchBasedOnCategory}>Men's clothing</button></li>
         <li><button category="women's clothing" onClick={fetchBasedOnCategory}>Women's clothing</button></li>
      </ul>
      <Accordion title="Shop by Price">
         <ul>
            <form className={styles.price_checkbox}>
               {
                  priceList.map((item, index) => (
                     <div key={index}>
                        <label>
                           <input value={item.min + "-" + item.max} type="checkbox" onChange={handleCheck} />
                           <span>{`₹ ${item.min}.00 - ₹ ${item.max}.00`}</span>
                        </label>
                     </div>
                  ))
               }
            </form>
         </ul>
      </Accordion>
      <Accordion title="Rating">
         <ul>
            <li><button category="electronics" onClick={fetchBasedOnCategory}>Electronics</button></li>
            <li><button category="jewelery" onClick={fetchBasedOnCategory}>Jewelery</button></li>
            <li><button category="men's clothing" onClick={fetchBasedOnCategory}>Men's clothing</button></li>
            <li><button category="women's clothing" onClick={fetchBasedOnCategory}>Women's clothing</button></li>
         </ul>
      </Accordion>
   </div>);
}

export default Filter;