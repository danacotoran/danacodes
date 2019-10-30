
const mailer = require('../../mailer')
require('dotenv').config()

module.exports = (req, res) => {
  if (req.method === 'POST') {
    // TODO find a more elegant alternative to this jsOn = true/false business
    const { email = '', name = '', message = '', consented = false, jsOn = false } = req.body
    if (email.length && name.length && message.length && consented) {
      mailer({ email, name, text: message }).then(() => {
        if (jsOn) {
          res.send('success')
        }
        else {
          res.writeHead(301,{
            Location: '/contact?outcome=success'
          })
          res.end()
        }
      }).catch((error) => {
        if (jsOn) {
          res.status(400)
          res.send('error')
        }
        else {
          res.writeHead(301,{
            Location: '/contact?outcome=error'
          })
          res.end()
        }
      })
    }
    else {
      if (jsOn) {
        res.status(400).send('Please ensure all the fields are filled in')
      }
      else {
        res.writeHead(301,{
          Location: '/contact?outcome=incomplete'
        })
        res.end()
      }
    }
  }
  else {
    res.status(405)
    res.send('method not allowed')
  }

}
