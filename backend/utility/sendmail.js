const nodemailer = require("nodemailer");
require("dotenv").config()
const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "maulikpatel3538@gmail.com",
        pass: "phpjmhnaqnqvhihl",
    },
});

const send_mail = async (email, subject, html) => {
    return new Promise((resolve, reject) => {
        const maileOption = {
            from: 'maulikpatel3538@gmail.com', // sender address
            to: email,// list of receivers
            subject: subject, // Subject line
            html: `${html}`, // html body
        }


        transporter.sendMail(maileOption, (error, info) => {
            if (error) {
                reject(error)
                console.log('error send mail', error);
            }
            else {
                resolve(info.response)
                console.log('email send', info.response);
            }
        })
    })
}

module.exports = { send_mail }