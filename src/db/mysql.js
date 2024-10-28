const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion

function conMysql(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if (err){
            console.log('[db err]', err);
            setTimeout(conMysql, 200);
        }else{
            console.log('DB Conectada')
        }
    });

    conexion.on('error', err => {
        console.log('[db err]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conMysql()
        }else{
            throw err;
        }
    })
}

conMysql();

function all(table){
    return new Promise( (resolve, reject) => {
        conexion.query(`SELECT * FROM ${table}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function one(table, id){
    return new Promise( (resolve, reject) => {
        conexion.query(`SELECT * FROM ${table} WHERE Id=${id}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function add(table, data){

}

function eliminate(table, id){
    return new Promise( (resolve, reject) => {
        conexion.query(`SELECT * FROM ${table} WHERE Id=?`, data.id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

module.exports = {
    all,
    one,
    add,
    eliminate
}