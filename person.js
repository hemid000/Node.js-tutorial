class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    greeting() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
    greeting2() {
        console.log(`name  ${this.name} and  age  ${this.age}`);
    }
}

module.exports = Person;
