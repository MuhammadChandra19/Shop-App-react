import React, { useState, useEffect } from 'react';
import authService from '@app/domain/auth/services';
import { Avatar, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const User: React.FC = () => {
  const { getUserData, logout } = authService
  const [picture, setPicture] = useState(null)
  const [username, setUsername] = useState("")

  useEffect(() => {
    const { name, picture } = getUserData()
    setPicture(picture)
    setUsername(name)
  }, [])
  return (
    <div style={{ marginTop: 50 }}>
      {
        picture !== null ? (
          <Avatar size={70} src={picture} />
        ) : <Avatar size={70} icon={<UserOutlined />} />
      }
      <h3 style={{ marginTop: 10, color: "#7ACBCF" }}>{username}</h3>
      <Button
        type="primary"
        onClick={logout}
      >
        <LogoutOutlined />
          Log out
      </Button>
    </div>
  );
};

export default User;