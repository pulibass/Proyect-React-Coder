import cubiertas from "../../img/cubiertas/rueda-pirelli.jpg"


const productos = [

    {
        "id": "cubierta1",
        "img": cubiertas,
        "title": "CINTURATO P1",
        "subTitle": "175/65R14 82T",
        "price": 25680,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "cubierta2",
        "img": cubiertas,
        "title": "FORMULA ENERGY",
        "subTitle": "175/65R14 82T",
        "price": 13890,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "cubierta3",
        "img": cubiertas,
        "title": "P400 EVO",
        "subTitle": "175/65R14 82T",
        "price": 18560,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "cubierta4",
        "img": cubiertas,
        "title": "CHRONO",
        "subTitle": "175/65R14 90T",
        "price": 19530,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "cubierta5",
        "img": cubiertas,
        "title": "CINTURATO P1",
        "subTitle": "175/70R14 84T",
        "price": 24570,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "cubierta6",
        "img": cubiertas,
        "title": "XL SCORPION ATR",
        "subTitle": "175/70R14 88H",
        "price": 32920,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "amortiguador1",
        "img": "../../img/amortiguadores/amortiguador-1.jpg",
        "title": "AMORTIGUADORES DELANTEROS",
        "subTitle": "CHEVROLET CORSA",
        "price": 18560,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "amortiguador2",
        "img": "../../img/amortiguadores/amortiguador-2.jpg",
        "title": "AMORTIGUADORES DELANTEROS",
        "subTitle": "FIAT SIENA, PALIO",
        "price": 15650,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "amortiguador3",
        "img": "../../img/amortiguadores/amortiguador-3.jpg",
        "title": "AMORTIGUADORES DELANTEROS",
        "subTitle": "FORD FIESTA",
        "price": 20210,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "amortiguador4",
        "img": "../../img/amortiguadores/amortiguador-4.jpg",
        "title": "AMORTIGUADORES DELANTEROS",
        "subTitle": "RENAULT CLIO",
        "price": 19860,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "amortiguador5",
        "img": "../../img/amortiguadores/amortiguador-5.jpeg",
        "title": "AMORTIGUADORES DELANTEROS",
        "subTitle": "VOLSKWAGEN GOL",
        "price": 19520,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "amortiguador6",
        "img": "../../img/amortiguadores/amortiguador-6.jpeg",
        "title": "AMORTIGUADORES DELANTEROS",
        "subTitle": "PEUGEOT PARTNER",
        "price": 20185,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "freno1",
        "img": "../../img/frenos/freno-1.jpeg",
        "title": "PASTILLAS DE FRENOS",
        "subTitle": "CHEVROLET AGILE, CELTA Y PRISMA, FRASLE",
        "price": 22680,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "freno2",
        "img": "../../img/frenos/freno-2.jpeg",
        "title": "PASTILLAS DE FRENOS",
        "subTitle": "FIAT ADVENTURE Y PALIO, FRASLE",
        "price": 19890,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "freno3",
        "img": "../../img/frenos/freno-3.jpg",
        "title": "PASTILLAS DE FRENOS",
        "subTitle": "VOLSKWAGEN BORA, FOX Y POLO, FRASLE",
        "price": 22350,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "freno4",
        "img": "../../img/frenos/freno-4.jpeg",
        "title": "PASTILLAS DE FRENOS",
        "subTitle": "FORD ECO SPORT, FRASLE",
        "price": 23190,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "freno5",
        "img": "../../img/frenos/freno-5.jpeg",
        "title": "PASTILLAS DE FRENOS",
        "subTitle": "FIAT TORO Y CHRONO, FRASLE",
        "price": 21250,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "freno6",
        "img": "../../img/frenos/freno-6.jpeg",
        "title": "PASTILLAS DE FRENOS",
        "subTitle": "CHEVROLET SONIC, CRUZE, FRASLE",
        "price": 23850,
        "producto": true,
        "cantidad": 1
    }, {
        "id": "oferta1",
        "img": "../../img/ofertas/oferta-1.jpeg",
        "title": "SERVICE FOCUS 2.0 o 1.6",
        "subTitle": "CAMBIO DE ACEITE 5W30 Y FILTROS",
        "price": 8700,
        "producto": false,
        "cantidad": 1
    }, {
        "id": "oferta2",
        "img": "../../img/ofertas/oferta-2.jpg",
        "title": "SERVICE AMAROK 2.0",
        "subTitle": "CAMBIO DE ACEITE 5W40 Y FILTROS",
        "price": 7560,
        "producto": false,
        "cantidad": 1
    }, {
        "id": "oferta3",
        "img": "../../img/ofertas/oferta-3.jpeg",
        "title": "SERVICE ONIX 1.6",
        "subTitle": "CAMBIO DE ACEITE 5W30 Y FILTROS",
        "price": 8550,
        "producto": false,
        "cantidad": 1
    }, {
        "id": "oferta4",
        "img": "../../img/ofertas/oferta-4.jpeg",
        "title": "AMORTIGUADORES TRASEROS",
        "subTitle": "FIAT PALIO, SIENA",
        "price": 9580,
        "producto": false,
        "cantidad": 1
    }, {
        "id": "oferta5",
        "img": "../../img/ofertas/oferta-5.jpg",
        "title": "AMORTIGUADORES TRASEROS",
        "subTitle": "CHEVROLET CORSA",
        "price": 11350,
        "producto": false,
        "cantidad": 1
    }, {
        "id": "oferta6",
        "img": "../../img/ofertas/oferta-6.jpg",
        "title": "AMORTIGUADORES TRASEROS",
        "subTitle": "RENAULT CLIO",
        "price": 9280,
        "producto": false,
        "cantidad": 1
    }, {
        "id": "oferta7",
        "img": "../../img/ofertas/oferta-7.jpg",
        "title": "BATERIA BOSCH S4",
        "subTitle": "PARA VEHICULOS PARTICULARES",
        "price": 16200,
        "producto": false,
        "cantidad": 1
    }, {
        "id": "oferta8",
        "img": "../../img/ofertas/oferta-8.jpg",
        "title": "BATERIA MATEO 12X55",
        "subTitle": "EXCLUSIVO PARA TAXIS, REMISES",
        "price": 11520,
        "producto": false,
        "cantidad": 1
    }, {
        "id": "oferta9",
        "img": "../../img/ofertas/oferta-9.jpg",
        "title": "BATERIA MOURA 12X40",
        "subTitle": "PARA CAMIONETAS 4X4 Y CAMIONES",
        "price": 23580,
        "producto": false,
        "cantidad": 1
    }
]

export const getProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    })
}