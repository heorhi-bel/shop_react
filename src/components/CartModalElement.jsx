import { useState } from "react";

function CartModalElement(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        deleteProduct = Function.prototype,
    } = props;
    const [] = useState(true);

    return (
        <li className="collection-item">
            {displayName} x{quantity} = {price.finalPrice}
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
