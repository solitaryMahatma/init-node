const relation = require('./schemas')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const initModel = (collection, schema) => mongoose.model(collection, new mongoose.Schema(schema))

const stystemSchema = {
    user: initModel('stystemUser', Schema(relation.stystem.user))
}


exports.stystem = stystemSchema