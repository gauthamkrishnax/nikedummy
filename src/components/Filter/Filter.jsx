import styles from "./Filter.module.scss"

function Filter() {
    return ( <div className={styles.container}>
        <ul>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's clothing</li>
            <li>Women's clothing</li>
        </ul>
    </div> );
}

export default Filter;