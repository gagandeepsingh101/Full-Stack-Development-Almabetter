import React from 'react'

const UserInfo = (props) => {
  const {name,email,age} = props
  return (
    <div>
      <h2>User Info</h2>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>Age  : {age}</p>
    </div>
  )
}

export default UserInfo
