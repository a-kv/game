import React from 'react';
import pic from '../assets/mic.png';


class Item extends React.Component {

    render = () => {
        let changeStyle = this.props.item === this.props.randomIndex ? 'show' : 'photo';
        return (
            <div className={'item'}>
                <img className={changeStyle} onClick={this.props.onClick} src={pic}/>
            </div>
        );
    }
}

export default Item;
