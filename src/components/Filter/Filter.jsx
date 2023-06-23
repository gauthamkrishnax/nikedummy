import styles from "./Filter.module.scss"
import Accordion from "../Utils/Accordion/Accordion"

import { useState } from "react";
import { Link } from "react-router-dom";

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
         <Link to="/">
            <li><button>All</button></li>
         </Link>
         <Link to="/electronics">
            <li><button>Electronics</button></li>
         </Link>
         <Link to="/jewelery">
            <li><button>Jewelery</button></li>
         </Link>
         <Link to="/men's clothing">
            <li><button>Men's clothing</button></li>
         </Link>
         <Link to="/women's clothing">
            <li><button>Women's clothing</button></li>
         </Link>
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
   </div >);
}

export default Filter;