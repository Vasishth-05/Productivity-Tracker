/*
define shcema for tasks
Fields: title(required), description(optional), status (required : default : "pending")
enable timestamp for createdAt and updatedAt
export models
*/

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const tasks = mongoose.Schema({
    title : String,
    description : String,
    status : {
        required : {
            default : 'pending'
        }
    },
    timestamp: {
      '$dateToString': {
        format: '%Y-%m-%d %H:%M:%S.%L',
        date: ISODate("2022-12-16T14:32:19.333Z")
      }
    }
    
})

module.exports = mongoose.model('Tasks',tasks);