import { Employee } from "../types/employee.types";

import {
    readEmployees,
    readEmployeesById,
    readEmployeesByName
} from '../data/employee.data';
import { rejects } from "assert";
import { response } from "express";
import { resolve } from "path";
import { error } from "console";


const getEmployees = (): Promise<{ code: number, result: string | Employee[]}> => {
    return new Promise(( resolve, reject) => {
        readEmployees()
        .then((response: Employee[]) => {
            const localEmployeeDB = response;
            resolve({ code: 200, result: localEmployeeDB});
        });
    });
};

const getEmployeesById = (id: string): Promise<{
    code: number, message: string | Employee}> => {
        return new Promise((resolve, reject) => {
            readEmployeesById(id)
            .then(response => {
                if ((response as Employee[]).length === 0) {
                    resolve({ code: 404, message: "Empledo no Existe"});
                } else {
                    resolve({ code: 200, message: response as Employee});
                }
            })
            .catch( error => {
                reject( {code: 500, message: "Error inesperado"});
            });
        });
    };

const getEmployeesByName = (name: string): Promise<{code: number, message: string | Employee}> => {
    return new Promise((resolve, reject) => {
        readEmployeesByName(name)
        .then((response) =>{
            if ((response as Employee[]).length === 0) {
                resolve({  code: 404, message: "Empleado no existe"});
            } else {
                resolve({ code: 200, message: response as Employee});
            }
        })
        .catch(error => {
            reject({ code: 500, message: "Error inesérado"});
        });
    });
};


export {
    getEmployees,
    getEmployeesById,
    getEmployeesByName
};