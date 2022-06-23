import transporter from "./Config";

export const Verificade = await transporter.sendMail({
    from: 'rgbstore0@gmail.com', // sender address
    to: email, // list of receivers
    subject: "Verification ✔", // Subject line
    html: `<b>Hola, Aca esta tu codigo de Verificacion! ${token}</b>`, // html body
  });

  export const ResendVerification = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
