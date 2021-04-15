const pool = require('../../config/database');

module.exports = function () {
    
    async function create(data){
        let query = "INSERT INTO Usuario set ?";
        return await pool.query(query, data);
    }
    async function read(){
        let query = "select * from Usuario";
        return await pool.query(query);
    }
    async function update(data){
        let query = "select * from Usuario";
    }
    async function delet(data){
       let query = "delete from Usuario where idUsuario = ?";
       return await pool.query(query, data);
    }
    return{
        create,
        read,
        update,
        delet
    }
}