import React from 'react'
import PropTypes from 'prop-types'
import EnteredRecipient from './EnteredRecipient'
import EditingRecipient from './EditingRecipient'

function Recipient({ recipients, addRecipient, removeRecipient }) {
  return (
    <div className='tofield'>
      <div className='tofield-label'>To: </div>
      <div className='contact-container'>
        {recipients &&
          recipients.length > 0 &&
          recipients.map((r) => (
            <EnteredRecipient
              key={r.id}
              recipient={r}
              removeRecipient={removeRecipient}
            />
          ))}
        <EditingRecipient addRecipient={addRecipient} />
      </div>
    </div>
  )
}

Recipient.propTypes = {
  recipients: PropTypes.array.isRequired,
  addRecipient: PropTypes.func.isRequired,
  removeRecipient: PropTypes.func.isRequired,
}

export default Recipient
