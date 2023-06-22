import { useState, useEffect } from "react";

// import data from "../../data/products";

import Card from "../Utils/Card/Card";
import Filter from "../Filter/Filter";

import styles from "./Main.module.scss"

const productURL = "https://fakestoreapi.com/products"

function Main () {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    function fetchBasedOnCategory(e){

        
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/category/${e.target.attributes.category.value}`)
        .then((response) => response.json())
        .then((data) => {
           setData(data);
           setLoading(false)
        })
        .catch((err) => {
           console.log(err.message);
        });
    }

    useEffect(() => {
        fetch(productURL)
        .then((response) => response.json())
        .then((data) => {
           setData(data);
           setLoading(false)
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
            <h1>Summer Shop(20)</h1>
        </div>
        <div className={styles.store}>
            <Filter fetchBasedOnCategory={fetchBasedOnCategory}/>
            <div className={styles.store_item_container}>
            {loading && <div className={styles.loading_modal} />}
            {storeItems}
            </div>
        </div>
    </div> );
}

export default Main ;