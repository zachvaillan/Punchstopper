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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <br/>
                        <input type="text" value={this.state.name} onChange={this.onSubmit("name")}/>
                        <br/>
                    </label>
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
                    <button type="submit">Signup</button>
                </form>
            </div>
        );
    }

}

export default SignupForm;