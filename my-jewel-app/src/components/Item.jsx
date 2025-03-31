import {Outlet, Link} from "react-router-dom";
import "./css/Item.css";

function Item(props) {
    return (
        <section className="Item">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{props.material}</p>
            <p>{props.category}</p>
        </section>
    );
}

export default Item;