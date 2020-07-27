import React, { useState } from 'react'
import Recipient from '../components/Recipient'
import { v4 as uuidv4 } from 'uuid'

const initRecipients = [
  {
    id: '1',
    email: 'theresa@outlook.com',
    isError: false,
  },
  {
    id: '2',
    email: 'erictayler',
    isError: true,
  },
]

function Composer() {
  const [recipients, setRecipients] = useState(initRecipients)
  const addRecipient = (email) => {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    setRecipients((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        email,
        isError: !emailRegex.test(email),
      },
    ])
  }

  const removeRecipient = (id) => {
    setRecipients((prevState) => prevState.filter((r) => r.id !== id))
  }

  return (
    <div className='composer'>
      <h3>This is the composer component</h3>

      <Recipient
        recipients={recipients}
        addRecipient={addRecipient}
        removeRecipient={removeRecipient}
      />
    </div>
  )
}

export default Composer
