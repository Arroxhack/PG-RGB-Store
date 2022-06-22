export const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
export function validate({
  name,
  lastname,
  username,
  email,
  password,
  passwordValidate,
}) {
  const errors = {};

  /* valida contraseñas de al menos una letra, al menos un numero, 
al menos una letra mayúscula, 
al menos 8 caracteres, no permite espacios.*/
  //VALIDACIONES PARA NAME

  if (!name) {
    errors.name = <b>Enter name ❌</b>;
  } else if (!/^[a-zA-Z\s]*$/.test(name)) {
    errors.name = <b>Characters are not allowed ❌</b>;
  }

  //VALIDACIONES PARA LASTNAME
  if (!lastname) {
    errors.lastname = <b>Enter lastname ❌</b>;
  } else if (!/^[a-zA-Z\s]*$/.test(lastname)) {
    errors.lastname = <b>Characters are not allowed ❌</b>;
  }

  //VALIDACIONES PARA username
  if (!username) {
    errors.username = <b>Enter username ❌</b>;
  } 

  //VALIDACIONES PARA email
  if (!email) {
    errors.email = <b>Enter email ❌</b>;
  } else if (!regexEmail.test(email)) {
    errors.email = <b>Enter valid email ❌</b>;
  }

  //VALIDACIONES PARA PASSWORD
  if (!password) {
    errors.password = <b>Enter password ❌</b>;
  } else if (!regexPass.test(password)) {
    errors.password = (
      <b>
        Password need: at least 1 letter, 1 number, 1 upperCase letter, 8
        characters, no spaces ❌
      </b>
    );
  } else if (password !== passwordValidate) {
    errors.password = <b>Passwords has to be equals❌</b>;
  }

  return errors;
}