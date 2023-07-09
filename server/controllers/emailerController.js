import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

const sendEmail = (req, res) => {
    let name = req.body.userName;
    let email = req.body.userEmail;
    let msg = req.body.userMsg;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'complife4420@gmail.com',
            // pass: process.env.gmail_pass,
            pass: process.env.gmail_pas, // testing error with one less "s"

        },
    });

    let data = {
        from: `complife4420@gmail.com`,
        to: "anmi4420@colorado.edu",
        subject: `Portfolio: ${name} email: ${email}`,
        text: msg,
      };

    transporter.sendMail(data, (err, info)=>{
        if (err) {
            res.send(err)
            return
        }
        res.send(info.response)
    })

};

export default sendEmail;
