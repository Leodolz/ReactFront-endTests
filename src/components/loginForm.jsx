import React, { Component } from 'react';
import userImg from '../images/userImage.png';

class LoginForm extends Component {
    state = { contacts: [] }
    render() { 
        console.log(this.state.contacts.id);
        return (
            <React.Fragment>
                <form id="StudentForm" onSubmit={this.handleSubmit} /*method="get"*/ >
                    <div className="imgContainter">
                        <img src={userImg} alt="Student" className="avatar"/>
                    </div>
                    <div className= "containerForm">
                        <label><b>Username: </b></label>
                        <input type="text" name="uname" placeholder="Enter Username" />
                        <br></br>
                        <label><b>Password: </b></label>
                        <input type="password" placeholder="Enter Password" required />
                        <br></br>
                        <button type="submit" >Login</button>
                    </div>
                    <div className="containerForm" >
                        <button type= "button" className="cancelBtn">Cancel</button>
                    </div>
                </form>
                
            </React.Fragment>
        );
    }
    handleSubmit =(event) =>
    {
        event.preventDefault();
        let name = event.target.uname.value;
        fetch('http://localhost:51061/api/Users/'+name)
        .then(result=>result.json())
        .then((data)=>{
            this.setState({contacts: data})
        })
        .catch(this.handleCatch);
        
    }
    handleCatch = ()=>
    {
        alert("Incorrect username or password!");
        document.getElementById("StudentForm").reset();
    }
    handlePost = (event) =>
    {
        event.preventDefault();
        fetch('http://localhost:51061/api/Users/',
        {
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 3,
                name: 'Leandro',
                email: 'leandro@bolivia.com',
                phone: '888888',
                role: 10
            })
        })
    }
}
 
export default LoginForm;