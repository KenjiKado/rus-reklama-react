import React, {Component} from 'react';
import Item from '../Item';

const items = [{
    id: 1,
    name: 'iPod touch',
    price: 24490
}, {
    id: 2,
    name: 'iPhone 8',
    price: 56990
}, {
    id: 3,
    name: 'iPhone X',
    price: 79990
}, {
    id: 4,
    name: 'MacBook Pro',
    price: 94990
}, {
    id: 5,
    name: 'iMac Pro',
    price: 379990
}]
class ItemsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: items
        }
    }
    format(price){
        return String(price).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
    }
    render(){
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Count</th>
                        <th scope="col">Add to cart</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map((item)=> {
                        return <Item name={item.name} price={this.format(item.price)} num={item.id} key={item.id}/>
                    })}
                </tbody>
            </table>
        )
    }
}
export default ItemsList;