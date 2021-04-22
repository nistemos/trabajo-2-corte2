const pool = require('../../config/database');

module.exports = function () {
    
    async function create(data){
        let query = "INSERT INTO Usuario set ?";
        return await pool.query(query, data);
    }
    async function read(data){
        let query = "select id_usuario, comentario, nombre from usuario, comentario where  usuario_id_usuario = id_usuario and id_usuario = ?";
        return await pool.query(query, data);
    }
    return{
        create,
        read
    }
}