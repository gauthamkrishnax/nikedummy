import styles from "./Card.module.scss"

function Card(props) {
    return (
        <div className={styles.container}>
            <span>
                <img src={props.img} alt={props.title} />
            </span>
            <h5>
                {props.title}
            </h5>
            <p>{props.cat}</p>
            <span>MRP : ₹ {props.price}</span>
        </div>
    );
}

export default Card;