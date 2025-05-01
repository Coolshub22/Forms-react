import React, { useState } from 'react'

export default function UserInfo() { 

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

    
  return (
    <div className='h-screen flex items-center justify-center'>
        
        <form action="" className='gap-3 border flex flex-col p-5 rounded-2xl w-[400px]' >
            <h2 className='text-2xl font-bold '>Enter Info</h2>
            <input type="text"
             placeholder='FirstName'
             className='border outline-none rounded-md p-2 ' 
            value={user.firstName} 
            />
            <input type="text"
             placeholder='LastName'
             className='border outline-none rounded-md p-2'
             value={user.lastName}
              />
            <input type="email"
             placeholder='Email' 
             className='border outline-none rounded-md p-2'
             value={user.email}
              />
            <input type="tel" 
            placeholder='Telephone Number'
             className='border outline-none rounded-md p-2'
             value={user.phone}
              />
            <label 
            className='flex flex-col gap-3 text-gray-500'>
                Enter your date of birth
                <input 
                className='gap-3 border flex flex-col p-2 rounded-2xl'
                 type="date" 
                 value={user.dob}
                 />
            </label>
            <label>
                <input type="radio" 
                value={"Male"}
                 checked={user.gender === "Male"}
                />
                Male
            </label>
            <label>
                <input type="radio" 
                value={"Female"}
                checked={user.gender === "Male"}
                />
                Female
            </label>
            <input type="url" 
            placeholder='Github' 
            className='border outline-none rounded-md p-2'
             value={user.github}
             />
            <input type="text"
             placeholder='Place of Residence'
             className='border outline-none rounded-md p-2'
             value={user.residence}
              />
<button 
className='bg-black text-white p-3 rounded-2xl'>
    Submit</button>
        </form>
    </div>
  )
}
