import React from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { APP_CONFIG } from '@app/constant/app.config';
import '@app/views/styles/Pages/login.scss'
import { message } from 'antd';
import authService from '@app/domain/auth/services';
import LoginForm from './LoginForm';

const Login = () => {
  const { facebookLogin, googleLogin } = authService

  const responseFacebook = (response: any) => {
    facebookLogin(response)
  }

  const responseGoogle = (response: any) => {
    googleLogin(response)
  }

  const responseError = (response: any) => {
    message.error(response.error || 'Something is wrong. Please try again')
  }

  return (
    <div className="login-form">
      <div className="login-form__content">
        <h1>Login</h1>
        <LoginForm />
        <FacebookLogin
          appId={APP_CONFIG.FACBOOK_ID}
          // autoLoad={true}
          fields="name, email, picture"
          callback={responseFacebook}
          onFailure={responseError}
          icon="fa-facebook"
        />
        <GoogleLogin
          className="googleBtn"
          clientId={APP_CONFIG.GOOGLE_ID}
          buttonText="SIGN IN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseError}
          cookiePolicy={'single_host_origin'}
          fetchBasicProfile
        />
      </div>
    </div>
  );
};

export default Login;