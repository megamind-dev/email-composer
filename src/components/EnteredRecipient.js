import React from 'react'
import PropTypes from 'prop-types'
import { faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function EnteredRecipient({ recipient, removeRecipient }) {
  return (
    <div className={recipient.isError ? 'error-contact' : 'completed-contact'}>
      {recipient.email}
      {recipient.isError && (
        <FontAwesomeIcon icon={faExclamationCircle} className='exclamation' />
      )}
      <FontAwesomeIcon
        icon={faTimes}
        className='contact-remove'
        onClick={() => removeRecipient(recipient.id)}
      />
    </div>
  )
}

EnteredRecipient.propTypes = {
  recipient: PropTypes.object.isRequired,
  removeRecipient: PropTypes.func.isRequired,
}

export default EnteredRecipient
