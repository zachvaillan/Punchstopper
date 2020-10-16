import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    onSubmit(field){
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createUser(this.state)
            .then(() => this.props.history.push('/'));
    }

    render(){

        let passwordErrs = "";
        this.props.errors.forEach( error => error.includes("Password") ? passwordErrs = error : null)

        let emailErrs = "";
        this.props.errors.forEach( error => error.includes("Email") ? emailErrs = error : null)

        let nameErrs = "";
        this.props.errors.forEach( error => error.includes("Name") ? nameErrs = error : null)

        return(
            <div className="bg-form">
                <div className="user-account-form-container">
                    <div className="another-container">
                        <div className="signup-form-switch">
                                <p>Already have an account? <Link className="form-switch-btn" to="/login">Log in</Link></p>
                        </div>
                        <div className="user-account-form">
                            <p className="signup-form-header">Sign up</p>
                            <form className="signup-form" onSubmit={this.handleSubmit}>
                                <ul className="signup-ul">
                                    <li>
                                        <input type="text" autoFocus="autofocus" placeholder="Name" 
                                        value={this.state.name} onChange={this.onSubmit("name")}/>
                                    </li>

                                    <li className="errors">
                                        <p className="error-space">{nameErrs}</p>
                                    </li>
                                   
                                    <li>
                                        <input type="text" placeholder="Email" 
                                        value={this.state.email} onChange={this.onSubmit("email")}/>
                                    </li>

                                    <li className="errors">
                                        <p className="error-space">{emailErrs}</p>
                                    </li>
                              
                                    <li>
                                        <input type="password" placeholder="Password" 
                                        value={this.state.password} onChange={this.onSubmit("password")}/>
                                    </li>
                                    
                                    <li className="errors">
                                        <p className="error-space-password">{passwordErrs}</p>
                                    </li>

                                    <li><button className="submit-form" type="submit">Create account</button></li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SignupForm;