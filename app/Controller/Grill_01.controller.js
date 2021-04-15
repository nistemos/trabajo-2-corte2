const ModelGrill01 = require('../Model/grill_01.model');

async function CGrill01(req, res) {
    await ModelGrill01().create(req.body);
    res.redirect('/listarusuario');
}
async function JsonCGrill01(req, res) {
    await ModelGrill01().create(req.body);
    res.status(200).json("Registro creado exitosamente");
}
async function RGrill01(req, res) {
    const AllAlumnos = await ModelGrill01().read();
    res.render('../app/View/links/listarusuario',{AllAlumnos});
}
async function JsonRGrill01(req, res) {
    const AllAlumnos = await ModelGrill01().read();
    res.status(200).json(AllAlumnos);
}
async function UGrill01(req, res) {
    const datos = [
        req.body.Usuarionombre,
        req.body.Usuarioapellido,
        req.body.Usuariosemestre,
        req.params.id_mod
    ];
    console.log(datos);
    await ModelGrill01().update(datos);
    res.redirect('/listarusuario');
}
async function JsonUGrill01(req, res) {
    const datos = [
        req.body.Usuarionombre,
        req.body.Usuarioapellido,
        req.body.Usuariosemestre,
        req.params.id_mod
    ];
    await ModelGrill01().update(datos);
    res.status(200).json("Registro modificado exitosamente");
}
async function DGrill01(req, res) {
    await ModelGrill01().delet(req.params.id);
    res.redirect('/listarusuario');
}
async function JsonDGrill01(req, res) {
    await ModelGrill01().delet(req.params.id);
    res.status(200).json("Registro eliminado exitosamente");
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