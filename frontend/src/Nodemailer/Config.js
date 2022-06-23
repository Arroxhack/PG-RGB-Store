import { createTransport } from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing


  // create reusable transporter object using the default SMTP transport
  export const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "rgbstore0@gmail.com", // generated ethereal user
      pass: "fzaeizjoghjrneex", // generated ethereal password
    },
  });
  
