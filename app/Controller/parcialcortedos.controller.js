const modelParcial = require("../Model/quizdos.model.js");

async function Create(req, res) {
    //req.body es para capturar las variables pasadas por post en el body por ejemplo "un formulario"
    //req.params es para capturar las variables pasadas por get y se le añade ".nombre variable"
    await modelParcial.create(req.body);
    res.send("Crear");
    //Para que el servidor responda en formato json
    //res.status(200).json("Registro creado exitosamente");
    //Para que el servidor responda con una interfaz grafica
    //res.redirect('/listarusuario');
}
async function Read(req, res) {
    const datos = [
        req.params.id_user,
        req.params.id_post
    ];
    const data = await modelParcial().read();
    console.log(data);
    res.render('../app/View/links/parcial')
    //res.status(200).json(data)
    //await modelParcial.read(req.body);
    //Para que el servidor responda en formato json
    //res.status(200).json("Registro creado exitosamente");
    //Para que el servidor responda con una interfaz grafica
    //res.redirect('/listarusuario');
}
async function ReadAll(req, res) {
    const datos = [
        req.params.id_user,
        req.params.id_post
    ];
    const data = await modelParcial().read();
    res.render('../app/View/links/parcial',{data});
    // const data = await modelParcial().read();
    // console.log(data);
    //await modelParcial.readAll(req.body);
    //Para que el servidor responda en formato json
    //res.status(200).json("Registro creado exitosamente");
    //Para que el servidor responda con una interfaz grafica
    //res.redirect('/listarusuario');
}
async function Update(req, res) {
    await modelParcial.update(req.body);
    res.send("Crear");
    //Para que el servidor responda en formato json
    //res.status(200).json("Registro creado exitosamente");
    //Para que el servidor responda con una interfaz grafica
    //res.redirect('/listarusuario');
}
async function Delet(req, res) {
    await modelParcial.delet(req.body);
    //Para que el servidor responda en formato json
    //res.status(200).json("Registro creado exitosamente");
    //Para que el servidor responda con una interfaz grafica
    //res.redirect('/listarusuario');
}

module.exports = {
    Create,
    Read,
    ReadAll,
    Update,
    Delet
}