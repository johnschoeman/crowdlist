import React, { useState } from "react"
import { withRouter } from "react-router-dom"

const SessionForm = ({
  formType,
  errors,
  processForm,
  closeModal,
  history,
  fetchAllProducts,
}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { username, password }
    processForm(user)
      .then(closeModal)
      .then(() => {
        history.push("/")
      })
      .then(() => {
        fetchAllProducts()
      })
  }

  const updateUsername = (e) => {
    setUsername(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  let btnText = undefined

  if (formType === "login") {
    btnText = "LOG IN"
  } else {
    btnText = "SIGN UP"
  }

  return (
    <div className="session-form">
      <h2>Login to Join The Community</h2>
      <p className="intro">
        Crowd List is a community to share and find the latest crowdsourced
        investements.
      </p>

      <ul className="session-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <div className="form-input-container">
          <div className="form-input">
            <label>Username</label>
            <input
              type="text"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>

          <div className="form-input">
            <label>Password</label>
            <input
              type="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>

          <div className="session-btn-nav">
            <input
              type="submit"
              className="brand-button medium-size"
              value={btnText}
            ></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default withRouter(SessionForm)

