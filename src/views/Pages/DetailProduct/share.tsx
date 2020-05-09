import React from 'react'
import { Modal } from 'antd'
import { FacebookOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons'
export const shareProduct = () => {
  Modal.info({
    style: { margin: 'auto' },
    title: 'Share Product',
    content: (
      <div
        style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}
      >
        <FacebookOutlined style={{ fontSize: 25, color: "#3b5998" }} />
        <TwitterOutlined style={{ fontSize: 25, color: "#00acee" }} />
        <WhatsAppOutlined style={{ fontSize: 25, color: "#25D366" }} />
      </div>
    ),
    maskClosable: true
  })
}