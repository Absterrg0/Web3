const crypto = require('crypto')

const input = 'HelloWorld';

const hash = crypto.createHash('sha256').update(input).digest('hex')


console.log(hash)
