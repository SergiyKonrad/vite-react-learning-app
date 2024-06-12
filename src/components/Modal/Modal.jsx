import { createPortal } from 'react-dom'
import { useRef, useEffect } from 'react'
import './Modal.css'

export default function Modal({ children, open, onClose }) {
  const dialog = useRef()

  useEffect(() => {
    if (open) {
      dialog.current.showModal()
    } else {
      dialog.current.close()
    }
  }, [open])

  return createPortal(
    <dialog ref={dialog} onClose={onClose}>
      <div className="modal-content">{children}</div>
    </dialog>,
    document.getElementById('modal'),
  )
}
