import React, { useState } from "react";
import "../../css/App.css";

export default function Itemcount() {//COMPONENTE SIEMPRE EN MAYUSCULA

    // es una funcion que devuelve un array, con dos elementos, el primero la varibale
    //y el segundo elemento una funcion para cambiar esa variable
    const [counter, setCounter] = useState(0);

    function incrementCount() {
        setCounter(counter + 1);

    }
    function decrementCount() {
        if (counter <= 0) return;
        setCounter(counter - 1);

    }

    function onAdd() {
        alert("producto agregado")
    }

    function reset() {
        setCounter(0)
    }


    return (
        <div className='containerItemCount'>
            <h1>Item Count</h1>

            <div className='countItem'>
                <button onClick={() => decrementCount()} className="button">-</button>
                <p className='count'>
                    {counter}
                </p>
                <button onClick={() => incrementCount()} className="button">+</button>
            </div>
            <div className='buttonsAddDelet'>
                <button onClick={() => onAdd()}>
                    Agregar al carro
                </button>
                <button onClick={() => reset()}>
                    Reset
                </button>
            </div>

        </div>
    )
}




