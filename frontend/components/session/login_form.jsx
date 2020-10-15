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
                        <div className="user-account-form">
                            <p className="signup-form-header">Log in</p>
                            <form className="signup-form" onSubmit={this.handleSubmit}>
                                <ul>
                                    <li>
                                        <input type="text" placeholder="Email" autoFocus="autofocus"
                                        value={this.state.email} onChange={this.onSubmit("email")}/>
                                    </li>
                                    <li>
                                        <input type="password" placeholder="Password" 
                                        value={this.state.password} onChange={this.onSubmit("password")}/>
                                    </li>
                                    <li><button className="submit-form" type="submit">Log in</button></li>
                                    
                                    <li><button className="demo-btn"
                                    onClick={() => this.props.loginUser({"email":"mrme@gmail.com", "password":"Deab50199"}).then(() => this.props.history.push('/'))}>
                                    Demo User</button></li>

                                </ul>
                            </form>
                        </div>
                        <div className="login-form-switch">
                                <p>New to Kickstarter? <Link className="form-switch-btn" to="/signup">Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginForm;