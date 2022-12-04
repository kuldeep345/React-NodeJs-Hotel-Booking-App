import React from 'react'
import './sidebar.scss'
import {Dashboard , Person , StoreMallDirectory , CreditCard , LocalShipping , InsertChart , NotificationsNone , SettingsSystemDaydreamOutlined , PsychologyOutlined , SettingsApplications , AccountCircleOutlined , ExitToApp } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">codewithsingh</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Person className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <StoreMallDirectory className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <CreditCard className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChart className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  )
}

export default Sidebar