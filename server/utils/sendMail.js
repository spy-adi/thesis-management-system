const nodemailer = require('nodemailer');
const path = require('path');

const sendMail = async (targets, subject, message, attachments) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pattewar.19je0599@ece.iitism.ac.in',  //your username here
            pass: '10on10darshante'   //your password here
        }
    });

    const mailOptions = {
        from: 'TMS <pattewar.19je0599@ece.iitism.ac.in>',   //your username(emailid) within the <>
        to: targets,
        subject: subject,
        html: message,
        attachments: attachments,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
};

module.exports = sendMail;