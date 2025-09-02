import {useForm} from 'react-hook-form'     //Importamos el ract-hook-form
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../repositories/firebase/config'

const schema = yup.object({
    email: yup.string().email("Please enter a correct format: email@email.com").required(),
    password : yup.string().required().min(8,"Please enter a min 8 char")
    .matches(/[A-Z]/,'Please enter a 1 char in Mayus')
    .matches(/[a-z]/,'Please enter a 1 char in Minus')
    .matches(/[0-9]/,'Please enter a 1 number')
    .matches(/[!@#$%^&*?.,_:<>"|]/,'Please enter a 1 special char'),
    confirm_password: yup.string().oneOf([yup.ref("password"),null],'Check our password')
})

export const Register = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitForm =(data) =>{
        console.log(data);

        createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)

    alert('User successfully registered')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode);
    console.error(errorMessage);
    
    // ..
  });
    }

  return (
    <div>Register

        <form onSubmit={handleSubmit(onSubmitForm)}>
            <label className="form-label">Email:</label>
            <input type="email" className="form-control"  name="input_email" {...register('email')}/>
            <p className='text-danger'>{errors.email && errors.email.message}</p>
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" name="input_password" {...register('password')} />
            <p className='text-danger'>{errors.password && errors.password.message}</p>
            <label className="form-label">Confirm Password:</label>
            <input type="password" className="form-control" name="input_password" {...register('confirm_password')} />
            <p className='text-danger'>{errors.confirm_password && errors.confirm_password.message}</p>
            <button>Send</button>
        </form>
    </div>
  )
}
