import Good from "./Good";

function Goods(props) {
    const { goods = [], addProduct = Function.prototype } = props;

    if (!goods) {
        return <h3>Nothing here</h3>;
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <Good key={item.mainId} {...item} addProduct={addProduct} />
            ))}
        </div>
    );
}

export default Goods;
