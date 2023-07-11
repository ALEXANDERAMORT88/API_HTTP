import { productsDB } from "../../produscts";
import { Products } from "../types/products.types";

let locatProductsDB = productsDB;

const readProducts = (): Promise<Products[]> => {
    return new Promise((resolve, reject) => {
        try {
            resolve(locatProductsDB);
        } catch (error) {
            reject(error);
        }
    });
};

const readProductsById = (id: string) => {
    return new Promise((resolve,reject) => {
        try {
            const result = locatProductsDB.filter(item => item.id === id);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

const createProducts = ( body: Products) => {
    return new Promise((resolve, reject) => {
        try {
            locatProductsDB.push(body);
            resolve("Se ha egregado un Producto nuevo");
        } catch (error) {
            reject(error);
        }
    });
};

const updateProducts = (id: string, body: Products) => {
    return new Promise((resolve, reject) => {
        try {
            const produsctsIndex = locatProductsDB.findIndex(item => item.id === id);
            if (produsctsIndex === -1) {
                reject(404);
            } else {
                locatProductsDB[produsctsIndex] = body;
                resolve(200);
            }
        } catch (error) {
            reject(error);
        }
    });
};

const deleteProductsById = (id: string) =>{
    return new Promise((resolve, reject) => {
        try {
            const result = locatProductsDB.filter(item => item.id === id);
            if (result.length === locatProductsDB.length) {
                reject(404);
            } else {
                locatProductsDB = result;
                resolve(200);
            }
        } catch (error) {
            reject(error);
        }
    });
};

export {
    readProducts,
    readProductsById,
    createProducts,
    updateProducts,
    deleteProductsById
};