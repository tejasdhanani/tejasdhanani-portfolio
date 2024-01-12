// import nodemailer from 'nodemailer'
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
    const { email, subject, message } = await request.json();

    const body = `
        this is body:
        Sent by: ${email}\r\n
        Subject: ${subject}\r\n
    `

    const data = {
        to: 'tejas27dhanani@gmail.com',
        from: 'tejas2710dhanani@gmail.com',
        subject: 'Portfolio Form Submission ',
        text: body,
        html: `
            <div>Sent by: ${email}</div>
            <div>Subject: ${subject}</div>
            Message: ${message}
        `
    }

    try {
        await mail.send(data);
        return Response.json({
            message: `Email sent successfully!`
        })
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body);
        }

        return Response.json({
            error: `Failed to send email. Please try again later.`
        }, { status: 400 })
    }


}