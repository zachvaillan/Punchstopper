import React from 'react';

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
                    <div className="user-account-form">
                        <p className="login-form-header">Login</p>
                        <form className="signup-form" onSubmit={this.handleSubmit}>
                            <input type="text" autoFocus="autofocus" placeholder="Name" value={this.state.name} onChange={this.onSubmit("name")}/>
                            <input type="text" placeholder="Email" value={this.state.email} onChange={this.onSubmit("email")}/>
                            <input type="password" placeholder="Password" value={this.state.password} onChange={this.onSubmit("password")}/>
                            <button type="submit">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default SignupForm;