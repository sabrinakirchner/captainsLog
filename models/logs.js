const mongoose = require('mongoose');
//const Log = require('/models/logs')


const logSchema = new mongoose.Schema({ 
    title: String, 
    entry: String, 
    shipIsBroken: {type: Boolean, default: true }
},{ timestamps: true }); 

const Log = mongoose.model('Log', logSchema); 

module.exports = Log;  