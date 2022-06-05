import React from 'react';
import Item from "../Item/Item.js";
import "../../css/App.css"

const ItemList = ({ productos }) => {
    return (
        <ul style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }} className="listado">
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}

export default ItemList