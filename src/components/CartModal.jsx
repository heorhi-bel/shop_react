import { useState, useContext } from "react";

import { ShopContext } from "../context";

import CartModalElement from "./CartModalElement";
import Shop from "./Shop";

function CartModal(props) {
    const { order = [], handleBasketShow = Function.prototype } = useContext(
        ShopContext
    );

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity;
    }, 0);

    return (
        <div className="modal-okno">
            <ul className="collection cart-modal">
                <i
                    className="material-icons ico-close right"
                    onClick={handleBasketShow}
                >
                    close
                </i>
                <li className="collection-item active deep-orange lighten-3">
                    Cart
                </li>
                {order.length ? (
                    order.map((item) => (
                        <CartModalElement key={item.mainId} {...item} />
                    ))
                ) : (
                    <li className="collection-item ">Cart is empty</li>
                )}
                <li className="collection-item">
                    Total: {totalPrice}$
                    <button className="btn btn-small right red lighten-1">
                        buy
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default CartModal;
