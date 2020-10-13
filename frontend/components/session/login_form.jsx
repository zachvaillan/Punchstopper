import React from 'react';

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <br/>
                        <input type="text" value={this.state.email} onChange={this.onSubmit("email")}/>
                        <br/>
                    </label>
                    <label>Password
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.onSubmit("password")}/>
                        <br/>
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }

}

export default LoginForm;