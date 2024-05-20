const firstcode = "Jalə"
console.log(firstcode);

const Person = require('./person')
function name() {
    return(firstcode + ' salam '  + firstcode )

}

const Name = new Person("Hamid" , 20)
Name.greeting()

// logger events listener
// const logger2 = require('./logger');


const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('<h1>Welcome to Home Page</h1>');
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running on port ${port}`));
