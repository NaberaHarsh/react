import React from 'react'
import {Button} from 'react-bootstrap'

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'harshnabera30@gmail.com',
  from: 'harshnabera30@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

function Mail(){
    return(
        <div>
            <Button onclick={sgMail.send(msg)}>send mail</Button>
        </div>
    )
}
export default Mail;