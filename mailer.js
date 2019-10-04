const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  console.log(process.env.SENDGRID_KEY)
  const transporter = nodemailer.createTransport(sgTransport({
    auth: {
      api_key: process.env.SENDGRID_KEY
    }
  }))

  const message = {
    from,
    to: 'dana.cotoran@gmail.com',
    subject: `New danacodes.com message from ${from}`,
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
