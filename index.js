const firstcode = "Jalə"
console.log(firstcode);

const Person = require('./person')
function name() {
    return(firstcode + ' salam '  + firstcode )

}

const Name = new Person("Hamid" , 20)
Name.greeting()

// logger events listener
const logger2 = require('./logger');
const logger = new logger2();

logger.on('message' , data =>  console.log('Hamid ' , data))

logger.log('Hello world')
logger.log('Hello world2')
logger.log('Hello world3')
logger.log('Hello world4')
