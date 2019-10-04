
const mailer = require('../../mailer')
require('dotenv').config()

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { email = '', name = '', message = '', consented = false } = req.body
    if (email.length && name.length && message.length && consented) {
      mailer({ email, name, text: message }).then(() => {
        res.send('success')
      }).catch((error) => {
        res.status(400)
        console.log('failed', error)
        res.send('error')
      })
    }
    else {
      res.status(400)
        .send('Please ensure all the fields are filled in')
    }
  }
  else {
    res.status(405)
    res.send('method not allowed')
  }

}
