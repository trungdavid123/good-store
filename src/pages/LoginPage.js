import React, { useEffect } from 'react';
import GoogleAuth from '../components/GoogleAuth';

function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="container">
      <div class="row mb-10r">
        <div class="col-sm-4 col-sm-offset-1">
          <div class="login-form">
            <h2>Login to your account</h2>
            <form action="#">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <span>
                <input type="checkbox" class="checkbox" />
                Keep me signed in
              </span>
              "
              <div style={{ marginBottom: '1rem' }}>
                <button type="submit" class="btn btn-default">
                  Login
                </button>
              </div>
            </form>
            <GoogleAuth />
          </div>
        </div>
        <div class="col-sm-1">
          <h2 class="or">OR</h2>
        </div>
        <div class="col-sm-4" style={{ marginBottom: '3rem' }}>
          <div class="signup-form">
            <h2>New User Signup!</h2>
            <form action="#">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button type="submit" class="btn btn-default">
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
