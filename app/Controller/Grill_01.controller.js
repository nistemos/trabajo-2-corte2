const ModelGrill01 = require('../Model/grill_01.model');

async function CGrill01(req, res) {
    /*const AllAllumnos = await ModelGrill01().create();
    console.log(AllAllumnos);
    console.log('Hola mundo');
    res.render('../app/View/links/listarusuario',{AllAllumnos});*/
}
async function JsonCGrill01(req, res) {
    const AllAlumnos = await ModelGrill01().create();
    res.status(200).json(AllAlumnos);
}
async function RGrill01(req, res) {
    const AllAlumnos = await ModelGrill01().read();
    res.render('../app/View/links/listarusuario',{AllAlumnos});
}
async function JsonRGrill01(req, res) {
    const AllAlumnos = await ModelGrill01().create();
    res.status(200).json(AllAlumnos);
}
async function UGrill01(req, res) {
    
}
async function JsonUGrill01(req, res) {
    const AllAlumnos = await ModelGrill01().create();
    //res.status(200).json(AllAlumnos);
    res.render('../app/View/links/listarusuario',{AllAlumnos});
}
async function DGrill01(req, res) {
    
}
async function JsonDGrill01(req, res) {
    const AllAlumnos = await ModelGrill01().create();
    //res.status(200).json(AllAlumnos);
    res.render('../app/View/links/listarusuario',{AllAlumnos});
}
module.exports = {
    CGrill01,
    RGrill01,
    UGrill01,
    DGrill01,
    JsonCGrill01,
    JsonRGrill01,
    JsonUGrill01,
    JsonDGrill01
}