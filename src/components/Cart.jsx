import CartModal from "./CartModal";

function Cart(props) {
    const { quantity = 0 } = props;

    const handleModal = () => {};

    return (
        <div
            className="cart red lighten-1 white-text"
            onClick={() => console.log("cart")}
        >
            <i className="material-icons ico">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : 0}
            <CartModal />
        </div>
    );
}

export default Cart;
