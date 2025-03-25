import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0

async function sendSimpleMessage() {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "Your api key",
    // When you have an EU-domain, you must specify the endpoint:
    // url: "https://api.eu.mailgun.net/v3"
  });
  try {
    const data = await mg.messages.create("sandboxb35e96234b634069a2452247883c8e20.mailgun.org", {
      from: "Mailgun Sandbox <postmaster@sandboxb35e96234b634069a2452247883c8e20.mailgun.org>",
      to: ["Mathieu Phan <mathieuphan@outlook.com>"],
      subject: "Hello Mathieu Phan",
      text: "Congratulations Mathieu Phan, you just sent an email with Mailgun! You are truly awesome!",
    });

    console.log(data); // logs response data

  } catch (error) {
    console.log(error); //logs any error
  }
}
sendSimpleMessage();