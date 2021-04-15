const pool = require('../../config/database');

module.exports = function () {
    
    async function create(){
        let query = "CALL ListarUsuarios()";
        return await pool.query(query);
    }
    async function read(){
        let query = "CALL ListarUsuarios()";
    }
    async function update(){
        let query = "CALL ListarUsuarios()";
    }
    async function delet(){
        let query = "CALL ListarUsuarios()";
    }
    return{
        create,
        read,
        update,
        delet
    }
}