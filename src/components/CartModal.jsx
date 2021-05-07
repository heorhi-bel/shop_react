import { useEffect } from "react";

function CartModal(props) {
    const { order } = props;

    useEffect(
        function updateCart() {
            console.log("update");
        },
        [order]
    );

    return (
        <div className="modal-okno">
            <h3>Cart</h3>
            {order ? (
                order.map((item) => {
                    return <div>{item.displayName}</div>;
                })
            ) : (
                <h3>Nothing</h3>
            )}
        </div>
    );
}

export default CartModal;
