import React from 'react'
import '@app/views/styles/Components/spin.scss'
export const Spin: React.FC<any> = () => {
  return (
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}