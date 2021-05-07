function Good(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
    } = props;

    return (
        <div className="card large hoverable">
            <div className="card-image">
                <img src={displayAssets[0].full_background} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button className="btn">Get</button>
                <span className="right" style={{ fontSize: "1.5rem" }}>
                    {price.finalPrice} RUB
                </span>
            </div>
        </div>
    );
}

export default Good;
