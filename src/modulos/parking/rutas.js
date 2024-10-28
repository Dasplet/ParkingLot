const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', all);
router.get('/:id', one);

router.put('/', eliminate);

async function all (req, res) {
    try{
        const items = await controlador.all();
        respuesta.success(req,res, items, 200);
    }catch(err){
        respuesta.error(req, res, err, 500);
    }
};

async function one (req, res) {
    try{
        const items = await controlador.one(req.params.id);
        respuesta.success(req, res, items, 200)
    }catch(err){
        respuesta.error(req, res, err, 500);
    }
};

async function eliminate (req, res) {
    try{
        const items = await controlador.eliminate(req.body);
        respuesta.success(req, res, 'Item Successfully Deleted', 200);
    }catch(err){
        respuesta.error(req, res, err, 500);
    }
};

module.exports = router;