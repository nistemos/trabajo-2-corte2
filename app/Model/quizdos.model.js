const pool = require('../../config/database');
module.exports = function () {
    
    async function create(data){
        let query = "";
        return await pool.query(query, data);
    }
    //listar datos por registro unico
    async function read(data){
        let query = "";
        return await pool.query(query, data);
    }
    //listar todos los registros
    async function readAll(){
        let query = "";
        return await pool.query(query);
    }
    async function update(data){
        let query = '';
        return await pool.query(query, data);
    }
    async function delet(data){
       let query = "";
       return await pool.query(query, data);
    }
    return{
        create,
        read,
        update,
        delet,
        readAll
    }
}