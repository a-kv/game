import React from 'react';

import Item from "./Item";

class Items extends React.Component {

    render = () => {
        let newItems = this.props.items.map(item => <Item
            key={item.id}
            item={item}
            onClick={this.props.onClick}
            randomIndex={this.props.randomIndex}
        />)
        return (
            <div className="container">
                {newItems}
            </div>
        )
    }
}

export default Items;
