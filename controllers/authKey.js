const mysql = require('mysql')

exports.authenticateKey = (req, res, next) => {
  let urlApiKey = req.params.apikey
  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  db.query(
    'SELECT * FROM apikey WHERE apikey = ?',
    [urlApiKey],
    (err, result) => {
      if (err) {
        //console.log('auth key line err')
        req.setEncoding({ err: err })
      } else {
        if (result.length > 0) {
          // console.log('auth key line 11')
          next()
        } else {
          res.send({ message: 'Please provide a valid api key!' })
        }
      }
    }
  )
}
