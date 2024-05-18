const firstcode = "Jalə"
console.log(firstcode);

const Person = require('./person')
function name() {
    return(firstcode + ' salam '  + firstcode )

}

const Name = new Person("Hamid" , 20)
Name.greeting()
Name.greeting2()

