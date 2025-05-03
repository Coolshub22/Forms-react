import React from 'react'
import { users } from '../data/user'

export default function Users() {
  return (
    <div className='min-h-screen container mx-auto'>
        <div className='grid grid-cols-3 gap-5'>
            {users.map((user)=> (
                <div className='border rounded-md p-5' key={user.id}>
                    <h1 className='text-2xl font-bold'>
                        {user.firstName} {user.lastName}
                    </h1>
                    <div className='flex gap-2'>
                        <p className=''>
                            Role:
                        </p>
                        <p
                        className={
                            user.role === 'Protagonist'
                            ? 'font-bold text-green-500' 
                            : user.role === 'Villain'
                            ? 'font-bold text-red-500'
                            : 'font-extrabold text-amber-500'
                        }>
                            {user.role}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
