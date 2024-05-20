const  EventEmitter  = require('events'); // Correct import
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    this.emit('message', { id: uuid.v4(), msg: msg });
  }
}

// Create an instance of Logger
const logger2 = new Logger();

// Attach the listener to the logger2 instance
logger2.on('message', data => console.log('Hamid', data));

// Emit some messages
logger2.log('Hello world');
logger2.log('Hello world2');
logger2.log('Hello world3');
logger2.log('Hello world4');
