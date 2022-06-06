import React, { useEffect } from 'react';
import "../../css/App.css";
import ItemCount from '../ItemCount/ItemCount';


export default function Item(props) {

    useEffect(() => {
        console.log("Cargo componente ItemListContainer");

    }, [])


    return (


        <div className="container-cards">
            <div className="card">
                <div className='tarjeta-contenido'>
                    <div className="imagen"><img id="img-producto" src={props.pro.img} alt="" /></div>
                    <h2 className="title-producto">{props.pro.title}<span>{props.pro.subTitle}</span></h2>
                    <div className="seccion2">
                        <p className="precio-producto">{props.pro.price}</p>
                    </div>
                    <div className='itemCountBtn'>
                        <ItemCount inicio={0} />
                    </div>
                </div>
            </div>
        </div>



    )
}

