import styles from "./Filter.module.scss"

import Accordion from "../Utils/Accordion/Accordion"

function Filter({fetchBasedOnCategory}) {


    return ( <div className={styles.container}>
        <Accordion title="Category">
         <ul>
            <li><button category="electronics" onClick={fetchBasedOnCategory}>Electronics</button></li>
                <li><button category="jewelery" onClick={fetchBasedOnCategory}>Jewelery</button></li>
                <li><button category="men's clothing" onClick={fetchBasedOnCategory}>Men's clothing</button></li>
            <li><button category="women's clothing" onClick={fetchBasedOnCategory}>Women's clothing</button></li>
           </ul>
        </Accordion>
    </div> );
}

export default Filter;