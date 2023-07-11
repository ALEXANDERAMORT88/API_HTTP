import express from 'express';

import {
    deleteSupplier,
    getSuppliers,
    getSuppliersById,
    getSuppliersByName,
    postSuppliers,
    putSuppliers
} from '../services/suppliers.service';

const router = express.Router();

router.get('', async (req, res) => {
    try {
        const response = await getSuppliers();
        res.status(response.code).json({ result: response.result});
    } catch (error) {
        console.log(error);
        const supplierError = error as { code: number, message:string};
        res.status(supplierError.code).json(supplierError.message);
    }
});

router.get('/id/:id', async (req, res) =>{
    try {
        const id = req.params.id;
        const response = await getSuppliersById(id);
        res.status(response.code).json(response.message);
    } catch (error) {
        console.log(error);
        const supplierError = error as {code:number, message: string};
        res.status(supplierError.code).json(supplierError.message);
    }
});

router.get('/name/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const response = await getSuppliersByName(name);
        res.status(response.code).json(response.message);
    } catch (error) {
        console.log(error);
        const supplierError = error as {code: number, message: string};
        res.status(supplierError.code).json(supplierError.message);
    }
});

router.post('/newSuppliers', async function (req, res) {
    try {
        const body = req.body;
        const response = await postSuppliers(body);
        res.status(response.code).json(response.messge);
} catch (error) {
        console.log(error);
        const supplierError = error as { code: number, messsage: string};
        res.status(supplierError.code).json(supplierError.messsage);
    }
});
console.log(router.post);


router.put('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        const response = await putSuppliers(id, body);
        res.status(response.code).json(response.message);
    } catch (error) {
        console.log(error);
        const supplierError = error as {code: number, message: string};
        res.status(supplierError.code).json(supplierError.message);
    }
});

router.delete('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const response = await deleteSupplier(id);
        res.status(response.code).json(response.message);

    } catch (error) {
        console.log(error);
        const supplierError = error as {code: number, message: string};
        res.status(supplierError.code).json(supplierError.message);
    }
});

export default router;