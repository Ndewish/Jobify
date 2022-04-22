
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import{Logo} from '../components'
import { Link } from 'react-router-dom'

const Landing = ()=>{
    return( 
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className= 'container page'>
            <div className='info'>
                <h1> RFID TIME 
                    <span> AND </span> ATTENDANCE
                </h1>
                <p>Time and Attendance system using Biometric Fingerprint to keep track of empl</p>
                <Link to ='/register' className='btn btn-hero'>Staff and Admin Login</Link>
            </div>
            <img src={main} alt='job hunt' className='img
             main-img'/>
             </div>
    </Wrapper>
    )
}

export default Landing
    
