import { useState, useEffect } from "react";

// import data from "../../data/products";

import Card from "../Utils/Card/Card";
import Filter from "../Filter/Filter";

import styles from "./Main.module.scss"

const productURL = "https://fakestoreapi.com/products"

function Main () {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(productURL)
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setData(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
     }, []);

    const storeItems = data.map(item => 
        <Card key={item.id} title={item.title} img={item.image} cat={item.category} price={item.price}/>)
    return ( 
    <div className={`main ${styles.main}`}>
        <div>
            <h1>Men's Summer Shop(180)</h1>
        </div>
        <div className={styles.store}>
            <Filter />
            <div className={styles.store_item_container}>
            {storeItems}
            </div>
        </div>
    </div> );
}

export default Main ;