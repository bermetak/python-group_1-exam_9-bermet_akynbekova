import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import ItemCategories from "../../components/ItemCategories/ItemCategories";
import ItemImages from "../../components/ItemImages/ItemImages";
import {loadItem} from "../../store/actions/item-detail";
import {connect} from "react-redux";
import defaultImage from '../../components/UI/Card/default.jpg'


class ItemDetail extends Component {

    componentDidMount() {
        this.props.loadItem(this.props.match.params.id)
    }

    // addToBasket = (id, amount) => {
    //     localStorage.setItem('basket')
    //     const basket = localStorage.getItem('basket')
    //     basket.append(id, amount)
    //     localStorage.setItem('basket', basket)
    // }

    render() {
        {console.log(this.props.item)}
        const {name, description, arrive_date, categories, id, images} = this.props.item;
        if (!this.props.item) return null
        return <div>
            <div className='text-center'>
                {(images && images.length > 0) ?
                <ItemImages images={images}/>
             : <img className="img-fluid rounded" src={defaultImage} alt='Постер'/>}

             </div>

            <h1>{name}</h1>

            { (categories && categories.length > 0) ?
            <ItemCategories categories={categories}/> : null}

            <p className="text-secondary">{arrive_date}</p>
            {description ? <p>{description}</p> : null}

            <NavLink to='/' className="btn btn-primary mr-2">Items</NavLink>
            <button className="btn btn-primary mr-2" onClick={() => this.addToBasket(id, 1)}>Добавить в корзину</button>
        </div>;
    }
}


const mapStateToProps = (state) => state.itemDetail;
const mapDispatchToProps = (dispatch) => ({
    loadItem: (id) => dispatch(loadItem(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);