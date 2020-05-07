import React, { useState } from 'react';
import { Input, Row, Col, Checkbox, Button } from 'antd';
import authService from '@app/domain/auth/services';

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ userName: false, password: false, error: false })
  const { login } = authService

  const signIn = () => {
    if (userName === "") {
      setError({ ...error, userName: true, error: true })
    }
    if (password === "") {
      setError({ ...error, password: true, error: true })
    }

    if (!error.error) {
      login(userName, password)
    }

  }

  return (
    <div className="login-form__content__input">
      <Input placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
      {error.userName && <span className="error">Username cannot be empty!</span>}
      <Input.Password placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      {error.password && <span className="error">Password cannot be empty!</span>}
      <Row>
        <Col span={12}>
          <Checkbox>Remember Me</Checkbox>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button type="primary" onClick={signIn}>Sign In</Button>
        </Col>
      </Row>
    </div>
  );
};

export default LoginForm;