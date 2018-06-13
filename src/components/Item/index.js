import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addItem} from "../../actions/actions";

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...this.props,
            quantity: 1
        }
    }
    toggleSum(e) {
        this.setState ({
            quantity: Number(e.target.value)
        })
    }
    render () {
        return (
            <tr>
                <td>{this.props.num}</td>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>
                    <input type="number" defaultValue="1" min="1" onChange={this.toggleSum.bind(this)}/>
                </td>
                <td><button className="btn btn-success" onClick={() => this.props.addItem(this.props.name, this.props.price, this.state.quantity)}>Add +</button></td>
            </tr>
        )
    }
}
function mapStateToProps(state) {
    return {
        state: state
    }
}
function matchDispatchToProps( dispatch )
{
    return {
        addItem: (name, price, count) => dispatch( addItem( name, price, count ) )
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(Item);
