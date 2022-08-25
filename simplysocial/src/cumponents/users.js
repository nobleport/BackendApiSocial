import React from 'react'

function users(props) {
  return (
    <div>
        <h1>These books are from the API</h1>
        {props.users.map((user) => {
            return (
                <div key={user.id}>
                    <h2>{user.username}</h2>
                    <h2>{user.email}</h2>
                </div>
            )}
        )}
    </div>
  )
}

export default users