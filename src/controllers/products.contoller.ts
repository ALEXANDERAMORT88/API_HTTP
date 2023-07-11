import  express from 'express';

import {
    getProducts,
    getProductById,
    postProducts,
    putProducts,
    deleteProducts
} from '../services/products.service';

const router = express.Router();

router.get('', async function (req, res) {
    try {
        const response = await getProducts();
        res.status(response.code).json({result: response.result});
    } catch (error) {
        console.log(error);
        const productsError = error as { code: number, message: string};
        res.status(productsError.code).json(productsError.message);
    }
});

router.get('/id/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await getProductById(id);
        res.status(response.code).json(response.message);
    } catch (error) {
        console.log(error);
        const productsError = error as { code: number, message: string};
        res.status(productsError.code).json(productsError.message);
    }
});

router.post('', async function (req, res) {
    try {
        const body = req.body;
        const response = await postProducts(body);
        res.status(response.code).json(response.message);
    } catch (error) {
        console.log(error);
        const productsError = error as { code: number, message: string};
        res.status(productsError.code).json(productsError.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const response = await putProducts(id, body);
        res.status(response.code).json(response.message);
    } catch (error) {
        console.log(error);
        const productsError = error as {code: number, message:string};
        res.status(productsError.code).json(productsError.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await deleteProducts(id);
        res.status(response.code).json(response.message);
    } catch (error) {
        console.log(error);
        const productsError = error as {code: number, message: string};
        res.status(productsError.code).json(productsError.message);
    }
});

export default router;
