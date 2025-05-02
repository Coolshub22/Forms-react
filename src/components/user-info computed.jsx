import React, { useState } from 'react'

export default function UserInfoComputed() { 

    const [user, setUser] = useState({    
    firstName:"",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    github: "",
    residence: ""
})

const handleChange = (event) => {
  const {name, value} = event.target

  setUser((prevFormData) => ({
    ...prevFormData,
    [name]: value,   // computed property value
  }));
}

const handleSubmit = (event) => {
  event.preventDefault();
  setUser({
  firstName:"",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  github: "",
  residence: ""
})
}


    
  return (
    <div className='h-screen flex items-center justify-center'>
        
        <form action="" 
        className='gap-3 border flex flex-col p-5 rounded-2xl w-[400px]'
        onSubmit={handleSubmit} >
            <h2 className='text-2xl font-bold '>
              Enter Info</h2>
            <input
            name="firstName" 
            type="text"
             placeholder='FirstName'
             className='border outline-none rounded-md p-2 ' 
            value={user.firstName} 
            onChange={handleChange}
            
            />
            <input
            name= "lastName"
             type="text"
             placeholder='LastName'
             className='border outline-none rounded-md p-2'
             value={user.lastName}
             onChange={handleChange}
            
              />
            <input 
            name= "email"
            type="email"
             placeholder='Email' 
             className='border outline-none rounded-md p-2'
             value={user.email}
             onChange={handleChange}
            
              />
            <input 
            name='phone'
            type="tel" 
            placeholder='Telephone Number'
             className='border outline-none rounded-md p-2'
             value={user.phone}
             onChange={handleChange}
            
              />
            <label 
            className='flex flex-col gap-3 text-gray-500'>
                Enter your date of birth
                <input 
                name='dob'
                className='gap-3 border flex flex-col p-2 rounded-2xl'
                 type="date" 
                 value={user.dob}
                 onChange={handleChange}
                
                 />
            </label>
            <label>
                <input
                name='gender' 
                type="radio" 
                value={"Male"}
                 checked={user.gender === "Male"}
                 onChange={handleChange}
                
                />
                Male
            </label>
            <label>
                <input 
                name='gender'
                type="radio" 
                value={"Female"}
                checked={user.gender === "Female"}
                onChange={handleChange}
                
                />
                Female
            </label>
            <input 
            name='github'
            type="url" 
            placeholder='Github' 
            className='border outline-none rounded-md p-2'
             value={user.github}
             onChange={handleChange}
            
             />
            <input 
            name='residence'
            type="text"
             placeholder='Place of Residence'
             className='border outline-none rounded-md p-2'
             value={user.residence}
             onChange={handleChange}
            
              />
<button 
className='bg-black text-white p-3 rounded-2xl'>
    Submit</button>
        </form>
    </div>
  )
}
