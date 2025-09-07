import React from 'react'

import {useState} from 'react'

const Profile = () => {
    let [ Profile , setProfile ] = useState({
        name : "",
        age : ""
    }) ;

    const handleChange = (e) => {

        const {name , value } = e.target ;

        setProfile((prevProfile) => ({
            ...prevProfile,
            [name] : value,
        })) ;
    }


  return (
    <div>
        <h2> User Profile </h2>

        <div>
            <label >
                Name :
                <input type="text" name="name" value ={Profile.name} onChange={handleChange} />
            </label>
        </div>

        <div>
            <label>
                Age:
                <input type="text" name="age" value={Profile.age} onChange={handleChange}  />
            </label>
        </div>

        <h3> Profile Information </h3>
        <p>Name : {Profile.name}</p>
        <p>Age : {Profile.age}</p>

    </div>
  )
}

export default Profile;