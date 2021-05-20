const quizmodel = require('../Model/quiz.model');

async function listarUsuario(req, res) {
    const data = await quizmodel().read(req.params.id);
    res.render('../app/View/links/quiz',{data});
    //res.redirect('/listarusuario');
}
async function crearComentario(req, res) {
    const datos = [
        req.body.comentario,
        req.params.id
    ];
    console.log(datos);

   
    await quizmodel().create(datos);
    res.redirect('/QuizCortedos/'+req.params.id);
}
async function crearLike(req, res) {
    //const AllAlumnos = await ModelGrill01().read();
    //res.status(200).json(AllAlumnos);
}
module.exports = {
    listarUsuario,
    crearComentario,
    crearLike
}