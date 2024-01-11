// import nodemailer from 'nodemailer'
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
    const { email, subject, message } = await request.json();

    const body = `
        Sent by: ${email}\r\n
        Subject: ${subject}\r\n
        Message: ${message}
    `

    const data = {
        to: 'tejas27dhanani@gmail.com',
        from: 'tejas27dhanani@gmail.com',
        subject: 'Portfolio Form Submission ',
        text: body,
        html: message.replace(/\r\n/g, '<br>')
    }

    const sendEmail = async () => {
        try {
            await mail.send(data);
            return Response.json({
                message: `email sent.`
            })
        } catch (error) {
            console.error(error);

            if (error.response) {
                console.error(error.response.body);
            }
        }
    }

    await sendEmail();

    return Response.json({
        error: `email not sent.`
    })

}

// export async function POST(request) {
//     const { email, subject, message } = await request.json();

//     var transporter = nodemailer.createTransport({
//         port: 465,
//         host: "smtp.gmail.com",
//         auth: {
//             user: process.env.NODEMAILER_EMAIL,
//             pass: process.env.NODEMAILER_PW,
//         },
//         secure: true
//     });

//     var mailOptions = {
//         from: process.env.NODEMAILER_EMAIL,
//         to: "tejas27dhanani+portfolio@gmail.com",
//         subject: `#ContactForm ${subject}`,
//         text: `Sent by: ${email}\n\n${message}`,
//     };


//     transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log("Email Sent");
//             console.log(info);
//         }
//     });

//     return Response.json({
//         message: `email sent to ${email}`
//     })
// }