import nodemailer from 'nodemailer'


export async function POST(request) {
    const { email, subject, message } = await request.json();

    var transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
        secure: true
    });

    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: "tejas27dhanani+portfolio@gmail.com",
        subject: `#ContactForm ${subject}`,
        text: `Sent by: ${email}\n\n${message}`,
    };


    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log("Email Sent");
            console.log(info);
        }
    });

    return Response.json({
        message: `email sent to ${email}`
    })
}