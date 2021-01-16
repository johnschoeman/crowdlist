import React from "react"
import { withRouter } from "react-router"

import { Images } from "../../assets"

const Logo = ({ history }) => {
  const handleOnClick = () => {
    history.push("/")
  }

  const styleText = {
    marginLeft: "5px",
  }

  return (
    <div className="logo" onClick={handleOnClick}>
      <img src={Images.logo} className="logo-img" />
      <div style={styleText}>
        <p className="logo-text-main">Crowd List</p>
        <p className="logo-text-second">The best new campaigns, every day</p>
      </div>
    </div>
  )
}

export default withRouter(Logo)

