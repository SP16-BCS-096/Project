import React, { Component } from "react";
import { Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import './CandidateSignup.css';
import { store } from 'react-notifications-component';
import{
   getFromStorage,
  setInStorage 
} from './utils/storage.js';
import { NotificationManager } from 'react-notifications';

class CandidateSignup extends Component {
 constructor(props) {
    super(props);

        this.onChangeSignUpUsername = this.onChangeSignUpUsername.bind(this);
        this.onChangeSignUpEmail = this.onChangeSignUpEmail.bind(this);
        this.onChangeSignUpPassword = this.onChangeSignUpPassword.bind(this);
        this.onChangeSignUpPhone = this.onChangeSignUpPhone.bind(this);
        this.onSignUp = this.onSignUp.bind(this);

    this.state ={
    isLoading : true,
    signUpError: '',
    signUpUsername:'',
    signUpEmail:'',
    signUpPassword:'',
    signUpPhone:'',
}
        
    }

  onChangeSignUpUsername(e) {
    this.setState({
      signUpUsername: e.target.value
      
    })
  }
   onChangeSignUpEmail(e) {
    this.setState({
      signUpEmail: e.target.value
      
    })
  }
onChangeSignUpPassword(e) {
    this.setState({
      signUpPassword: e.target.value
    })
  }

   onChangeSignUpPhone(e) {
    this.setState({
      signUpPhone: e.target.value
      
    })
  }
  onSignUp(e){
     const candidate = {
      username: this.state.signUpUsername,
      email: this.state.signUpEmail,
      password: this.state.signUpPassword,
      phone: this.state.signUpPhone,

    }


    axios.post('http://localhost:5000/candidates/Signup', candidate)
      .then(res => alert(res.data));

    this.setState({
      username: '',
      email:'',
      password: '',
      phone: '' ,
    })
    
  }
  

  render() {

    const{
    isLoading,
    token,
    signUpError,
    signUpUsername,
    signUpEmail,
    signUpPassword,
    signUpPhone

    } =this.state;

    if(!token){
      
        return (

          <div className ="SignUpcontainer">
          <br/>
       {
        (signUpError)? (
          <p> {signUpError}</p>
          ) : (null)
       }
          <div className ="CandidateSignup">
            <form>
          <Col sm="4">
                <h3>Sign Up</h3>
          
                <div className="form-group">
                    <label>User name<span class="required">*</span></label>
                    <input  type="text"
                required
                className="form-control"
                value={signUpUsername}
                onChange={this.onChangeSignUpUsername}
                required/>
                </div>

                <div className="form-group">
                    <label>Email<span class="required">*</span></label>
                     <input  type="text"
                required
                className="form-control"
                value={signUpEmail}
                onChange={this.onChangeSignUpEmail}
                required/>
                </div>

                <div className="form-group">
                    <label>Password<span class="required">*</span></label>
                     <input  type="password"
                required
                className="form-control"
                value={signUpPassword}
                onChange={this.onChangeSignUpPassword}
               required/>
                </div>
 
                <div className="form-group">
                    <label>Phone<span class="required">*</span></label>
                     <input  type="text"
                required
                className="form-control"
                value={signUpPhone}
                onChange={this.onChangeSignUpPhone}
                required/>
                </div>
                 <div className="form-group">
            <button className ="b" onClick={this.onSignUp} >Sign Up</button>
          </div>
                <p className="forgot-password text-right">
                  Already registered <a href="./CandidateLogin">sign in?</a>
                </p>
                </Col>

            </form>
            </div>
            <br/>

            </div>
        );
    }
}
}

export default CandidateSignup;