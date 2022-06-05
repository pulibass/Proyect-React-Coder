import cubiertas from "../../img/cubiertas/rueda-pirelli.jpg"

const productos = [

    [{
        "id": "cubierta1",
        "img": { cubiertas },
        "title": "CINTURATO P1",
        "subTitle": "175/65R14 82T",
        "price": 25680,
        "producto": true,
        "cantidad": 1
    }]
]

export const getProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    })
}