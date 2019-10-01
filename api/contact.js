
const mailer = require('../mailer')

module.exports = (req, res) => {
  const { email = '', name = '', message = '' } = req.body
  if (email.length && name.length && message.length) {
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
