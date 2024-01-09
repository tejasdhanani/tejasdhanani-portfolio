import nodemailer from 'nodemailer'


export async function POST(request) {
    const { email, subject, message } = await request.json();

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: "tejas27dhanani+portfolio@gmail.com",
        subject: `#ContactForm ${subject}`,
        text: `Sent by: ${email}\n\n${message}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            throw new Error(error);
        } else {
            console.log("Email Sent");
            return true;
        }
    });

    return Response.json({
        message: `email sent to ${email}`
    })
}