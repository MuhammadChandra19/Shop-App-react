import React from 'react';
import { history } from '@app/utils/redux/store';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface BackButtonProps {
  onBack?: () => void
}
const BackButton: React.FC<BackButtonProps> = () => {
  return (
    <ArrowLeftOutlined
      onClick={() => {
        history.goBack()
        // onBack()
      }}
      style={{
        fontSize: 22,
        marginTop: 22,
        marginLeft: -8,
        color: "#7ACBCF",
        cursor: "pointer"
      }}
    />
  );
};

export default BackButton;