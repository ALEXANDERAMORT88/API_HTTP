import { rejects } from "assert";
import { employeeDB } from "../../employee";
import { Employee } from "../types/employee.types";

const localEmployeeDB = employeeDB;

const readEmployees = (): Promise<Employee[]> => {
    return new Promise((resolve, reject) => {
        try {
            resolve(localEmployeeDB);
        } catch (error) {
            reject(error);
        }
    });
};

const readEmployeesById = (id: string) =>{
    return new Promise((resolve, reject) => {
        try {
            const result = localEmployeeDB.filter(item => item.id === id);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

const readEmployeesByName = (name: string) => {
    return new Promise((resolve, reject) => {
        try {
            const result = localEmployeeDB.filter(item => item.name === name);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

export {
    readEmployees,
    readEmployeesById,
    readEmployeesByName
};