import React from 'react';
import { Link } from 'react-router-dom';
//import { Default } from '../../../default.png';
import { Item } from './styled';

export default (props) => {
    let price = '';

    if(props.data.priceNegotiable) {
        price = 'Preço Negociável';
    } else {
        price = `R$ ${props.data.price}`;
    }

    const imgDefault = 'http://alunos.b7web.com.br:501/media/default.jpg';

    return (
        <Item className="aditem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemImage">
                    <img src={(props.data.image == imgDefault)
                        ? require('../../../images/default.png').default : props.data.image} 
                    alt=""></img>
                </div>
                <div className="itemName">{props.data.title}</div>
                <div class="itemPrice">{price}</div>
            </Link>
        </Item>
    );

}
