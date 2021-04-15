const ModelGrill01 = require('../Model/grill_01.model');

async function CGrill01(req, res) {
    /*const AllAllumnos = await ModelGrill01().create();
    console.log(AllAllumnos);
    console.log('Hola mundo');
    res.render('../app/View/links/listarusuario',{AllAllumnos});*/
}
async function RGrill01(req, res) {
    const AllAllumnos = await ModelGrill01().create();
    console.log(AllAllumnos);
    console.log('Hola mundo');
    res.render('../app/View/links/listarusuario',{AllAllumnos});
}
async function UGrill01(req, res) {
    
}
async function DGrill01(req, res) {
    
}
module.exports = {
    CGrill01,
    RGrill01,
    UGrill01,
    DGrill01
}