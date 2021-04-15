const pool = require('../../config/database');

module.exports = function () {
    
    async function create(data){
        console.log(data);
        //let query = "CALL CreateUsuarios(?, ?, ?,)";
        //return await pool.query(query);
    }
    async function read(){
        let query = "CALL ListarUsuarios()";
        return await pool.query(query);
    }
    async function update(data){
        let query = "CALL ListarUsuarios()";
    }
    async function delet(data){
        let query = "CALL ListarUsuarios()";
    }
    return{
        create,
        read,
        update,
        delet
    }
}