import Good from "./Good";

function Goods(props) {
    const { goods = [] } = props;

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
