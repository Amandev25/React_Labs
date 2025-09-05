import React from 'react'

const UserStatus = () => {
    let loggedIn = true;
    let isAdmin = false;
    
    if( loggedIn && isAdmin )
    {
        return <h1> Welcome Admin !! </h1>
    }else{
        return <h1> Welcome User !!</h1>
    }
  
}

export default UserStatus