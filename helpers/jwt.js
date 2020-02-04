const expressJWT = require('express-jwt')
const congif = require('../config.json') 


module.exports = jwt;
function jwt() {
    const secret = config.secret
    return expressJWT({ secret, isRevoked }).unless({
        path: [
            '/acct/auth'

        ]

    })
}
  

async function isRevoked(req, payload, done) {

    const account = true
/*
if ((!account)

)
*/
    done()
}