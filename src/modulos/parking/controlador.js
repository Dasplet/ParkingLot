const db = require('../../db/mysql');

const TABLE = 'vehicles';

function all () {
    return db.all(TABLE);
}

function one (id){
    return db.one(TABLE, id);
}

function eliminate (body){
    return db.one(TABLE, id);
}

module.exports = {
    all,
    one,
    eliminate
}