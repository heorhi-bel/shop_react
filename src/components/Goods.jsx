import Good from "./Good";

import { useContext } from "react";
import { ShopContext } from "../context";

function Goods() {
    const { goods = [] } = useContext(ShopContext);

    if (!goods) {
        return <h3>Nothing here</h3>;
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <Good key={item.mainId} {...item} />
            ))}
        </div>
    );
}

export default Goods;
