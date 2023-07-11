// import express from 'express';

// const app = express();
// const PORT = 3500;

// app.use(express.json());

// interface Factory {
//     id: string;
//     products: string;
//     name: string;
//     address: string;
//     email: string;
//     cel: number;
// };

// let factory: Factory[] = [
//     {
//         id: "12345678",
//         products: "Tv 35",
//         name: "Your best buy",
//         address: "Calle 3 con # 3 ",
//         email: "Yourbestbuy3@buy.com",
//         cel: 312098765,
//     }
// ];

// app.get('/factory', (req, res) =>{
//     res.json(factory)
// });

// app.get('/factory/:id', function (req, res) {
//     const id = req.params.id;
//     const send = factory.filter(item => item.id == id);
//     res.json(send);
// });

// app.post('/factory', function (req, res) {
//     const body = req.body;
//     factory.push(body);
//     res.json("Nuevo producto creado");
// });

// app.put('/factory/:id', function (req, res) {
//     const id = req.params.id;
//     const body = req.body;
//     const factoryIndex = factory.findIndex(item => item.id === id);
//     factory[factoryIndex] = body;
//     res.json("Binvenidos a nuestra Fabrica");
// });

// app.delete('/factory/:id', function (req, res) {
//     const id = req.params.id;
//     const send = factory.filter(item => item.id === id);
//     factory = send;
//     res.json("Producto eliminado");
// });

//  interface Supplier {
//     id: number;
//     nameS: string;
//     email: string;
//     cel: number;
// };

// let supplier: Supplier [] = [
//     {
//         id: 9876543,
//         nameS: "Viviana",
//         email: "vivi123@buy.com",
//         cel: 34567889,
//     }
// ];

// app.get('/supplier', function (req, res) {
//     res.json(supplier);
// });

// app.get('/supplier/:id',function (req, res) {
//     const id = parseInt(req.params.id);
//     const send = supplier.filter(item => item.id === id);
//     res.json(send);
// });

// app.post('/supplier', function (req, res) {
//     const body = req.body;
//     supplier.push(body);
//     res.json(`Bienvenid@ eres un nuevo comprador ${body.nameS}`);
// });

// app.delete('/supplier/:id', function (req, res) {
//     const id = parseInt(req.params.id);
//     const send = supplier.filter(item => item.id !== id);
//     supplier = send;
//     res.json('Vendodore eliminado');
// })


// app.listen(PORT, function () {
//     console.log("La aplicacion estacorriendo en el https//localhost:" + PORT);
// });