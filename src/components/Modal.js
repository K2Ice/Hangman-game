import React, { useEffect, useRef } from "react"

const Modal = ({ click, isOpen }) => {
  const modal = useRef(null)

  useEffect(() => {
    if (!modal.current) return

    if (isOpen) {
      setTimeout(() => {
        modal.current.showModal()
      }, 500)
    } else {
      modal.current.close()
    }
  }, [isOpen])

  return (
    <dialog onClick={click} ref={modal}>
      <h1 style={{ textAlign: "center" }}>{isOpen}</h1>
      Kliknij aby rozpocząć nową grę
    </dialog>
  )
}

export default Modal
