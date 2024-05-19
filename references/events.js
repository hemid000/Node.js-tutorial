
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

// Correctly instantiate the MyEmitter class
const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('Event occurred');
});
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');