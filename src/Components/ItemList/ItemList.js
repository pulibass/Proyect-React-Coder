import React from 'react';
import Item from "../Item/Item.js";
import "../../css/App.css"

const ItemList = ({ productos }) => {

    return (
        <ul style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }} className="listado">
            {productos.map(prod => <div className='containerCards' key={prod.id} id={prod.id}><Item pro={prod} /></div>)}
        </ul>
    )
}
//key = { prod.id } {...prod } 

export default ItemList