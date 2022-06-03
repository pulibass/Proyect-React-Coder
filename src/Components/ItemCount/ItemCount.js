import React from 'react';
import "../../css/App.css";


export default class ItemCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }
    decrementCount() {

        if (this.state.count <= 0) return;
        this.setState({
            count: this.state.count - 1


        });
    }

    addToCart() {
        alert("agregado al carro")
    }

    render() {
        return (
            <div className='containerItemCount'>
                <h1>Item Count</h1>

                <div className='countItem'>

                    <button onClick={() => this.decrementCount()}>
                        -
                    </button>
                    <p className='count'>
                        {this.state.count}
                    </p>
                    <button onClick={() => this.incrementCount()}>
                        +
                    </button>

                </div>
                <div className='addToCart'>
                    <button onClick={() => this.addToCart()}>
                        Agregar al carro
                    </button>
                </div>

            </div>

        );
    }
}
