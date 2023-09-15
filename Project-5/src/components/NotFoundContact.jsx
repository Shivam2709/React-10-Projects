import React from 'react'

const NotFoundContact = () => {
  return (
    <div className='flex h-[60vh] items-center justify-center gap-3'>
        <div>
            <img src="/contact.png" alt="" />
        </div>
        <h3 className='text-2xl font-semibold text-white'>Contact Not Found</h3>
    </div>
  )
}

export default NotFoundContact;