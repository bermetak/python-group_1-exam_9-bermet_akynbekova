import React from 'react';
import Card from "../UI/Card/Card";


const ItemCard = props => {
    const {item} = props;
    const {name, images, id} = item;


    return <Card header={name} image={images} link={'/items/' + id} className='h-100'/>;
};


export default ItemCard;