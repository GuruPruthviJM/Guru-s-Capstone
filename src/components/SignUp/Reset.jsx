import { useState } from "react";
import '../../CSS/SignUp/Reset.css';

function Forget (){
const[emailID,setEmailID]= useState("");
const[link,setLink]=useState("");

const handleSubmit=(event)=>{
    event.preventDefault();
    alert("Link is submitted");
}
return(
    <div className="Forget-form">
        <form className="Forgetcard" onSubmit={handleSubmit}>
            <h2>Forget Password</h2>
            <label className="form-label">Email ID
                <input 
                    type="email" 
                    className="form-control" 
                    value={emailID} 
                    onChange={(e)=>setEmailID(e.target.value)} 
                    placeholder="Enter your email" required/>
            </label>
            <button type="submit">Submit</button>
            </form>

    </div>
);
}

export default Forget;

