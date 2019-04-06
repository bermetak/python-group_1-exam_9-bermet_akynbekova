import React from 'react';


const ItemImages = (props) => {
    const {images} = props;
    console.log(props.images)
    return <div className='row'>
        {images.map(image =>
            <div className='col'>
            <img className="img-fluid rounded" src={image.image} alt='Постер'/>
            </div>
        )}
    </div>


};


export default ItemImages;