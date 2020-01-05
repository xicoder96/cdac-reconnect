const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b4162284d7efbd",
        pass: "7fd26e18f865c6"
    },
    debug: false, // show debug output
    logger: false // log information in console
});

var mailOptions = {
    from: '"Example Team" <from@example.com>',
    to: 'user1@example.com, user2@example.com',
    subject: 'Nice Nodemailer test',
    text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
    html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
};

transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
