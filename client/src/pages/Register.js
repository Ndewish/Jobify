import { useState, useEffect } from "react"
import { Logo,FormRow, Alert} from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"

const InitialState = {
    name: '',
    email: '',
    password:'',
    isMember: true,
    showAlert: true,
}

//register function
const Register = () =>{
    const [values,setValues] = useState(InitialState) //default router
    //global variables and useNavigate

    const handleChange = (e) => {
        console.log(e.target)
    }

    const onSubmit =(e) => {
        e.preventDefault()
        console.log(e.target)
    }
    return (
    <Wrapper className="full-page">

       <form className="form" onSubmit={onSubmit}>
           <Logo/>
           <h3>Login</h3>
           {values.showAlert && <Alert/>}
           {/* name input */}
           <FormRow
           type='text'
           name='Staff ID'
           value={values.name}
           handleChange ={handleChange}
           />
           {/* name input */}
           <FormRow
           type='Email'
           name='email address'
           value={values.email}
           handleChange ={handleChange}
           />
           {/* name input */}
           <FormRow
           type='password'
           name='Password'
           value={values.password}
           handleChange ={handleChange}
           />
           <button type="submit" className="btn btn-block">
               Submit Credentials
           </button>
       </form>
    </Wrapper>
    )
}
export default Register