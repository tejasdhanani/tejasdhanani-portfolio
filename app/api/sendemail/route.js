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

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: "tejas27dhanani+portfolio@gmail.com",
        subject: `#ContactForm ${subject}`,
        text: `Sent by: ${email}\n\n${message}`,
    };

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log("Email Sent");

                console.log(info);
                resolve(info);
            }
        });
    });

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         throw new Error(error);
    //     } else {
    //         console.log("Email Sent");
    //         return true;
    //     }
    // });

    return Response.json({
        message: `email sent to ${email}`
    })
}