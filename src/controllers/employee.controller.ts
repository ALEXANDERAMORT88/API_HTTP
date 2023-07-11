import express from 'express';

import {
    getEmployees,
    getEmployeesById,
    getEmployeesByName
} from '../services/employee.service';

const router = express.Router();

router.get('',async (req, res) => {
    try {
        const response = await getEmployees();
        res.status(response.code).json(response.result);
    } catch (error) {
        console.log(error);
        const employeeError = error as {code: number, message: string};
        res.status(employeeError.code).json(employeeError.message);
    }
});

router.get('/id/:id',async (req, res) => {
    try {
        const id = req.params.id;
        const response = await getEmployeesById(id);
        res.status(response.code).json(response.message);
    } catch (error) {
        console.log(error);
        const employeeError = error as {code: number, message:string};
        res.status( employeeError.code).json(employeeError.message);
    }
});

router.get('/name/:name',async (req, res) => {
    try {
        const name = req.params.name;
        const response = await getEmployeesByName(name);
        res.status(response.code).json(response.message);
    } catch (error) {
        console.log(error);
        const employeeError = error as { code: number, message: string};
        res.status(employeeError.code).json(employeeError.message);
    }
});





export default router;