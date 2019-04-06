import React from 'react';
import {NavLink} from 'react-router-dom';
import defaultImage from './default.jpg'


const Card = props => {
    return <div className={"card mt-3 text-center text-sm-left " + (props.className ? props.className : "")}>
        {console.log(props)}
        {props.images[0] ?
        <img className="card-img-top" src={props.images[0].image} alt='Фотография'/>
        :
        <img className="card-img-top" src={defaultImage} alt='Фотография'/>
        }
        <NavLink to={props.link}>
            <div className="card-body">
                <h5 className="card-title">{props.header}</h5>
                <p className="card-text">{props.price}</p>

            </div>
        </NavLink>
    </div>
};


export default Card;