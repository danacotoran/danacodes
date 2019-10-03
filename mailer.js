const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: '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'
  }
}))

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'dana.cotoran@gmail.com',
    subject: `New contact form message from ${from}`,
    text,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}
module.exports = send
