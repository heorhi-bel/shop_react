import { useContext } from "react";
import { ShopContext } from "../context";

function Good(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
    } = props;

    const { addProduct } = useContext(ShopContext);

    return (
        <div className="card large hoverable">
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() => addProduct({ mainId, displayName, price })}
                >
                    Get
                </button>
                <span className="right" style={{ fontSize: "1.5rem" }}>
                    {price.finalPrice}$
                </span>
            </div>
        </div>
    );
}

export default Good;
