import React from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { APP_CONFIG } from '@app/constant/app.config';
import '@app/views/styles/Pages/login.scss'
import { Input, Row, Col, Button, Checkbox } from 'antd';

const Login = () => {

  const responseFacebook = (response: any) => {
    console.log(response);
  }
  // const clickFacbook = (e: any) => {
  //   console.log(e)
  // }

  const responseGoogle = (response: any) => {
    console.log(response);
  }

  return (
    <div className="login-form">
      <div className="login-form__content">
        <h1>Login</h1>
        <div className="login-form__content__input">
          <Input placeholder="Username" />
          <Input.Password placeholder="Password" />
          <Row>
            <Col span={12}>
              <Checkbox>Remember Me</Checkbox>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button type="primary">Sign In</Button>
            </Col>
          </Row>
        </div>
        <FacebookLogin
          appId={APP_CONFIG.FACBOOK_ID}
          // autoLoad={true}
          fields="name, email, picture"
          callback={responseFacebook}
          icon="fa-facebook"
        />
        <GoogleLogin
          className="googleBtn"
          clientId={APP_CONFIG.GOOGLE_ID}
          buttonText="SIGN IN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          fetchBasicProfile
        />
      </div>
    </div>
  );
};

export default Login;