import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { ShopContext } from "../context";

import Goods from "./Goods";
import Preloader from "./Preloader";
import Cart from "./Cart";
import CartModal from "./CartModal";
import Alert from "./Alert";

function Shop() {
    const { loading, order, setGoods, isBasketShow, alertName } = useContext(
        ShopContext
    );

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.shop);
            });
    }, []);

    return (
        <main className="container content">
            {isBasketShow && <CartModal />}

            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <Goods />}
            {alertName && <Alert />}
        </main>
    );
}

export default Shop;
