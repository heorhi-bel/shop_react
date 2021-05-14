function Good(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
        addProduct = Function.prototype,
    } = props;

    // let priceOut = price.fianlPrice;
    // console.log(priceOut + " --- " + price.finalPrice);

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
