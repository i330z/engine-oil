import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';

export async function POST(req) {

    const { firstName, lastName, email, phone, message } = await req.json()

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });


    const templatePath = path.join(process.cwd(), 'templates', 'contactTemplate.html');
    const templateSource = fs.readFileSync(templatePath, 'utf-8');
    const template = handlebars.compile(templateSource);


    const emailHtml = template({ firstName, lastName, email, phone, message });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'ayanbora1994@gmail.com',
            subject: `Message from ${firstName} ${lastName}`,
            text: message,
            html: emailHtml
        })
        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email: ', error);
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}