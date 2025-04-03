import {Outlet, Link} from "react-router-dom";
import "./css/Item.css";
import {useState} from "react";

function Item(props) {
    const [pruned, pruneItem] = useState(false); //we are going to keep track of this variable whether its true or false. The variable is false at the moment.

    const doItemJob = () => {
        pruneItem(!pruned); //!pruned "not pruned" - you can toggle it. But if you just want the prune to stay green do (true) instead of (!pruned).
    };

    return (
        <section className="Item">
            <img src={props.image} alt="" />
            <h3 className={pruned?"done":""}>{props.name}</h3>
            <p>{props.price}</p>
            <p>{props.material}</p>
            <p>{props.category}</p>
            <button onClick ={doItemJob}>Add to Cart</button>
        </section>
    );
}

export default Item;