import React from 'react';

class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            SignInEmail: '',
            SignInPassword:'',
        }
    }

    onEmailChange = (event)=>{
        this.setState({SignInEmail: event.target.value})
    }

    onPasswordChange = (event)=>{
        this.setState({SignInPassword: event.target.value})
    }

    onSubmitSignIn = () =>{
        fetch('http://localhost:3000/signin',{
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.state.SignInEmail,
                password: this.state.SignInPassword
,            })
        })
        .then(response=>response.json())
        .then(user=>{
            if (user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
        
    }

    render(){
        return (
            <main className="pv4 ph5 black-80 ba br2 b--black-10 dib shadow-5">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                            onChange={this.onEmailChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="email"
                            name="email-address"
                            id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                            onChange={this.onPasswordChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="password"
                            name="password"
                            id="password" />
                        </div>
                    </fieldset>
                    <div>
                        <input
                        onClick={this.onSubmitSignIn}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit"
                        value="Sign in" />
                    </div>
                </div>
            </main>
        );
    }

}

export default SignIn;