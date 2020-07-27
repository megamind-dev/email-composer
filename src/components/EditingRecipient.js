import React, { useState } from 'react'
import PropTypes from 'prop-types'

function EditingRecipient({ addRecipient }) {
  const [text, setText] = useState('')
  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.keyCode === 9) {
      e.preventDefault()
      addRecipient(text)
      setText('')
    }
  }

  return (
    <div className='editing-contact' data-value={text}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
        ref={(input) => input && input.focus()}
      />
    </div>
  )
}

EditingRecipient.propTypes = {
  addRecipient: PropTypes.func.isRequired,
}

export default EditingRecipient
