import { Products } from "../types/products.types";

import {
    readProducts,
    readProductsById,
    createProducts,
    updateProducts,
    deleteProductsById
} from '../data/products.data';


const getProducts = (): Promise<{ code: number, result: string | Products[]}> => {
    return new Promise((resolve, reject) => {
        readProducts()
        .then((response: Products[]) => {
            const locatProductsDB = response;
            resolve( { code: 200, result: locatProductsDB});
        })
        .catch(( error) => {
            reject( { code: 500, message: "Error inesperado"});
        });
    });
};

const getProductById = (id: string): Promise<{ code: number, message: string | Products}> => {
    return new Promise((resolve, reject) => {
        readProductsById(id)
        .then(response => {
            if ((response as Products[]).length === 0) {
                resolve({ code: 404, message: "el Producto no Existe"});
            } else {
                resolve({ code: 200, message: response as Products});
            }
        })
        .catch(error => {
            reject({ code: 500, message: "Error inesperado"});
        });
    });
};

const postProducts = (body: Products): Promise<{code: number, message: string | Products}> =>{
    return new Promise((resolve, reject) => {
        createProducts(body)
        .then((response) => {
            resolve({ code: 202, message: response as string});
        })
        .catch( error => {
            reject ({ code: 500, message: "Error inesperado"});
        });
    });
};


const putProducts = (id: string, body: Products): Promise<{code: number, message: string}> => {
    return new Promise((resolve, reject) => {
        updateProducts(id, body)
        .then(response => {
            if (response === 200) {
                resolve({ code: 200, message: "Producto actualizado correctamente"});
            }
        })
        .catch(error => {
            if (error === 404) {
                reject({code: 404, message: "El producto no fue encontrado"});
            } else {
                reject({ code: 500, message: "Unexpected error "});
            }
        });
    });
};

const deleteProducts = (id: string): Promise<{code: number, message: string}> => {
    return new Promise((resolve, reject) => {
        deleteProductsById(id)
        .then((response) => {
            if (response === 200) {
                resolve({ code: 200, message: "Producto eliminado correctamente"});
            }
        })
        .catch((error) => {
            if (error === 404) {
                reject({ code: 404, message:"Producto no existe"});
            } else {
                reject({ code: 500, message: "Error Inesperado"});
            }
        });
    });
};

export {
    getProducts,
    getProductById,
    postProducts,
    putProducts,
    deleteProducts
};