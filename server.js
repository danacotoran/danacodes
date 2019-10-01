const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mailer = require('./mailer')

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.post('/api/contact', (req, res) => {
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
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
