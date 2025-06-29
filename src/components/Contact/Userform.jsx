import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' // for unique id(check uuid website)
import './UserForm.css'
//initialize all var
const Userform = () => {
  const [name, setName] =useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [users, setUsers] = useState([]) // store all submitted data

  const handleSubmit = (e) => {
    e.preventDefault() //reload pana datas poidakodathu so we use this

    // generate id with uuid
    const newUser = {
      id: uuidv4(),
      name: name,
      email: email,
      location: location
    }

    // add new user to users list one after the other one like user1,user2..
    const updatedUsers =[...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("userData",JSON.stringify(updatedUsers));

    // clear form fields
    setName('')
    setEmail('')
    setLocation('')
  }

  return (
    <div className="form-container">
      <h2>Enter your details</h2>
      <form onSubmit={handleSubmit} className='form-detail'> 
        <div>
          <label>Name:</label>
          <input type='text' 
                 required
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
          />
        </div>               
        <div>
          <label>Email: </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Location: </label>
          <input
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit" className='form-button'>Submit</button>
      </form>

      <hr />

      <h3>Submitted Users:</h3>
      <ul >
        {users.map((user) => (
          <li key={user.id} >
            <strong>ID:</strong> {user.id} | <strong>Name:</strong>{user.name} | <strong>Email:</strong> {user.email} | <strong>Location:</strong> {user.location}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Userform


/*
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
const Userform = () =>{
  const [email,setEmail]= useState('')
  const [location,setLocation]= useState('')
  const [users,setUsers]= useState([])
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    const newUser = {
      id: uuidv4(),
      email: email,
      location: location
    }
    setUsers([...users, newUser])
    setEmail('')
    setLocation('')
    
  }
  return(
    <div className="form-cont">
      <h2>enter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" required value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div>
          <label>location:</label>
          <input type="text" required value={location} onChange={(e)=>setLocation(e.target.value)} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <hr/>
      <h3>Submitted users: </h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id} | <strong>Email:</strong> {user.email} | <strong>Location:</strong> {user.location}
          </li>
        ))}
      </ul>


    </div>
  )
}

export default Userform
*/