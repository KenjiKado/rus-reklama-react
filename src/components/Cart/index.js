import React, {Component} from 'react';
import { connect } from 'react-redux';
import {removeItem, deleteAll} from '../../actions/actions.js';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartList: this.props.cartList,
            total: '0',
            elementsCount: 0
        }
    }
    handleClick(){
        document.getElementById('dropdown').classList.toggle('show')
    }
    render (){
        return(
            <div className="cart">
                <div className="dropdown">
                    <p style={{display: 'inline'}}>You have: {this.props.count} items in your cart</p>
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.handleClick}>

                    </button>
                    <button className="btn btn-link" onClick={() => this.props.deleteAll()}>Delete All</button>
                    <div id="dropdown" className="dropdown-menu">
                        <table className="table">
                            <tbody>
                                {this.props.cartList.map((item, id)=> {
                                    return(
                                        <tr key={id}>
                                            <td>{item.name}</td>
                                            <td>{item.count}</td>
                                            <td>{item.sum}</td>
                                            <td>
                                                <button type="button" className="close" aria-label="Close" onClick={() => this.props.removeItem(id)}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colSpan={3}>Total</td>
                                <td>{String(this.props.total)}</td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps( cart )
{
    return {
        cartList: cart.items,
        total: cart.total,
        count: cart.count
    };
}
function matchDispatchToProps( dispatch )
{
    return {
        removeItem: (id) => dispatch( removeItem( id ) ),
        deleteAll: () => dispatch(deleteAll())
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(Cart);