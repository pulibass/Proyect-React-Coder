import React from 'react';
import "../../css/App.css";
import ItemCount from '../ItemCount/ItemCount';
import BaseData from '../BaseData/BaseData';

const Item = ({
    id, img,
    title,
    subTitle,
    price,
}) => {
    return (
        <div style={{ width: '16rem' }}>
            <div variant="top" src={img} alt="nombre">
                <div>
                    <h2>{id}</h2>
                    <h4>{title}</h4>
                    <h4>{subTitle}</h4>
                    <p>
                        Precio: ${price}
                    </p>
                    <ItemCount inicio={0} />
                </div>
            </div>

        </div>
    )
}

export default Item