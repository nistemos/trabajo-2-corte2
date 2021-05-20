const express = require('express');
const router = express.Router();
const Grill_01 = require('../Controller/Grill_01.controller');
const quiz = require('../Controller/quizcortedos.controller');
const parcial = require('../Controller/parcialcortedos.controller');
//vistas---------------------------------------------------
router.get('/', (req,res)=>{
    res.render('../app/View/links/inicio',{
        titulo: 'Trabajo 1 corte 2'
    });
});
router.get('/inicio', (req,res)=>{
    res.render('../app/View/links/inicio');
});
router.get('/nosotros', (req,res)=>{
    res.render('../app/View/links/nosotros');
});
router.get('/servicios', (req,res)=>{
    res.render('../app/View/links/servicio');
});
router.get('/clientes', (req,res)=>{
    res.send('Clientes');
});
router.get('/ingresar', (req,res)=>{
    res.render('../app/View/links/login');
});
router.get('/contactenos', (req,res)=>{
    res.send('contactenos');
});
router.get('/registro', (req,res)=>{
    res.send('registro');
});
//----------------------------------------------------------
//controladores --------------------------------------------

router.get('/QuizCortedos/:id', quiz.listarUsuario);
router.post('/QuizCortedos/crearusuario/:id', quiz.crearComentario);
router.post('/like/:id', quiz.crearLike);


router.get('/listarusuario', Grill_01.RGrill01);
router.post('/crearusuario', Grill_01.CGrill01);
router.get('/eliminar/:id', Grill_01.DGrill01);
router.post('/modificar/:id_mod', Grill_01.UGrill01);

router.get('/api/listarusuario', Grill_01.JsonRGrill01);
router.post('/api/crearusuario', Grill_01.JsonCGrill01);
router.delete('/api/eliminar/:id', Grill_01.JsonDGrill01);
router.put('/api/modificar/:id_mod', Grill_01.JsonUGrill01);

//parcial
router.get('/chiquifacebook/muro/:id_user/:id_post', parcial.ReadAll);
router.delete('/parcial/actualizar', parcial.Update);
router.put('/parcial/editar', parcial.Update);
//----------------------------------------------------------
module.exports = router;