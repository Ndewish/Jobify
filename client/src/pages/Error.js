import { Link } from "react-router-dom"
import img from '../assets/images/not-found.svg'
import Wrapper from "../assets/wrappers/ErrorPage"


const Error = () =>{
    return (
    <Wrapper className="full-page">
        <div>
            <img src={img} alt="not-found"/>
        
        <h3> Anele is the king of broskiis the CEO of the singles club..in other words go back to the main page</h3>
        <p> But she is the clown and the joker</p>
        <Link to ='/'> Back to the home page</Link>
 </div>
    </Wrapper>
    )
}
export default Error