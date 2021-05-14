import { useEffect } from "react";
import CartModalElement from "./CartModalElement";

function CartModal(props) {
    const {
        order,
        plus,
        minus,
        handleBasketShow = Function.prototype,
        deleteProduct,
        plusProduct,
        minusProduct,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity;
    }, 0);

    return (
        <div className="modal-okno">
            {/* <h3>Cart</h3>
            {order.length ? (
                order.map((item) => (
                    <div key={item.mainId}>
                        {item.displayName}
                        <button
                            classNameName="btn"
                            onClick={() => minus(item.mainId)}
                        >
                            -
                        </button>
                        <strong style={{ fontSize: 1.5 + "rem" }}>
                            {" "}
                            {item.quantity}{" "}
                        </strong>
                        <button
                            classNameName="btn"
                            onClick={() => plus(item.mainId)}
                        >
                            +
                        </button>
                    </div>
                ))
            ) : (
                <h3>Nothing</h3>
            )} */}

            <ul className="collection cart-modal">
                <i
                    className="material-icons ico-close right"
                    onClick={handleBasketShow}
                >
                    close
                </i>
                <li className="collection-item active">Cart</li>
                {order.length ? (
                    order.map((item) => (
                        <CartModalElement
                            key={item.mainId}
                            {...item}
                            deleteProduct={deleteProduct}
                            plusProduct={plusProduct}
                            minusProduct={minusProduct}
                        />
                    ))
                ) : (
                    <li className="collection-item ">Cart is empty</li>
                )}
                <li className="collection-item">Total: {totalPrice}$</li>
            </ul>
        </div>
    );
}

export default CartModal;
