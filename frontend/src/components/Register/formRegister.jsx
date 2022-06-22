import React,{useState} from 'react'
const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/; 
function validate({name,lastname,username,email,password,passwordValidate}){
const errors = {};

/* valida contraseñas de al menos una letra, al menos un numero, 
al menos una letra mayúscula, 
al menos 8 caracteres, no permite espacios.*/
//VALIDACIONES PARA NAME

if(!name){
    errors.name = <b>Enter name ❌</b>
}else if (!/^[a-zA-Z\s]*$/.test(name)){ 
    errors.name = <b>Characters are not allowed ❌</b>
}
 
//VALIDACIONES PARA LASTNAME
if(!lastname){
    errors.lastname = <b>Enter lastname ❌</b>
}else if (!/^[a-zA-Z\s]*$/.test(lastname)){ 
    errors.lastname = <b>Characters are not allowed ❌</b>
}

//VALIDACIONES PARA username
if(!username){
    errors.username = <b>Enter username ❌</b>
}else if (!/^[a-zA-Z\s]*$/.test(username)){ 
    errors.username = <b>Characters are not allowed ❌</b>
}

//VALIDACIONES PARA email
if(!email){
    errors.email = <b>Enter email ❌</b>
}else if (!regexEmail.test(email)){ 
    errors.email = <b>Enter valid email ❌</b>
}

//VALIDACIONES PARA PASSWORD
if(!password){
    errors.password = <b>Enter password ❌</b>
}else if (!regexPass.test(password)){ 
    errors.password = <b>Password need: at least 1 letter, 1 number, 1 upperCase letter, 8 characters, no spaces ❌</b>
} else if(password !== passwordValidate){
    errors.password = <b>Passwords has to be equals❌</b>
}

return errors;
}

export default function Register() {
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        name:'',
        lastname:'',
        username:'',
        email:'',
        password:'',
        passwordValidate:''
    });

    const { name, lastname, username, password, email,passwordValidate} = user;

    const handleOnChange=(e)=>{
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...user,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.length === 0 || lastname.length === 0 || username.length === 0 || email.length === 0 || password.length === 0 ){
            alert('FILL IN THE BLANKS!');//REVISAR SWEET ALERT
        }else if(name.length<=3){
            alert('NAME HAS TO BE AT LEAST 3 LETTERS');
        }else if(!/^[a-zA-Z\s]*$/.test(lastname)){
            alert('LASTNAME HAS TO BE ONLY LETTERS');
        }else if(!/^[a-zA-Z\s]*$/.test(username)){
            alert('USERNAME HAS TO BE ONLY LETTERS');
        }else if(!regexEmail.test(email)){
            alert('FORMAT HAS TO BE EMAIL')
        }else if(!regexPass.test(password)){
            alert('INVALID PASSWORD')
        }else if(password !== passwordValidate){
            alert('PASSWORDS HAS TO BE EQUAL')
        }else if(/^[a-zA-Z\s]*$/.test(lastname) && /^[a-zA-Z\s]*$/.test(name) && /^[a-zA-Z\s]*$/.test(username) && regexEmail.test(email) && regexPass.test(password) && password === passwordValidate ){
            //dispatch(postUser(user)); //HACERRRRRRRRRRRRRRRRRR
            //CHECKEAR NODEMAILER!!!https://www.youtube.com/watch?v=KjheexBLY4A
            //https://nodemailer.com/about/
            setUser({ 
            name:'',
            lastname:'',
            username:'',
            email:'',
            password:'',
            passwordValidate:''
        });

        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' placeholder='Name' value={name} name='name' onChange={handleOnChange}/>
            <label>Lastname</label>
            <input type='text' placeholder='Lastname' value={lastname} name='lastname' onChange={handleOnChange}/>
            <label>Username</label>
            <input type='text' placeholder='Username' value={username} name='username' onChange={handleOnChange}/>
            <label>Email</label>
            <input type='text' placeholder='Email' value={email} name='email' onChange={handleOnChange}/>
            <label>Password</label>
            <input type='password' placeholder='password' value={password} name='password' onChange={handleOnChange}/>
            <input type='password' placeholder='password' value={passwordValidate} name='passwordValidate' onChange={handleOnChange}/>
            <button type='submit'> Submit </button>
        </form>
        <div>
                  {errors.name && (<p >{errors.name}</p>)}
                 {errors.lastname && (<p >{errors.lastname}</p>)}
                 {errors.username && (<p >{errors.username}</p>)}
                 {errors.email && (<p >{errors.email}</p>)}
                 {errors.password && (<p >{errors.password}</p>)}
        </div>
    </div>
  )
}
