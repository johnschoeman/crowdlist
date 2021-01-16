import React, { useState } from "react"
import ReactModal from "react-modal"
import SessionFormContainer from "../session_form/session_form_container"

const HeroBanner = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalFormType, setModalFormType] = useState("login")

  const openModal = (formType) => {
    return () => {
      setModalFormType(formType)
      setModalIsOpen(true)
    }
  }

  const afterModalOpen = () => {
    ReactModal.defaultStyles.overlay.backgroundColor = "rgba(128,128,128,0.75)"
    ReactModal.defaultStyles.content.display = "flex"
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const handleClick = (formType) => {
    return () => {
      openModal(formType)()
    }
  }

  return (
    <div className="hero-banner">
      <ReactModal
        id="modal"
        isOpen={modalIsOpen}
        onAfterOpen={afterModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal_Content"
        className="modal"
      >
        <SessionFormContainer
          formType={modalFormType}
          closeModal={closeModal}
        />
      </ReactModal>
      <div className="hero-banner-container">
        <div className="hero-banner-content">
          <span className="hero-banner-title">Fund your next campaign</span>
          <p className="hero-banner-text">
            Crowd List surfaces the best new campaigns, every day. It's a place
            for investors looking to democratize venture capital.
          </p>
          <button className="hero-button" onClick={handleClick("signup")}>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner

