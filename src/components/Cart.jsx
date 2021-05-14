import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
    const { order, handleBasketShow } = useContext(ShopContext);

    const quantity = order.length;

    return (
        <div
            className="cart red lighten-1 white-text"
            onClick={handleBasketShow}
        >
            <i className="material-icons ico">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : 0}
        </div>
    );
}

export default Cart;
