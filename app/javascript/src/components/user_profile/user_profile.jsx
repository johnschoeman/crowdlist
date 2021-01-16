import React, { useEffect } from "react"
import UserHeader from "./user_header"
import UserProfileNav from "./user_profile_nav"
import ProductsIndexContainer from "../products_index/products_index_container"

const UserProfile = ({ viewedUser, currentUserId, fetchUser, match }) => {
  useEffect(() => {
    const viewedUserId = match.params.userId
    fetchUser(viewedUserId)
  }, [])

  return (
    <div className="user-profile">
      <UserHeader user={viewedUser} currentUserId={currentUserId} />
      <div className="user-profile-content-container">
        <div className="user-profile-nav-container">
          <UserProfileNav user={viewedUser} />
        </div>
        <div className="user-profile-index-container">
          <ProductsIndexContainer />
        </div>
      </div>
    </div>
  )
}

export default UserProfile

