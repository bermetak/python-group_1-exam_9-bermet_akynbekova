import React from 'react';
import Card from "../UI/Card/Card";


const ItemCard = props => {
    const {item} = props;
    const {name, images, id, categories, arrive_date, description, price} = item;


    return <Card
        header={name}
        images={images}
        description={description}
        categories={categories}
        arrive_date={arrive_date}
        price={price}
        link={'/items/' + id}
        className='h-100'
    />;
};


export default ItemCard;