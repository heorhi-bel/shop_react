import { useState } from "react";

function CartModalElement(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        deleteProduct = Function.prototype,
        plusProduct = Function.prototype,
        minusProduct = Function.prototype,
    } = props;
    const [] = useState(true);

    return (
        <li className="collection-item">
            {displayName}   
            <button
                className="btn-small red lighten-2"
                onClick={() => plusProduct(mainId)}
            >
                +
            </button>{" "}
            x{quantity}{" "}
            <button
                className="btn-small red lighten-2"
                onClick={() => minusProduct(mainId)}
            >
                -
            </button>{" "}
            = {price.finalPrice}
            <span className="secodary-content">
                <i
                    className="material-icons cart-delete right"
                    onClick={() => deleteProduct(mainId)}
                >
                    close
                </i>
            </span>
        </li>
    );
}

export default CartModalElement;
