import { useState, useEffect } from "react";
import Goods from "./Goods";
import Preloader from "./Preloader";
import { API_KEY, API_URL } from "../config";
import Cart from "./Cart";
import CartModal from "./CartModal";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);

    const addProduct = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const currentOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(currentOrder);
        }
    };

    const deleteProduct = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        );

        if (itemIndex >= 0) {
            let array = [...order].slice(0, itemIndex);
            let arraySec = [...order].slice(itemIndex + 1);

            setOrder([...array, ...arraySec]);
        }
    };

    const handleBasketShow = () => {
        setIsBasketShow(!isBasketShow);
    };

    const plusProduct = (id) => {
        console.log(id);
        let foundObj = order.find((x) => x.mainId === id);
        console.log(foundObj);
        foundObj.quantity = foundObj.quantity + 1;
    };
    const minusProduct = (id) => {
        console.log(id);
        let foundObj = order.find((x) => x.mainId === id);
        console.log(foundObj);
        foundObj.quantity = foundObj.quantity - 1;
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((json) => {
                json.shop && setGoods(json.shop);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            {isBasketShow && (
                <CartModal
                    order={order}
                    handleBasketShow={handleBasketShow}
                    deleteProduct={deleteProduct}
                />
            )}

            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <Goods goods={goods} addProduct={addProduct} />
            )}
        </main>
    );
}

export default Shop;
