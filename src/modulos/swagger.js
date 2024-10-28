const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Parqueadero API',
            version: '1.0.0',
            description: 'API para gestionar el parqueadero de vehículos',
        },
    },
    apis: ['src/modulos/parking/rutas.js', ]
}