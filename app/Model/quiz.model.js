const pool = require('../../config/database');

module.exports = function () {
    
    // async function create(data){
    //     let query = "INSERT INTO comentario (comentario, usuario_id_usuario) VALUES (?, ?);";
    //     return await pool.query(query, data);
    // }
    async function read(){
        let query = "SELECT idusuario, nombre, idpost, textoPost FROM usuario, post, me_gusta where post_idpost=idpost and me_gusta.usuario_idusuario=idusuario";
        return await pool.query(query);
    }
    return{
        create,
        read
    }
}