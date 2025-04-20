import React from 'react'

export default function UserInfo() { 
  return (
    <div className='h-screen flex items-center justify-center'>
        <form action="" className='gap-3 border flex flex-col p-5 rounded-2xl' >
            <input type="text" placeholder='FirstName' className='border outline-none rounded-md p-2 ' />
            <input type="text" placeholder='LastName' className='border outline-none rounded-md p-2' />
            <input type="email" placeholder='Email' className='border outline-none rounded-md p-2' />
            <input type="tel" placeholder='Telephone Number' className='border outline-none rounded-md p-2' />
            <label>
                <input type="date" />
                Enter your date of birth
            </label>
            <label>
                <input type="radio" />
                Male
            </label>
            <label>
                <input type="radio" />
                Female
            </label>
            <input type="url" placeholder='Github' className='border outline-none rounded-md p-2' />
            <input type="text" placeholder='Place of Residence' className='border outline-none rounded-md p-2' />

        </form>
    </div>
  )
}
