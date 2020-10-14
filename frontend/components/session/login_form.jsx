import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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
        this.props.loginUser(this.state)
            .then(() => this.props.history.push('/'));
    }

    render(){
        return(
            <div className="bg-form">
                <div className="user-account-form-container">
                    <div className="another-container">
                        <div className="signup-form-switch">
                                <p>Already have an account? <Link to="/login">Log in</Link></p>
                        </div>
                        <div className="user-account-form">
                            <p className="signup-form-header">Log in</p>
                            <form className="signup-form" onSubmit={this.handleSubmit}>
                                <ul>
                                    <li>
                                        <input type="text" placeholder="Email" 
                                        value={this.state.email} onChange={this.onSubmit("email")}/>
                                    </li>
                                    <li>
                                        <input type="password" placeholder="Password" 
                                        value={this.state.password} onChange={this.onSubmit("password")}/>
                                    </li>
                                    <li><button className="submit-form" type="submit">Log in</button></li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginForm;