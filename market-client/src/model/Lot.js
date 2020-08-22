


class Lot extends React.Component{

    constructor(id, sellerId, buyerId, type) {
        this.id = id;
        this.sellerId = sellerId;
        this.buyerId = buyerId;
        this.type = type;
    }

    render() {
        return (
            <div>
                {this.id} {this.sellerId}
            </div>
        )
    }

}