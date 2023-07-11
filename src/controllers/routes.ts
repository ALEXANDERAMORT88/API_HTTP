import express from 'express';

import suppliersController from './suppliers.controller';
import productsController from './products.contoller';
import employeeController from './employee.controller';

function routerApi(app: express.Application) {
    app.use('/suppliers', suppliersController);
    app.use('/products', productsController);
    app.use('/employee', employeeController);
}

export { routerApi};

