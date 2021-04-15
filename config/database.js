
const mysql = require('mysql');
const {promisify} =  require('util');
const {database} = require('./env/keys');

const pool = mysql.createPool(database);
pool.getConnection((err, connection)=>{
    if (err) {
        if (err.code === 'PROTOCOL_CONECTION_LOST') {
            console.error('la conexion a la base de datos fue cerrada');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('la base de datos tiene muchas conexiones');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('la conexion a la base de datos fue rechazada');
        }
    }
    if (connection) {
        connection.release();
        console.log('Conexión Exitosa')
    }
    return;
})

pool.query=promisify(pool.query);
module.exports=pool;