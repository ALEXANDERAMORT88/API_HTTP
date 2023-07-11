import { Suppliers } from "../types/suppliers.types";
import {
    readSuplliers,
    readSuppliersById,
    readSuppliersByName,
    createSuppliers,
    updateSuppliers,
    deleteSuppliersById,
 } from "../data/suppliers.data";


 const getSuppliers = (): Promise<{ code: number, result: string | Suppliers[]}> => {
    return new Promise ((resolve, reject) =>{
        readSuplliers()
        .then((response: Suppliers[]) => {
            const localSuppliersDb = response;
            resolve({ code: 200, result: localSuppliersDb});
        })
        .catch((error) => {
            reject({code: 500, message: "Error inesperado"});
        });
    });
};

const getSuppliersById = (id: string): Promise<{ code: number, message: string | Suppliers }> => {
    return new Promise((resolve, reject) => {
        readSuppliersById(id)
            .then(response => {
                if ((response as Suppliers[]).length === 0) {
                    resolve({ code: 404, message: "Cliente No existe" });
                } else {
                    resolve({ code: 200, message: response as Suppliers });
                }
            })
            .catch(error => {
                reject({ code: 500, message: "Error inesperado" });
            });
    });
};

const getSuppliersByName = (name: string): Promise <{code: number, message:string | Suppliers}> =>{
    return new Promise((resolve, reject) =>{
        readSuppliersByName(name)
        .then((response) =>{
            if ((response as Suppliers[]).length === 0) {
                resolve( {code: 404, message: "Cliente no existe"});
            } else {
                resolve( {code: 200, message: response as Suppliers});
            }
        })
        .catch(error =>{
            reject( { code: 500, message: "Error inesperado"});
        });
    });
};

const postSuppliers = (body: Suppliers): Promise <{code: number, messge:string | Suppliers}> => {
    return new Promise ((resolve, reject) => {
        createSuppliers(body)
        .then((response) =>{
            resolve({ code: 201, messge: response as string});
        })
        .catch( error => {
            reject({ code: 500, message: "Error inesperado"});
        });
    });
};

const putSuppliers = (id: string, body: Suppliers): Promise <{code:number, message: string}> => {
    return new Promise((resolve, reject) => {
        updateSuppliers(id, body)
        .then(response => {
            if (response === 200) {
                resolve({ code: 200, message: "Cleiente actualizado exitosameinte" as string});
            }
        })
        .catch(error => {
            if (error === 404) {
                reject( { code: 404, message: "Cleinte no encontrado"});
            } else {
                reject( { code: 500, message: "Unexpected error"});
            }
        });
    });
};

const deleteSupplier = (id: string): Promise<{ code: number, message: string}> => {
    return new Promise((resolve, reject) => {
        deleteSuppliersById(id)
        .then((response) => {
            if (response === 200) {
                resolve({ code: 200, message: "Proveedor elimindo correctamente"});
            }
        })
        .catch((error) => {
            if (error === 404) {
                reject({ code: 404, message: "Proveedor no existe"});
            } else {
                reject({ code: 500, message: "Error inesperado"});
            }
        });
    });
};

export {
    getSuppliers,
    getSuppliersById,
    getSuppliersByName,
    createSuppliers,
    postSuppliers,
    putSuppliers,
    deleteSupplier
};