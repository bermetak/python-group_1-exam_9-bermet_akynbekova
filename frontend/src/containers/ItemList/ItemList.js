import React, {Fragment, Component} from 'react'
import ItemCard from "../../components/ItemCard/ItemCard";
import {NavLink} from "react-router-dom";
import {loadItems} from "../../store/actions/item-list";
import {connect} from "react-redux";


class ItemList extends Component {

    componentDidMount() {
        this.props.loadItems()
    }

    render() {
        return <Fragment>
            {console.log(this.props)}
            <div className='row'>
                {this.props.items.map(item => {
                    return <div className='col-xs-12 col-sm-6 col-lg-4 mt-3'  key={item.id}>
                        <ItemCard item={item}/>
                    </div>
                })}
            </div>
        </Fragment>
    }
}


const mapStateToProps = (state) => state.itemList;
const mapDispatchToProps = (dispatch) => ({
    loadItems: () => dispatch(loadItems())
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemList);