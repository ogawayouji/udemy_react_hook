import React, {useState} from 'react'
import useInput from '../hooks/useInput'

function Form() {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const handleSubmit = e => {
    e.preventDefault()
    alert(`こんにちは! ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }
  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input
          type='text'
          // value={firstName}
          // onChange={e => setFirstName(e.target.value)} 
          {...bindFirstName}/>
        </div>
        <div>
        <label>Last Name</label>
          <input
          type='text'
          // value={lastName}
          // onChange={e => setLastName(e.target.value)} 
          {...bindLastName}/>
        </div>
        <button type='submit'>送信</button>
      </form>
    </div>
  )
}

export default Form
