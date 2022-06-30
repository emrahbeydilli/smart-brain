import React from 'react';
const Register = ({onRouteChange}) => {
    return (
        <main class="pv4 ph5 black-80 ba br2 b--black-10 dib shadow-5">
            <form class="measure center">
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="f3 fw6 ph0 mh0">Sign In</legend>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="name">Name</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                    </div>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                    </div>
                    <div class="mv3">
                        <label class="db fw6 lh-copy f6" for="password">Password</label>
                        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                    </div>
                </fieldset>
                <div class="">
                    <input
                    onClick={()=>onRouteChange('home')}
                    class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit"
                    value="Sign in" />
                </div>
            </form>
        </main>
     );
}
 
export default Register;