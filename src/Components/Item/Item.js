import React, { useEffect } from 'react';
import "../../css/App.css";
import ItemCount from '../ItemCount/ItemCount';


export default function Item(props) {

    useEffect(() => {
        console.log("Cargo componente ItemListContainer");

    }, [])


    return (
        <div style={{ width: '16rem' }}>
            <div>
                <img src={props.pro.img} alt="nombre" />
                <h2>{props.pro.id}</h2>
                <h4>{props.pro.title}</h4>
                <h4>{props.pro.subTitle}</h4>
                <p>
                    Precio: ${props.pro.price}
                </p>
                <ItemCount inicio={0} />
            </div>

        </div>
    )
}

