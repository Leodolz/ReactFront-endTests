import React, { Component } from 'react';
import userImg from '../images/userImage.png';

class LoginForm extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <form method="post">
                    <div className="imgContainter">
                        <img src={userImg} alt="Student" className="avatar"/>
                    </div>
                    <div className= "containerForm">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name= "uname" required />
                        
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name= "psw" required />
                        
                        <button type= "submit">Login</button>
                    </div>
                    <div className="containerForm" style="background-color:#f1f1f1">
                        <button type= "button" className="cancelBtn">Cancel</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
 
export default LoginForm;