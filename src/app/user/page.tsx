import React, { FC } from 'react'
import "./user.scss" 
import SideBar from '@/compnents/sidebar/SideBar'

const User: FC = () => {
  return (
    <div className='user'>
      <SideBar/>
      <div></div>
    </div>
  )
}

export default User