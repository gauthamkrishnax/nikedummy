import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

import Card from "../Utils/Card/Card";
import Filter from "../Filter/Filter";
import styles from "./Main.module.scss"

let productURL = "https://fakestoreapi.com/products"


const initialState = {
    data: [],
    loading: true,
    error: null
}

const getResponse = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }

        case 'SUCCESS':
            return {
                data: action.data,
                loading: false,
                error: null
            }

        case "ERROR":
            console.error(action.error)
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state
    }
}


function Main() {
    let { category, price } = useParams();

    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, loading, error } = state;

    function fetchBasedOnCategory(e) {
        dispatch({ type: "LOADING" })
        getResponse(productURL).then(data => {
            dispatch({ type: "SUCCESS", data: data })
        }).catch(error => dispatch({ type: "ERROR", error: error }))
    }

    function fetchBasedOnPrice(ranges) {
        if (ranges.length === 0) {
            fetchBasedOnCategory("all")
        } else {
            dispatch({ type: "LOADING" })
            const minMaxPrices = []
            ranges.forEach((range) => {
                const rangeSplited = range.split("-")
                minMaxPrices.push({
                    min: parseInt(rangeSplited[0]),
                    max: parseInt(rangeSplited[1])
                })
            })
            const tempData = []
            let products = []
            getResponse(productURL).then(data => {
                products = data;
                minMaxPrices.forEach((price) => {
                    products.forEach(item => {
                        if (item.price >= price.min && item.price <= price.max) tempData.push(item)
                    })
                })
                dispatch({ type: "SUCCESS", data: tempData })
            }).catch(error => dispatch({ type: "ERROR", error: error }))
        }
    }

    useEffect(() => {

        if (!category || category === "all") {
            productURL = "https://fakestoreapi.com/products"
        } else {
            productURL = `https://fakestoreapi.com/products/category/${category}`
        }

        if (price) {
            fetchBasedOnPrice(price.split(","))
        }
        else if (category) {
            fetchBasedOnCategory(category)
        } else {
            fetchBasedOnCategory("all")
        }


    }, [category, price]);

    const storeItems = data.map(item =>
        <Card key={item.id} title={item.title} img={item.image} cat={item.category} price={item.price} />)
    return (
        error ? <h1>Error</h1> :
            <div className={`main ${styles.main}`}>
                <div>
                    <h1>Summer Shop({data.length})</h1>
                </div>
                <div className={styles.store}>
                    <Filter fetchBasedOnCategory={fetchBasedOnCategory} fetchBasedOnPrice={fetchBasedOnPrice} />
                    <div className={styles.store_item_container}>
                        {loading && <div className={styles.loading_modal} />}
                        {storeItems}
                    </div>
                </div>
            </div>);
}

export default Main;