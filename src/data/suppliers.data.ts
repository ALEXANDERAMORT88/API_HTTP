import { suppliersDb } from "../../supplier";
import { Suppliers } from "../types/suppliers.types";

let localSuppliersDb = suppliersDb;

const readSuplliers = (): Promise<Suppliers[]> => {
    return new Promise((resolve, reject) => {
        try {
            resolve(localSuppliersDb);
        } catch (error) {
            reject(error);
        }
    });
};

const readSuppliersById = (id: string) => {
    return new Promise((resolve, reject) => {
        try {
            const result = localSuppliersDb.filter(item => item.id === id);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
 };

const readSuppliersByName = (name: string) => {
    return new Promise ((resolve, reject) =>{
        try {
            const result = localSuppliersDb.filter(item => item.name === name);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

const createSuppliers = (body: Suppliers) => {
    return new Promise((resolve, reject) => {
        try {
            localSuppliersDb.push(body);
            resolve("Se ha agregado un provedor");
        } catch (error) {
            reject(error);
        }
    });
};

const updateSuppliers = ( id: string, body: Suppliers) => {
    return new Promise ((resolve, reject) => {
        try {
            const supplierIndex = localSuppliersDb.findIndex(item => item.id === id);
            if (supplierIndex === -1) {
                reject(404);
            } else {
                localSuppliersDb[supplierIndex] = body;
                resolve(200);
            }
        } catch (error) {
            reject(error);
        }
    });
};

const deleteSuppliersById = (id: string) => {
    return new Promise((resolve, reject) => {
        try {
            const result = localSuppliersDb.filter(item => item.id !== id);

        if (result.length === localSuppliersDb.length) {
            reject(404);
        } else {
            localSuppliersDb = result;
            resolve(200);
        } 
        }catch (error) {
            reject(error);
        }
    });
};

export {
    readSuplliers,
    readSuppliersById,
    readSuppliersByName,
    createSuppliers,
    updateSuppliers,
    deleteSuppliersById
};