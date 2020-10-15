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
                                <ul>
                                    <li>
                                        <input type="text" autoFocus="autofocus" placeholder="Name" 
                                        value={this.state.name} onChange={this.onSubmit("name")}/>
                                    </li>
                                    <li>
                                        <p className="errors">{this.props.errors[1]}</p>
                                    </li>
                                    <li>
                                        <input type="text" placeholder="Email" 
                                        value={this.state.email} onChange={this.onSubmit("email")}/>
                                    </li>
                                    <li>
                                        <p className="errors">{this.props.errors[0]}</p>
                                    </li>
                                    <li>
                                        <input type="password" placeholder="Password" 
                                        value={this.state.password} onChange={this.onSubmit("password")}/>
                                    </li>
                                    <li>
                                        <p className="errors">{this.props.errors[2]}</p>
                                    </li>
                                    <li>
                                        <div>
                                            <input type="checkbox"/><p>Send me a weekly mix of handpicked projects, 
                                            plus occasional Kickstarter news</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <input type="checkbox"/><p>Contact me about participating in 
                                            Kickstarter research</p>
                                        </div>
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