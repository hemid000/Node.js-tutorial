// logger events listener

const logger = require('events');
const uuid = require('uuid')
class Logger extends logger{
   log(msg) {
    this.emit('message' , {id : uuid.v4() , msg:msg })
  } 
}
module.exports = Logger ;