const bcrypt = require('bcrypt');

let pswrd = bcrypt.hashSync('pswd798', 9);

console.log(pswrd)