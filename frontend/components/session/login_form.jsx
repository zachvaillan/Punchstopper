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
        this.props.loginUser(this.state)
            .then(() => this.props.history.push('/'));
    }

    render(){
        return(
            <div className="bg-form">
                <div className="user-account-form-container">
                    <div className="another-container">
                        <div className="user-account-form">
                            <div className="form-header">
                                <p className="signup-form-header">Log in</p>
                            </div>
                            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
                                <ul>
                                    <li className="add-padding-after">
                                        <input type="text" placeholder="Email" autoFocus="autofocus"
                                        value={this.state.email} onChange={this.onSubmit("email")}/>
                                    </li>

                                    <li className="remove-margin">
                                        <input type="password" placeholder="Password" 
                                        value={this.state.password} onChange={this.onSubmit("password")}/>
                                    </li>
                                  
                                    <li className="errors">
                                        <p className="error-space">{this.props.errors}</p>
                                    </li>

                                    <li><button onClick={this.handleSubmit} className="submit-form" id="margin-for-error" type="submit">Log in</button></li>
                                    
                                    <li><button className="demo-btn"
                                    onClick={() => this.props.loginUser({"email":"demo", "password":"demodemo"}).then(() => this.props.history.push('/'))}>
                                    Demo User</button></li>

                                </ul>
                            </form>
                        </div>
                        <div className="login-form-switch">
                                <p>New to PunchStopper? <Link className="form-switch-btn" to="/signup">Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginForm;