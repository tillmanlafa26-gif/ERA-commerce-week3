const bcrypt = require('bcryptjs');

//hash a password
const plainpassword = 'John@1234';
const hash = bcrypt.hashSync(plainpassword, 10);
console.log('hash:', hash);

//compare correct password
const match = bcrypt.compareSync(plainpassword, hash);
console.log('correct password match:', match);

//compare wrong password
const nomatch = bcrypt.compareSync('WrongPassword', hash);
console.log('wrong password match:', nomatch);